import { Rule } from '@unocss/core';
import { extractorSvelte } from '@unocss/core';

import pollenObj from './src/styles/pollen.json';

const globalKeywords = ['inherit', 'initial', 'revert', 'revert-layer', 'unset'];

function makeGlobalStaticRules(prefix: string, property?: string) {
	return globalKeywords.map(
		(keyword) => [`${prefix}-${keyword}`, { [property ?? prefix]: keyword }] as Rule,
	);
}

// Rules
const display = [
	['block', { display: 'block' }],
	['inline', { display: 'inline' }],
	['inline-block', { display: 'inline-block' }],
	['none', { display: 'none' }],
];

const typography = [
	// Font Size
	...Object.keys(pollenObj.scale).map((key) => {
		return [`fs-${key}`, { 'font-size': `var(--scale-${key})` }];
	}),
	...Object.keys(pollenObj.scaleFluid).map((key) => {
		return [`fs-fluid-${key}`, { 'font-size': `var(--scale-fluid-${key})` }];
	}),
	// Font Family
	...Object.keys(pollenObj.font).map((key) => {
		return [`font-${key}`, { 'font-family': `var(--font-${key})` }];
	}),
	// Font Weight
	...Object.keys(pollenObj.weight).map((key) => {
		return [`weight-${key}`, { 'font-weight': `var(--weight-${key})` }];
	}),
	// Line Height
	...Object.keys(pollenObj.line).map((key) => {
		return [`line-${key}`, { 'line-height': `var(--line-${key})` }];
	}),
	// Letter Spacing
	...Object.keys(pollenObj.letter).map((key) => {
		return [`letter-${key}`, { 'letter-spacing': `var(--letter-${key})` }];
	}),
	// Prose Width
	...Object.keys(pollenObj.prose).map((key) => {
		return [`prose-${key}`, { 'max-width': `var(--prose-${key})` }];
	}),
];

const layout = [
	// Size
	...Object.keys(pollenObj.size).reduce<Rule[]>((acc, key) => {
		return [
			...acc,
			[`w-${key}`, { width: `var(--size-${key})` }],
			[`h-${key}`, { height: `var(--size-${key})` }],
			[`m-${key}`, { margin: `var(--size-${key})` }],
			[`mr-${key}`, { 'margin-right': `var(--size-${key})` }],
			[`ml-${key}`, { 'margin-left': `var(--size-${key})` }],
			[`mt-${key}`, { 'margin-top': `var(--size-${key})` }],
			[`mb-${key}`, { 'margin-bottom': `var(--size-${key})` }],
			[`mx-${key}`, { 'margin-left': `var(--size-${key})`, 'margin-right': `var(--size-${key})` }],
			[`my-${key}`, { 'margin-top': `var(--size-${key})`, 'margin-bottom': `var(--size-${key})` }],
			[`p-${key}`, { padding: `var(--size-${key})` }],
			[`pr-${key}`, { 'padding-right': `var(--size-${key})` }],
			[`pl-${key}`, { 'padding-left': `var(--size-${key})` }],
			[`pt-${key}`, { 'padding-top': `var(--size-${key})` }],
			[`pb-${key}`, { 'padding-bottom': `var(--size-${key})` }],
			[
				`px-${key}`,
				{ 'padding-left': `var(--size-${key})`, 'padding-right': `var(--size-${key})` },
			],
			[
				`py-${key}`,
				{ 'padding-top': `var(--size-${key})`, 'padding-bottom': `var(--size-${key})` },
			],
			[`gap-${key}`, { gap: `var(--size-${key})` }],
		];
	}, []),
	// Container Widths
	...Object.keys(pollenObj.width).map((key) => {
		return [`contained-${key}`, { 'max-width': `var(--width-${key})` }];
	}),
	// Aspect Ratio
	...Object.keys(pollenObj.ratio).map((key) => {
		return [`ratio-${key}`, { 'aspect-ratio': `var(--ratio-${key})` }];
	}),
];

