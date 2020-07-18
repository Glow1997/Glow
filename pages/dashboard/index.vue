<template>
    <div class="flex flex-col">
        <contentCard class="mt-2 mb-4">
            <template v-slot:title>
                SALES STATISTICS
            </template>
            <template v-slot:content>
                <div class="w-full overflow-hidden p-2">
                    <barChart :chartData="revenueMonthly.barChartData" 
                    :options="revenueMonthly.barChartOptions" :height="120"> </barchart>
                </div>                   
            </template>
        </contentCard>
    </div>
</template>
<script>
import ContentCard from "~/components/items/ContentCard.vue";
import BarChart from '~/components/charts/BarChart';
import  { mapState, mapActions } from 'vuex'

const chartColors = {
    red: 'rgb(225, 99, 132)',
    orange: 'rgb(225, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

export default {
    layout: "dashboard",
    components:{
        ContentCard,
        BarChart,
    },
    computed:{
        ...mapState({
            user : state => state.auth.user
        })
    },
    methods:{
        ...mapActions({
            userLogin : "auth/userLogin",
        })
    },
    data(){
        return {
            revenueMonthly: {
                barChartData:{},
                barChartOptions: {} 
            }
        }
    },
    async mounted(){
        await this.userLogin();

        await this.$apis.dashboard.revenue(this.user.uid, this.user.idToken)
            .then(res => {this.revenueMonthly = res})
    }
}    
</script>