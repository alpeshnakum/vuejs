<template>
    <div class="vueSlotsNames">
        <header>
            <slot name="header">Product name</slot>
        </header>
        <content>
            <slot name="content">Product Description</slot>
        </content>
        <footer>
            <slot name="footer"><button>Click Here!</button></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'vueSlotsNames',

}
</script>

<style scoped>
.vueSlotsNames {
    background-color: #ff000038;
    padding: 10px;
}
</style>