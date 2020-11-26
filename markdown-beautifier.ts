interface TagElement extends Element {
    innerText: string;
}

class MarkdownBeautifier {
    constructor() {
        console.log('Hello world');

        setInterval(() => {
            const preTag = document.getElementsByClassName('json');

            if (preTag) {
                for (let index = 0; index < preTag.length; index++) {
                    const tag = preTag[index];

                    if (tag) {
                        const formatCharacterData = (tag as TagElement).innerText.replace(/“+/g, "\"").replace(/”+/g, '\"')
                        let objData = {};

                        try {
                            objData = JSON.parse(formatCharacterData)
                        } catch (error) {
                            objData = {}
                        }

                        tag.innerHTML = JSON.stringify(objData, null, 2)
                    }
                }
            }
        }, 3000)
    }
}

export default new MarkdownBeautifier();