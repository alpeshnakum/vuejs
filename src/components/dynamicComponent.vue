<template>
    <div class="vueDynamicCompo">
        <button @click="compName = 'vueDyComp1'">Dy. Comp. 1</button>
        <button @click="compName = 'vueDyComp2'">Dy. Comp. 2</button>
        <component :is="compName" />
    </div>
</template>

<script>
import vueDyComp1 from './dyComp1.vue';
import vueDyComp2 from './dyComp2.vue';

export default {
    name: 'vueDynamicCompo',
    components: {
        vueDyComp1,
        vueDyComp2,
    },
    data() { 
        return {
            compName: vueDyComp1,
        }
    }
}
</script>

<style scoped>
.vueDynamicCompo {
    background-color: #ffee0038;
    padding: 10px;
}
</style>