const ui = [
	// Border Radius
	...Object.keys(pollenObj.radius).map((key) => {
		return [`radius-${key}`, { 'border-radius': `var(--radius-${key})` }];
	}),
	// Shadow
	...Object.keys(pollenObj.shadow).map((key) => {
		return [`shadow-${key}`, { 'box-shadow': `var(--shadow-${key})` }];
	}),
	// Blur
	...Object.keys(pollenObj.blur).map((key) => {
		return [`blur-${key}`, { 'backdrop-filter': `blur(var(--blur-${key}))` }];
	}),
	// Easing
	...Object.keys(pollenObj.ease).map((key) => {
		return [`ease-${key}`, { 'transition-timing-function': `var(--ease-${key})` }];
	}),
	// Layers
	...Object.keys(pollenObj.layer).map((key) => {
		return [`layer-${key}`, { 'z-index': `var(--layer-${key})` }];
	}),
];

const grid = [
	// displays
	['grid', { display: 'grid' }],
	['inline-grid', { display: 'inline-grid' }],
	// Grid Template
	...Object.keys(pollenObj.grid).reduce<Rule[]>((acc, key) => {
		if (Number.isNaN(Number(key))) return acc;
		return [
			...acc,
			[`grid-cols-${key}`, { 'grid-template-columns': `repeat(${key}, minmax(0, 1fr))` }],
			[`grid-rows-${key}`, { 'grid-template-rows': `repeat(${key}, minmax(0, 1fr))` }],
		];
	}, []),
	// Grid Page
	['grid-page', { 'grid-template-columns': 'var(--grid-page)' }],
	['grid-page-main', { 'grid-column': 'var(--grid-page-main)' }],
];

const colors = [
	...Object.keys(pollenObj.color).reduce<Rule[]>((acc, key) => {
		return [
			...acc,
			[`bg-${key}`, { 'background-color': `var(--color-${key})` }],
			[`color-${key}`, { color: `var(--color-${key})` }],
		];
	}, []),
];

