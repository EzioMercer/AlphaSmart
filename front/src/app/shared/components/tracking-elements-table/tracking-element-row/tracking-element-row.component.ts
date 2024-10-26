import { Component, Input } from '@angular/core';
import { EnergyLevel, TrackingElement } from '../../../constants';

@Component({
  selector: 'app-tracking-element-row',
  standalone: true,
  imports: [],
  templateUrl: './tracking-element-row.component.html',
  styleUrl: './tracking-element-row.component.scss'
})
export class TrackingElementRowComponent {
	@Input() trackingElement: TrackingElement = null!;

	readonly EnergyLevel = EnergyLevel;
}
