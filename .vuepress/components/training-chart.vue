
<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'training-chart',
  extends: Line,
  mounted() {
    this.width = 768;
    this.renderChart({
      labels: ['#01', '#02', '#03', '#04', '#05', '#06', '#07', '#08', '#09', '#10'],
      datasets: [
        {
          label: 'nowcoder',
          backgroundColor: 'rgba(70, 230, 167, 0.16)',
          data: [48./744, 71./495, 121./513, 49./494, 48./528, 93./493, ],
          pointBorderColor: 'rgba(0, 145, 84, 1)',
          pointRadius: 8,
          pointHoverRadius: 12,
          pointStyle: 'crossRot',
        },
        {
          label: 'multi-univ',
          backgroundColor: 'rgba(82, 130, 224, 0.16)',
          data: [180./770, 78./821, 86./815, 658./802, 78./704, ],
          pointBorderColor: 'rgba(0, 86, 255, 1)',
          pointRadius: 8,
          pointHoverRadius: 12,
          pointStyle: 'crossRot',
        },
        {
          label: 'opentrains',
          backgroundColor: 'rgba(249, 122, 122, 0.16)',
          data: [81./106, 37./54, 46./101, 91./122, 69./197, 34./292, ],
          pointBorderColor: 'rgba(255, 0, 0, 1)',
          pointRadius: 8,
          pointHoverRadius: 12,
          pointStyle: 'crossRot',
        },
        {
          label: 'gold',
          backgroundColor: 'rgb(255, 255, 0)',
          data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
          pointRadius: 0,
          pointHoverRadius: 0,
        },
        /*{
          label: 'Silver Medal',
          backgroundColor: 'rgb(150, 150, 150)',
          data: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
          pointRadius: 0,
          pointHoverRadius: 0,
        },*/
      ],
    }, {
      responsive: true,
      maintainAspectRatio: true,
      title: { display: true, text: 'UESTC_Jungle Training Trending', fontSize: 16, position: 'bottom' },
    })
  }
}
</script>