const flex = [
	// display
	['flex', { display: 'flex' }],
	['inline-flex', { display: 'inline-flex' }],
	['flex-inline', { display: 'inline-flex' }],

	// flex
	[/^flex-(.+)$/, ([, d]) => ({ flex: d })],
	['flex-1', { flex: '1 1 0%' }],
	['flex-auto', { flex: '1 1 auto' }],
	['flex-initial', { flex: '0 1 auto' }],
	['flex-none', { flex: 'none' }],

	// shrink/grow/basis
	[/^(?:flex-)?shrink(?:-(.*))?$/, ([, d = '']) => ({ 'flex-shrink': d })],
	[/^(?:flex-)?grow(?:-(.*))?$/, ([, d = '']) => ({ 'flex-grow': d })],
	[/^(?:flex-)?basis-(.+)$/, ([, d]) => ({ 'flex-basis': d })],

	// directions
	['flex-row', { 'flex-direction': 'row' }],
	['flex-row-reverse', { 'flex-direction': 'row-reverse' }],
	['flex-col', { 'flex-direction': 'column' }],
	['flex-col-reverse', { 'flex-direction': 'column-reverse' }],

	// wraps
	['flex-wrap', { 'flex-wrap': 'wrap' }],
	['flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }],
	['flex-nowrap', { 'flex-wrap': 'nowrap' }],
];

const textAligns = ['center', 'left', 'right', 'justify', 'start', 'end', ...globalKeywords].map(
	(v) => [`text-${v}`, { 'text-align': v }],
);

const positions = [
	[/^(?:position-|pos-)?(relative|absolute|fixed|sticky)$/, ([, v]) => ({ position: v })],
	[
		/^(?:position-|pos-)([-\w]+)$/,
		([, v]) => (globalKeywords.includes(v) ? { position: v } : undefined),
	],
	[/^(?:position-|pos-)?(static)$/, ([, v]) => ({ position: v })],
];

const justifies = [
	// contents
	['justify-start', { 'justify-content': 'flex-start' }],
	['justify-end', { 'justify-content': 'flex-end' }],
	['justify-center', { 'justify-content': 'center' }],
	['justify-between', { 'justify-content': 'space-between' }],
	['justify-around', { 'justify-content': 'space-around' }],
	['justify-evenly', { 'justify-content': 'space-evenly' }],
	...makeGlobalStaticRules('justify', 'justify-content'),

	// items
	['justify-items-start', { 'justify-items': 'start' }],
	['justify-items-end', { 'justify-items': 'end' }],
	['justify-items-center', { 'justify-items': 'center' }],
	['justify-items-stretch', { 'justify-items': 'stretch' }],
	...makeGlobalStaticRules('justify-items'),

	// selfs
	['justify-self-auto', { 'justify-self': 'auto' }],
	['justify-self-start', { 'justify-self': 'start' }],
	['justify-self-end', { 'justify-self': 'end' }],
	['justify-self-center', { 'justify-self': 'center' }],
	['justify-self-stretch', { 'justify-self': 'stretch' }],
	...makeGlobalStaticRules('justify-self'),
];

const alignments = [
	// contents
	['content-center', { 'align-content': 'center' }],
	['content-start', { 'align-content': 'flex-start' }],
	['content-end', { 'align-content': 'flex-end' }],
	['content-between', { 'align-content': 'space-between' }],
	['content-around', { 'align-content': 'space-around' }],
	['content-evenly', { 'align-content': 'space-evenly' }],
	...makeGlobalStaticRules('content', 'align-content'),

	// items
	['items-start', { 'align-items': 'flex-start' }],
	['items-end', { 'align-items': 'flex-end' }],
	['items-center', { 'align-items': 'center' }],
	['items-baseline', { 'align-items': 'baseline' }],
	['items-stretch', { 'align-items': 'stretch' }],
	...makeGlobalStaticRules('items', 'align-items'),

	// selfs
	['self-auto', { 'align-self': 'auto' }],
	['self-start', { 'align-self': 'flex-start' }],
	['self-end', { 'align-self': 'flex-end' }],
	['self-center', { 'align-self': 'center' }],
	['self-stretch', { 'align-self': 'stretch' }],
	['self-baseline', { 'align-self': 'baseline' }],
	...makeGlobalStaticRules('self', 'align-self'),
];

const placements: Rule[] = [
	// contents
	['place-content-center', { 'place-content': 'center' }],
	['place-content-start', { 'place-content': 'start' }],
	['place-content-end', { 'place-content': 'end' }],
	['place-content-between', { 'place-content': 'space-between' }],
	['place-content-around', { 'place-content': 'space-around' }],
	['place-content-evenly', { 'place-content': 'space-evenly' }],
	['place-content-stretch', { 'place-content': 'stretch' }],
	...makeGlobalStaticRules('place-content'),

	// items
	['place-items-start', { 'place-items': 'start' }],
	['place-items-end', { 'place-items': 'end' }],
	['place-items-center', { 'place-items': 'center' }],
	['place-items-stretch', { 'place-items': 'stretch' }],
	...makeGlobalStaticRules('place-items'),

	// selfs
	['place-self-auto', { 'place-self': 'auto' }],
	['place-self-start', { 'place-self': 'start' }],
	['place-self-end', { 'place-self': 'end' }],
	['place-self-center', { 'place-self': 'center' }],
	['place-self-stretch', { 'place-self': 'stretch' }],
	...makeGlobalStaticRules('place-self'),
];

/** @type {import('@unocss/vite').VitePluginConfig} */
export default {
	extractors: [extractorSvelte],
	presets: [],
	rules: [
		...display,
		...typography,
		...layout,
		...ui,
		...grid,
		...colors,
		...flex,
		...textAligns,
		...positions,
		...justifies,
		...alignments,
		...placements,
	],
};
