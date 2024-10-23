import { Component, signal, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import {
	TrackingElementsTableComponent
} from '../../../shared/components/tracking-elements-table/tracking-elements-table.component';
import { TRACKING_ELEMENTS_NAMES_MAP, TrackingElementType } from '../../../shared/constants';

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
		TrackingElementsTableComponent
	],
	templateUrl: './left-menu.component.html',
	styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {
	selectedTab = signal(Tabs.None);

	chooseTab(newTab: Tabs) {
		this.selectedTab.set(newTab);
	}

	getTabName(tab: Tabs): string {
		return TRACKING_ELEMENTS_NAMES_MAP.get(
			tabsToTrackingElementsMap.get(tab)!
		)!
	}

	readonly Tabs = Tabs;
	protected readonly tabsToTrackingElementsMap = tabsToTrackingElementsMap;
}
