<script>


export default{
    name:'ProfilTab'
}
</script>
<template>
        <div>
            <router-view v-slot="{ Component }">
                <transition name="kompani" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
</template>
