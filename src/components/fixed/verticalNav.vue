<template>
    <ul>
        <li  class="nItems" v-for="n,index in navigations" :key="index" :v-role="n[roleProperty]">
            <router-link v-if="isRoleAllowed(n[roleProperty])" :to="n[hrefProperty]">
                {{ n[textProperty] }}
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default{
        name : "verticalNav",
        props : {
            navigations : {
                type : Array,
                required : true
            },
            textProperty : {
                type : String,
                required : true
            },
            hrefProperty : {
                type : String,
                required : true
            },
            roleProperty : {
                type : String,
                required : true
            }
        },
        methods : {
            isRoleAllowed(roles) {
                return roles.includes(this.$store.getters.role);
            }
        }
    }
</script>

<style>
    .nItems{
        font-size: 20px !important;
    }
    .nItems:hover{
        color: red !important;
    }
</style>