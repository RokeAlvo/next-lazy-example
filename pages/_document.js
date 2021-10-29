import Document, {Html, Head, Main, NextScript} from 'next/document'

let chunksToLazy = []

class LazyHead extends Head {
    getDynamicChunks(files) {
        const dynamicScripts = super.getDynamicChunks(files);
        try {

            const loadableManifest = __non_webpack_require__(
                '../../react-loadable-manifest.json',
            );

            const chunksToExclude = Object.values(loadableManifest)
                .filter(
                    manifestModule => manifestModule?.files
                        ?.some(file => file.includes('DYNAMIC_IMPORT')) || false,
                );

            chunksToLazy = chunksToExclude

            const excludeMap = chunksToExclude?.reduce?.((acc, chunks) => {
                if (chunks.files) {
                    acc.push(...chunks.files);
                }
                return acc;
            }, []);

            const filteredChunks = dynamicScripts?.filter?.(
                script => !excludeMap?.includes(script?.key),
            );

            return filteredChunks;
        } catch (e) {
            return dynamicScripts;
        }
    }
}

const backupScript = NextScript.getInlineScriptSource;

NextScript.getInlineScriptSource = (props) => {
    if (props?.__NEXT_DATA__?.dynamicIds) {
        const filteredDynamicModuleIds = props?.__NEXT_DATA__?.dynamicIds?.filter?.(
            moduleID => !chunksToLazy.some(chunk => chunk.id === moduleID)
        );
        if (filteredDynamicModuleIds) {
            // mutate dynamicIds from next data
            props.__NEXT_DATA__.dynamicIds = filteredDynamicModuleIds;
        }
    }
    return backupScript(props);
};

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <LazyHead/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
