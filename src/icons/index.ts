
// register globally
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const modules = import.meta.glob('./svg/*.svg');
import * as el_icons from '@element-plus/icons';

const icons:Array<string> = Object.keys(modules)
    .map(path =>
        path.replace('./svg/','li-')
            .replace('.svg','')
    );



export default [...Object.keys(el_icons),...icons];
