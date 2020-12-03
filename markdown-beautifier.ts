interface TagElement extends Element {
    innerText: string;
}

class MarkdownBeautifier {
    constructor() {
        console.log('Hello world');

        setInterval(() => {
            /**
             * Handle pre tag with class 'json'
             */
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

            /**
             * Handle request sections
             */
            const sections = document.querySelectorAll('div.container.section.classic-single-column-section');

            if (sections.length) {
                for (let index = 0; index < sections.length; index++) {
                    const section = sections[index];

                    (section as any).style.maxWidth = '100%';
                    (section as any).style.width = '100%';
                }
            }

            /**
             * Handle table
             */
            const tables = document.querySelectorAll('div.click-to-expand-wrapper.is-table-wrapper.is-expandable')

            if (tables) {
                for (let index = 0; index < tables.length; index++) {
                    const table = tables[index];

                    (table as any).className = 'is-table-wrapper';
                }
            }
        }, 3000)
    }
}

export default new MarkdownBeautifier();