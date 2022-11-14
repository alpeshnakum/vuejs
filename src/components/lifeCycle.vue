<template>
    <div class="lifeCycle">
        <h1>this are some text here</h1>
    </div>
</template>

<script>
export default {
    name: 'lifeCycle',
    data() { 
        return {
            toggleFlag: true,
        }
    },
    methods: {
        fn_toggle() { 
            this.toggleFlag = !this.toggleFlag;
        }
    },

    beforeDestroy() { 
        console.warn("beforeDestroy");
    },

    destroyed() { 
        console.warn("destroyed");
    }
}
</script>

<style>
.lifeCycle {
    background-color: #ff000038;
    padding: 10px;
}
</style>