import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

// Undantag där mappnamnet behöver specialrubrik (t.ex. å, ä, ö eller extra ord)
const specialNamn: Record<string, string> = {
	'storheter-enheter': 'Storheter och enheter',
	// Lägg bara till fler här vid behov, t.ex:
	// 'flode-och-energi': 'Flöde och energi',
};

function formateraMappNamn(namn: string): string {
	// Kolla först om mappen finns i undantagslistan
	if (specialNamn[namn]) {
		return specialNamn[namn];
	}
	// Annars: byt bindestreck mot mellanslag och gör första bokstaven stor
	const medMellanslag = namn.replace(/-/g, ' ');
	return medMellanslag.charAt(0).toUpperCase() + medMellanslag.slice(1);
}

function uppdateraMeny(items: any[]) {
	for (const item of items) {
		if (item.type === 'group') {
			item.label = formateraMappNamn(item.label);
			uppdateraMeny(item.entries);
		}
	}
}

export const onRequest = defineRouteMiddleware((context) => {
	uppdateraMeny(context.locals.starlightRoute.sidebar);
});
