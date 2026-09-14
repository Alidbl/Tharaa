import type { Locale } from './entities';

/**
 * Photography is art-directed rather than decorative: one authentic
 * frame, read several ways. Each entry fixes the focal point and the
 * treatment for a particular moment in the narrative, so replacing the
 * library later is a change of `src` and nothing else.
 */
export type Frame = {
  src: string;
  /** CSS object-position for this crop of the frame. */
  focus: string;
  alt: Record<Locale, string>;
};

const SOURCE = '/images/thara-courtyard.png';

export const frames = {
  /** Wide: the courtyard as a whole — architecture, light, threshold. */
  courtyard: {
    src: SOURCE,
    focus: '44% 58%',
    alt: {
      en: 'A restored Emirati courtyard in the late afternoon, its arches opening onto a shaded majlis.',
      ar: 'فناء إماراتي مُرمّم في ضوء العصر، تنفتح أقواسه على مجلس ظليل.',
    },
  },
  /** Close: people in conversation — the human centre of the ecosystem. */
  majlis: {
    src: SOURCE,
    focus: '58% 68%',
    alt: {
      en: 'Business partners in conversation around a low table in an open majlis.',
      ar: 'شركاء أعمال في حوار حول طاولة منخفضة في مجلس مفتوح.',
    },
  },
  /** The arch: passage, continuity, one space leading to the next. */
  threshold: {
    src: SOURCE,
    focus: '54% 46%',
    alt: {
      en: 'An arched passage leading from one courtyard into the next.',
      ar: 'ممر مقوّس يقود من فناء إلى آخر.',
    },
  },
  /** Material: plaster, brick, timber and planting at close range. */
  material: {
    src: SOURCE,
    focus: '26% 56%',
    alt: {
      en: 'Lime plaster, coral brick and timber doors weathered by the Gulf climate.',
      ar: 'جصّ جيري وطوب مرجاني وأبواب خشبية شكّلها مناخ الخليج.',
    },
  },
  /** Ground: planting and low light along the courtyard edge. */
  ground: {
    src: SOURCE,
    focus: '30% 74%',
    alt: {
      en: 'Low planting along a courtyard edge in warm evening light.',
      ar: 'مساحات خضراء منخفضة على حافة الفناء في ضوء المساء الدافئ.',
    },
  },
} satisfies Record<string, Frame>;

export type FrameName = keyof typeof frames;
