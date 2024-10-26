import { Injectable } from '@angular/core';
import { EnergyLevel, TrackingElement, TrackingElementType } from '../../shared/constants';

@Injectable({
	providedIn: 'root'
})
class TrackingService {
	trackingElements: TrackingElement[] = [
		{
			type: TrackingElementType.Staff,
			energyLevel: EnergyLevel.Full,
			id: '92051',
			name: 'Новиков М. К.',
			workPlace: 'Сбойка-1',
			strongestNode: 'А1-23415',
			timestamp: '20.12.2020 10:45:00',
			selected: false
		},
		{
			type: TrackingElementType.Staff,
			energyLevel: EnergyLevel.Medium,
			id: '9384',
			name: 'Васильев Г. Д.',
			workPlace: 'Вентиляционный штрек',
			strongestNode: 'А1-23416',
			timestamp: '20.12.2020 10:46:30',
			selected: false
		},
		{
			type: TrackingElementType.Machinery,
			energyLevel: EnergyLevel.Full,
			id: '001823',
			name: 'DZ-1800',
			workPlace: 'Сбойка-1',
			strongestNode: 'А1-23415',
			timestamp: '20.12.2020 10:45:00',
			selected: false
		},
		{
			type: TrackingElementType.Machinery,
			energyLevel: EnergyLevel.Full,
			id: '002415',
			name: '2АМ8Д',
			workPlace: 'Вентиляционный штрек',
			strongestNode: 'А1-23416',
			timestamp: '20.12.2020 10:46:30',
			selected: false
		}
	];

	toggleTrackingElementSelection(trackingElement: TrackingElement) {
		trackingElement.selected = !trackingElement.selected;
	}

	setTrackingElementSelection(trackingElement: TrackingElement, selected: boolean) {
		trackingElement.selected = selected;
	}
}

export default TrackingService;
