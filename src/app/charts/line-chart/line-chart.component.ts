import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart-colors';

const LINE_CHART_SAMPLE_DATA: any [] = [
  {data: [32, 14, 46, 23, 38, 58], label: 'ABC'},
  {data: [12, 20, 28, 13, 27, 28], label: 'DEF'},
  {data: [52, 34, 49, 53, 68, 62], label: 'GHI'},
];

const LINE_CHART_LABELS: string [] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartcolors =  LINE_CHART_COLORS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';

  ngOnInit(): void {
  }



}
