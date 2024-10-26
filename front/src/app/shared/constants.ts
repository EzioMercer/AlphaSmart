export enum EnergyLevel {
	Full,
	Medium
}

export type TrackingElement = {
	type: TrackingElementType,
	energyLevel: EnergyLevel,
	id: string,
	name: string,
	workPlace: string,
	strongestNode: string,
	timestamp: string,
	selected: boolean
}

export enum TrackingElementType {
	Staff,
	Machinery
}

export const TRACKING_ELEMENTS_NAMES_MAP = new Map<TrackingElementType, string>([
	[TrackingElementType.Machinery, 'Техника'],
	[TrackingElementType.Staff, 'Персонал']
]);
