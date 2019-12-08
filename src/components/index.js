import vueBigTree from './vueBigTree.vue';

// Vue 安裝 Plugin 時 ( Vue.use ) 會叫用 install 函式，在此時註冊元件
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component(vueBigTree.name, vueBigTree);
}

// 建立 Plugin 物件
const plugin = {
    install,
};

// 如果使用全域 Vue 物件 (例如 <script> 載入) 時直接使用 Plugin
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// 在 Local 引入時要直接使用元件
export default vueBigTree;