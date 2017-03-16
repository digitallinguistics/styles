/* eslint-env browser */

const examples = {

  abbr:                   'Default styling for <code>&lt;abbr&gt;</code> tags, which should be used on the first mention of an abbreviation. It is often accompanied by a <code>&lt;dfn&gt;</code> tag in the same paragraph.',

  bulleted:               'In DLx projects, lists are often used semantically rather than stylistically, e.g. a phrase includes a list of words. As such, lists have no styling by default, and list styling needs to be explicitly set with the <code>.bulleted</code> or <code>.numbered</code> styles.',

  button:                 'A basic button. This is applied automatically to buttons, but may also be applied using the .button class to any element.',

  cite:                   'The <code>&lt;cite&gt;</code> element is used for titles of publications, etc.',

  code:                   'The <code>&lt;code&gt;</code> element is used for both inline and standalone code blocks.',

  dfn:                    'A <code>&lt;dfn&gt;</code> tag is used the first time an element is defined. The definition of the term should be given in the surrounding text.',

  em:                     'Used for standard emphasis within text.',

  field:                  'Styles an element as a form field. This style is automatically applied to various form elements, such as the <code>&lt;input type=text&gt;</code> element.',

  fieldset:               'Used for grouping inputs together under a heading (<code>&lt;legend&gt;</code>)',

  hanging:                'For blocks of text with a hanging indent.',

  input:                  'Default styles are added for each of the various input types.',

  label:                  'Label elements. If the text inside the element is wrapped in a <code>&lt;span&gt;</code> element, that text will be styled as well.',

  link:                   'The <code>.link</code> class is not automatically applied to anchor elements (<code>&lt;a&gt;</code>). It is, however, automatically applied to any anchor element that sits inside another inline element, such as <code>&lt;abbr&gt;</code> or <code>&lt;strong&gt;</code>, and to any element that sits inside an element whose content is usually inline, such as <code>&lt;p&gt;</code> or <code>&lt;h1&gt;</code>.',

  'minor-header':         'For minor headers (level below sub-subsection)',

  numbered:               'For numbered lists. Because DLx often uses ordered lists where list styling is not wanted, the <code>.numbered</code> class is not automatically applied to <code>&lt;ol&gt;</code> elements, and must be applied manually.',

  'page-title':           'For page titles',

  'reference-list':       'Styling for a bibliographic reference list. Note that each reference should be wrapped in a <code>&lt;p&gt;</code> tag inside of a <code>&lt;li&gt;</code> tag.',

  'section-header':       'Section headers',

  select:                 'Default styling for <code>&lt;select&gt;</code> elements.',

  strong:                 `Used to draw the reader's attention to a term or concept.`,

  'subsection-header':    'Subsection headers',

  'subsubsection-header': 'Sub-subsection headers',

  textarea:               'Uses the <code>&lt;.field&gt;</code> style',

  tooltip:                'Adding the <code>.tooltip</code> class to any element will make a tooltip display on hover or when the element is focused. The content of the tooltip is contained in the <code>title</code> attribute for that element. Note that tooltips do not work on <code>&lt;input&gt;</code> elements - place the <code>.tooltip</code> class on the <code>&lt;label&gt;</code> instead.',

  'white-link':           'A white link rather than the standard blue. Used for dark backgrounds.',

};

window.examples = examples;
