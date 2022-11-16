<template>
    <div class="vueSlots">
        <slot><p style="color: blue;">This is empty slot (default content)</p></slot>
        <!-- <slot><p>Slot no: 1</p></slot>
        <slot><p>Slot no: 2</p></slot> -->
    </div>
</template>

<script>
export default {
    name: 'vueSlots',

}
</script>

<style scoped>
.vueSlots{
    background-color: #ff000038;
    padding: 10px;
}
</style>