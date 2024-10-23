import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TRACKING_ELEMENTS_NAMES_MAP, TrackingElement, TrackingElementType } from '../../constants';
import TrackingService from '../../../core/services/tracking.service';

@Component({
	selector: 'app-tracking-elements-table',
	standalone: true,
	imports: [],
	templateUrl: './tracking-elements-table.component.html',
	styleUrl: './tracking-elements-table.component.scss'
})
export class TrackingElementsTableComponent {
	@Input() trackingElementsType: TrackingElementType = TrackingElementType.Staff;
	@Output() closeTab = new EventEmitter<void>();

	trackingElements: TrackingElement[] = [];
	trackingElementsCount = 0;

	constructor(trackingElementsService: TrackingService) {
		this.trackingElements = trackingElementsService.trackingElements
			.filter(trackingElement => trackingElement.type === this.trackingElementsType)
		this.trackingElementsCount = this.trackingElements.length;
	}

	get trackingElementsName(): string {
		return TRACKING_ELEMENTS_NAMES_MAP.get(this.trackingElementsType)!;
	}
}
