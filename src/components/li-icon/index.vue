<script lang='ts'>


import { defineComponent, h, resolveComponent } from 'vue';

export default defineComponent({

    props: {
        name: {
            type: String,
            default: () => 'Setting'
        },
        class: {
            type: String
        }
    },
    computed: {

        href() {
            return `#icon-${this.name}`;
        }
    },
    render() {

        let name = this.name || 'Setting';
        console.log('------------>', name);
        if (name?.startsWith('li-')) {
            return h('svg', { 'aria-hidden': true, class: this.class }, [

                h('use', { href: this.href }, () => [])
            ]
            );
        }
        return h(resolveComponent(name), { class: this.class }, () => []);
    }
});

</script>
