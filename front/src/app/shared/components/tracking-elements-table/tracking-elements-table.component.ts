import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EnergyLevel, TRACKING_ELEMENTS_NAMES_MAP, TrackingElement, TrackingElementType } from '../../constants';
import TrackingService from '../../../core/services/tracking.service';
import { TrackingElementRowComponent } from './tracking-element-row/tracking-element-row.component';

@Component({
	selector: 'app-tracking-elements-table',
	standalone: true,
	imports: [
		TrackingElementRowComponent
	],
	templateUrl: './tracking-elements-table.component.html',
	styleUrl: './tracking-elements-table.component.scss'
})
export class TrackingElementsTableComponent {
	@Input() trackingElementsType: TrackingElementType = TrackingElementType.Staff;
	@Output() closeTab = new EventEmitter<void>();

	columnsHeadingsNames = [
		'Таб. №',
		this.trackingElementsType === TrackingElementType.Staff ? 'ФИО' : 'Наименование',
		'Выработка',
		'Сильнейший узел',
		'Временная метка'
	];

	constructor(public trackingElementsService: TrackingService) {
	}

	get trackingElementsName(): string {
		return TRACKING_ELEMENTS_NAMES_MAP.get(this.trackingElementsType)!;
	}

	get trackingElements(): TrackingElement[] {
		return this.trackingElementsService.trackingElements
			.filter(trackingElement => trackingElement.type === this.trackingElementsType)
	}

	get trackingElementsCount(): number {
		return this.trackingElements.length;
	}

	readonly EnergyLevel = EnergyLevel;

	toggleAllSelection(e: MouseEvent): void {
		const selectedAll = (e.currentTarget as HTMLInputElement).checked;

		this.trackingElements.forEach(trackingElement =>
			this.trackingElementsService.setTrackingElementSelection(trackingElement, selectedAll)
		);
	}

	areAllSelected(): boolean {
		return this.trackingElements.every(trackingElement => trackingElement.selected);
	}
}
