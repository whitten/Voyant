Ext.data.JsonP.corpuscreator({"guide":"<h1 id='corpuscreator-section-creating-a-corpus'>Creating a Corpus</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/corpuscreator-section-sources'>Sources</a></li>\n<li><a href='#!/guide/corpuscreator-section-options'>Options</a></li>\n<li><a href='#!/guide/corpuscreator-section-input-format'>Input Format</a></li>\n<li><a href='#!/guide/corpuscreator-section-xml'>XML</a></li>\n<li><a href='#!/guide/corpuscreator-section-tables'>Tables</a></li>\n<li><a href='#!/guide/corpuscreator-section-tokenization'>Tokenization</a></li>\n<li><a href='#!/guide/corpuscreator-section-access-management'>Access Management</a></li>\n<li><a href='#!/guide/corpuscreator-section-next-steps'>Next Steps</a></li>\n</ol>\n</div>\n\n<p>Voyant offers powerful functionality for creating your own corpus.</p>\n\n<h2 id='corpuscreator-section-sources'>Sources</h2>\n\n<p>The following sources are supported:</p>\n\n<ul>\n<li><strong>Text Box</strong>: you can type or paste text into the main text box in two different formats:\n\n<ul>\n<li>regular text as one document (plain text, HTML and XML are supported)</li>\n<li>a set of URLs, one per line</li>\n</ul>\n</li>\n<li><strong>Open</strong>: you can open an existing corpus that's already been created:\n\n<ul>\n<li><a href=\"../?corpus=austen\">Austen</a>: Project Gutenberg's collection of 8 novels from <a href=\"http://www.gutenberg.org/ebooks/author/68\">Jane Austen</a>: <em>Love And Freindship</em>, <em>Lady Susan</em>, <em>Sense and Sensibility</em>, <em>Pride and Prejudice</em>, <em>Mansfield Park</em>, <em>Emma</em>, <em>Northanger Abbey</em>, <em>Persuasion</em></li>\n<li><a href=\"../?corpus=shakespeare\">Shakespeare</a>: Project Gutenberg's collection of 37 plays from <a href=\"http://www.gutenberg.org/ebooks/author/65\">William Shakespeare</a></li>\n</ul>\n</li>\n<li><strong>Upload</strong>: you can upload one or more files from your computer\n\n<ul>\n<li>use Shift and Ctrl keys to select multiple files at once</li>\n<li>you can create a zip archive on your machine and upload it instead of selecting individual files</li>\n</ul>\n</li>\n</ul>\n\n\n<p>Unlike in the previous version of Voyant, you can now <a href=\"#!/guide/documents-section-modifying-a-corpus\">add, remove and reorder documents</a> after a corpus has been created.</p>\n\n<div style=\"max-width: 600px; margin-left: auto; margin-right: auto\"><p><img src=\"guides/corpuscreator/corpuscreator.png\" alt=\"Corpus Creator\" width=\"1747\" height=\"445\"></p></div>\n\n\n<h2 id='corpuscreator-section-options'>Options</h2>\n\n<p>Options should be specified before hitting the upload button or the reveal button.</p>\n\n<div style=\"max-width: 350px; margin-left: auto; margin-right: auto;\"><p><img src=\"guides/corpuscreator/options.png\" alt=\"Input Options\" width=\"871\" height=\"507\"></p></div>\n\n\n<h2 id='corpuscreator-section-input-format'>Input Format</h2>\n\n<p>Most document formats are fairly easy to detect automatically, Voyant does a decent job of extracting text from HTML, MS Word, MS Excel, ODT, Pages (Apple), PDF, plain text, RTF, XML, and others. You can also provide archives (.zip, .tar, .tgz, etc.) containing documents in those formats. If you want to specific a format (because auto-detect isn't working), you can select from the following:</p>\n\n<ul>\n<li><strong>Atom Syndication Format (<a href=\"https://en.wikipedia.org/wiki/Atom_(standard\">Atom</a>))</strong>: An XML-based format often used by news media, blogs, etc.</li>\n<li><strong>Dynamic Table of Contexts (DToC)</strong>: A specialized XML-based format used by the <a href=\"http://cwrc.ca/DToC_Documentation/\">Dynamic Table of Contexts project</a></li>\n<li><strong>Really Simple Syndication (<a href=\"https://en.wikipedia.org/wiki/RSS\">RSS</a>)</strong>: An XML-based format often used by news media, blogs, etc. Note that this is for RSS Version 2.0+, not RSS 1.0.</li>\n<li><strong>Text Encoding Initiative (<a href=\"http://www.tei-c.org/\">TEI</a>)</strong>: An XML-based format (essentially uses <code>//text</code> for content and <code>//teiHeader//title</code> and <code>//teiHeader//author</code> for metadata)</li>\n<li><strong>TEI Corpus</strong>: As above, except that produces multiple documents from <code>//TEI</code> tags</li>\n</ul>\n\n\n<h2 id='corpuscreator-section-xml'>XML</h2>\n\n<p>Voyant provides powerful functionality for creating a corpus from XML documents, in particular by using <a href=\"https://en.m.wikipedia.org/wiki/XPath\">XPath</a> expressions to define documents, content, and metadata like title and author.</p>\n\n<ul>\n<li><strong>Content</strong>: This allows you to use only a portion of a document as the body content (much like the body tag of an HTML document). Multiple nodes matching this XPath expression will be combined.</li>\n<li><strong>Title</strong>: This extracts the text only (no tags) from any matching nodes to be used as title metadata.</li>\n<li><strong>Author</strong>: This extracts the text only (no tags) from any matching nodes to be used as author metadata.</li>\n<li><strong>Documents</strong>: This allows you to extract multiple documents from an XML document (such as posts in an RSS feed, though usually selecting the RSS <em>Input Format</em> will do that automatically). When this is used in combination with the options below, the other XPath expressions will be relative to each sub-document (not to the original document root node).</li>\n<li><strong>Group by</strong>: When used in conjunction with a <em>Documents</em> option, this allows you to group multiple documents together that share the same XPath value. For instance, if you there are multiple &lt;speech&gt; documents, you can group all of the documents together based on the value of the speaker (so there would be one document per speaker with all of the speeches grouped together). This option is ignored if <em>Documents</em> isn't specified.</li>\n</ul>\n\n\n<p>Both <em>Title</em> and <em>Author</em> XPath expressions can result in multiple values per document (some Voyant tools treat these separately and some combine them, depending on context). You of course have more control as needed:</p>\n\n<ul>\n<li><strong><code>//title</code></strong>: keep the text from every <code>title</code> tag as distinct values</li>\n<li><strong><code>(//title)[1]</code></strong>: keep only the text from the first <code>title</code> tag</li>\n<li><strong><code>//title|//h1</code></strong> keep the text from every <code>title</code> and <code>h1</code> tag as distinct values</li>\n<li><strong><code>//div[@type='chapter']/head</code></strong> keep the text from every <code>head</code> tag that's a child of a <code>div</code> tag whose type attribute is equal to <code>chapter</code></li>\n<li><strong><code>string-join(//author, '; ')</code></strong> combine all the text content from <code>author</code> tags into one value separated by <code>;</code></li>\n</ul>\n\n\n<p>This isn't the place to <a href=\"http://www.w3schools.com/xsl/xpath_syntax.asp\">learn XPath syntax</a>, but it's worth mentioning a few things about <a href=\"http://www.w3schools.com/xml/xml_namespaces.asp\">namespaces</a>. In most cases, you should be able to specify an XPath without any namespaces because Voyant will use the same default namespace as the document. You <em>can</em> use namespaces if you need to select elements in a given namespace. You can also create an XPath expression that only considers the local name of the element instead of the qualified name.</p>\n\n<ul>\n<li><strong><code>//creator</code></strong>: select the <code>creator</code> element using the default namespace</li>\n<li><strong><code>//dc:creator</code></strong>: select the <code>creator</code> element only when it is in the <code>dc</code> namespace</li>\n<li><strong><code>//*[local-name()='creator']</code></strong>: select any tag whose local name is <code>creator</code> regardless of namespace</li>\n</ul>\n\n\n<h2 id='corpuscreator-section-tables'>Tables</h2>\n\n<p>Voyant allows you to work flexibly with tabular data such as spreadsheets. At the moment the options described here only work with MS Excel files (.xsl or .xslx). Voyant can currently extract text from other tabular file formats such as OpenOffice, Pages, and comma-separated values (CSV), but in that case each file is considered as a separate document. The options below allow you to extract multiple documents from a single MS Excel file (or from several files).</p>\n\n<p>The options for tables are a bit complex, but there are a lot of possibilities when working with tabular data, so it's worth it, right?</p>\n\n<p>The first option is for defining how Voyant should extract text from the table (file). There are three choices:</p>\n\n<p><b>1: <em>from entire table</em></b>: each table/file is considered one document, this is the default behaviour; only the <em>No Headers Row</em> option below is considered</p>\n\n<p><b>2: <em>from cells in each row</em></b>: this option assumes that each row has one or more documents, either the entire row or specific cells</p>\n\n<div style=\"max-width: 476px; margin-left: auto; margin-right: auto;\"><p><img src=\"guides/corpuscreator/fromcellsineachrow.png\" alt=\"From Cells in Each Row\" width=\"953\" height=\"266\"></p></div>\n\n\n<p><b>3: <em>from entire columns</em></b>: this option assumes that documents should be extracted from one or more columns</p>\n\n<div style=\"max-width: 371px; margin-left: auto; margin-right: auto;\"><p><img src=\"guides/corpuscreator/fromentirecolumns.png\" alt=\"From Entire Columns\" width=\"743\" height=\"253\"></p></div>\n\n\n<p>Whether you use <em>from cells in each row</em> or <em>from entire columns</em> you can also choose one or more columns for content. Columns are specified by number (even when there's a header row), and the left-most column is column 1. Content from multiple columns can be combined using the plus sign and columns can be specified separately by using commas. Here are some examples:</p>\n\n<ul>\n<li>1: use column one</li>\n<li>1,2: use columns one and two separately</li>\n<li>1+2,3 combine columns one and two and use column three separately</li>\n</ul>\n\n\n<p>When no <em>Content</em> value is specified the behaviour depends on the <em>Documents</em> option:</p>\n\n<ol>\n<li><em>from cells in each row</em>: each row is treated as a separate document (cells in a row are combined)</li>\n<li><em>from entire columns</em>: each column is treated as a separate document</li>\n</ol>\n\n\n<h4 id='corpuscreator-section-title-and-author-metadata'>Title and Author Metadata</h4>\n\n<p>The syntax is the same for the <em>Title</em> and <em>Author</em> options: column numbers separated by commas and/or combined with a plus sign (starting with the left-most column 1). These metadata options are only used when documents are extracted <em>from cells in each row</em> and when there's only one document per row (no <em>Content</em> value or no commas in the value of the <em>Content</em> option). When there's more than one document per row, a title label is automatically generated (no authors are defined).</p>\n\n<p>When documents are extracted <em>from entire columns</em>, the title metadata is extracted from the first row if there's a header row, otherwise a label is automatically generated (no authors are defined).</p>\n\n<h2 id='corpuscreator-section-tokenization'>Tokenization</h2>\n\n<p>Tokenization (in this context) is the process of identifying words, or sequences of Unicode letter characters that should be considered as a unit. In most cases Voyant will do a decent job of tokenization, even with some languages where there's not always an indication of word boundaries (like Chinese). There are two choices:</p>\n\n<ul>\n<li><strong>Automatic (highly recommended)</strong>: this works adequately for most languages</li>\n<li><strong>Simple Word Boundaries</strong>: use this if you have segmented the text yourself (by adding spaces between words)</li>\n</ul>\n\n\n<h2 id='corpuscreator-section-access-management'>Access Management</h2>\n\n<div style=\"max-width: 400px; float: right; padding: 1em;\"><p><img src=\"guides/corpuscreator/access-management.png\" alt=\"Access Management\" width=\"894\" height=\"511\"></p></div>\n\n\n<p>Voyant provides some basic access management functions that are intended to help control who can access a given corpus. It's worth mentioning that each corpus is given a unique 32-character code when it's created, which amounts to 2<sup>128</sup> or 340,282,366,920,938,463,463,374,607,431,768,211,456 possibilities. In other words, it's extremely unlikely that anyone would stumble upon your corpus by accident or by luck. That doesn't mean that your corpus is entirely safe from prying eyes, it's possible for a URL or for parameters to be detected during usual web communication, for instance.</p>\n\n<p>The access codes that can be specified in Voyant are an additional level of protection. These shouldn't be considered as passwords, not least because Voyant is not normally hosted on a secure server (with https traffic), so any access codes are transmitted in the clear. Still, under normal circumstances, the access codes can help further restrict access, if needed.</p>\n\n<p>If privacy and security are significant concerns for whatever reason (confidentiality of data, copyright, etc.), it's <em>strongly</em> recommended that you use a local, <a href=\"https://github.com/sgsinclair/VoyantServer#voyant-server\">standalone version of Voyant</a> – it can even be used while offline (while not connected to the internet).</p>\n\n<p>Access management must be specified during corpus creation, it can't be specified once a corpus is already created (that's because it would be much more difficult to determine who created the corpus and therefore who can manage it).</p>\n\n<h3 id='corpuscreator-section-admin-codes'>Admin Codes</h3>\n\n<p>The first option allows you to specify one or more admin(istration) codes. Admin codes give you access to the corpus as well as to the access management options (if ever you want to later modify any of the access management options). If you don't specify admin codes, the access codes (if provided) will still be in effect, but you won't be able to change them. You can specify one or more different admin codes separated by commas (any one of the codes will work).</p>\n\n<h3 id='corpuscreator-section-access-codes'>Access Codes</h3>\n\n<p>The second option allows you to specify one or more full access codes (without a valid code, access is either restricted or completely blocked – see the next option for more details). You can specify multiple codes separated by commas, which allows you to  assign and modify access independently for multiple groups and users. If no access codes are provided, access will be limited either to admin codes (if any are provided) or the corpus will be open.</p>\n\n<h3 id='corpuscreator-section-other-access'>Other Access</h3>\n\n<p>This option determines what happens when an admin or access code is required but no valid code is provided by the user:</p>\n\n<ul>\n<li><strong>limited (non-consumptive)</strong>: users can access analytic tools and views of the corpus but not any tool that allows text to be read or reconstituted</li>\n<li><strong>none</strong>: no access is provided to this corpus</li>\n</ul>\n\n\n<p>Although it might be tempting to select \"none\" for simplicity or by force of habit, the non-consumptive option is more nuanced solution and recognizes that much analytic work can be done with derivative data while protecting principles of copyright (since the text in its original form can't be recovered with non-consumptive access). These issues have been explored by <a href=\"http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2102542\">digital humanities scholars</a>, as well as by the courts in cases like <a href=\"https://en.wikipedia.org/wiki/Authors_Guild,_Inc._v._HathiTrust\">Authors Guild v. HathiTrust</a>.</p>\n\n<p>We believe that the non-consumptive option is on firm ethical and legal footing, even for copyright text, but responsibilty lies with the creator of the corpus. It's also worth reiterating that any access management provided by Voyant is only one line of defense, so unintended access may occur and the hosted version should not be used when confidentiality is important.</p>\n\n<h2 id='corpuscreator-section-next-steps'>Next Steps</h2>\n\n<ul>\n<li><a href=\"#!/guide/modifyingcorpus\">modifying a corpus</a></li>\n<li><a href=\"#!/guide/tools\">explore the tools</a></li>\n<li>read <a href=\"#!/guide/about\">about Voyant Tools</a></li>\n</ul>\n\n","title":"Creating a Corpus"});