<template>
    <app-header />
    <div class="flex flex-row">
        <side-bar />
        <!-- <component :is="$route.meta.componentName" :items="bookmarkList" /> -->
    </div>
</template>

<script>
import sideBar from '@/components/Account/sideBar';
import io from "socket.io-client";

export default {
    components: {
        sideBar,
    },
    data() {
        return {
            bookmarkList: [],
        }
    },
    created() {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
            // console.log(bookmark_list_response);
            this.bookmarkList = bookmark_list_response?.data || [];
        })
    },
    mounted() {
        this.$socket = io("http://localhost:2018");
        this.$socket.on("WELCOME_MESSAGE", this.WELCOME_MESSAGE);
    }
}
</script>