import { Component, signal, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import {
	TrackingElementsTableComponent
} from '../../../shared/components/tracking-elements-table/tracking-elements-table.component';
import { EnergyLevel, TRACKING_ELEMENTS_NAMES_MAP, TrackingElementType } from '../../../shared/constants';
import {
	TrackingElementRowComponent
} from '../../../shared/components/tracking-elements-table/tracking-element-row/tracking-element-row.component';
import TrackingService from '../../services/tracking.service';

enum Tabs {
	None,
	Machinery,
	Staff
}

const tabsToTrackingElementsMap = new Map<Tabs, TrackingElementType>([
	[Tabs.Staff, TrackingElementType.Staff],
	[Tabs.Machinery, TrackingElementType.Machinery]
]);

@Component({
	selector: 'app-left-menu',
	standalone: true,
	imports: [
		NgClass,
		TrackingElementsTableComponent,
		TrackingElementRowComponent
	],
	templateUrl: './left-menu.component.html',
	styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {
	selectedTab = signal(Tabs.None);

	constructor(public trackingService: TrackingService) {
	}

	chooseTab(newTab: Tabs) {
		this.selectedTab.set(newTab);
		this.trackingService.trackingElements.forEach(el =>
			this.trackingService.setTrackingElementSelection(el, false)
		);
	}

	getTabName(tab: Tabs): string {
		return TRACKING_ELEMENTS_NAMES_MAP.get(
			tabsToTrackingElementsMap.get(tab)!
		)!
	}

	readonly Tabs = Tabs;
	protected readonly tabsToTrackingElementsMap = tabsToTrackingElementsMap;
}
