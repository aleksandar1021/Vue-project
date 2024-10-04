<template>
    <nav class="link-effect-3" id="link-effect-3">
        <ul class="nav1 nav nav-wil">
            <router-link v-for="item, index in links" :key="index" :to="item[hrefProperty]" v-role="item[roleProperty]"><li v-if="isRoleAllowed(item[roleProperty])" class="link" ><a class="boja">{{ item[textProperty] }}</a></li></router-link>  
        </ul>
    </nav>
</template>

<script>
    export default{
        name : "navigationComponent",
        props:{
            hrefProperty : {
                type : String,
                required : true
            },
            textProperty : {
                type : String,
                required : true
            },
            roleProperty : {
                type : String,
                required : true
            },
            links : {
                type : Array,
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