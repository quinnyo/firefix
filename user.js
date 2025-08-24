
// 2024-07-13
// :basic:UI:accessibility:
// Disable trackpad(?) gesture history navigation.
user_pref("widget.disable-swipe-tracker", true);

// 2024-07-26
// :UI:tweaks:
// Restore the 'compact' toolbar density option.
user_pref("browser.compactmode.show", true);

// 2024-08-14
// Allow navigating to manually typed URLs with Enter.
user_pref("browser.urlbar.autoFill", false);

// 2024-10-03
// :jumpscare:UI:tooltips:
// Disable tab preview and giant tooltips when cursor is hovered over tab.
user_pref("browser.tabs.hoverPreview.enabled", false);

// 2025-02-05
// :UI:pdfjs:sanity:
// Prevent changing zoom setting to the worst zoom setting every time you dare use the ToC.
// This behaviour is explicitly (and intentionally) requested by the document and therefore this behaviour is objectively correct. ref. github/mozilla/pdfjs#11970
user_pref("pdfjs.ignoreDestinationZoom", true);

// 2025-02-05
// :UI:pdfjs:
// Do you remember PDF-hand? I remember PDF-hand.
user_pref("pdfjs.cursorToolOnLoad", 1);

// 2025-08-24
// :nonsense:tabs:tab-groups:
// I assume this controls the feature I was threatened with in the latest update's "What now!?" thing.
// I don't need help deciding how to organise my tabs, thanks.
user_pref("browser.tabs.groups.smart.searchTopicEnabled", false);

// 2025-08-24
// :nonsense:search:
// This controls the *actual* "search suggestions", where it suggests what to search for,
// because you probably don't even know what to search for.
user_pref("browser.urlbar.suggest.searches", false);
// This one seems to be the GUI setting for 'show search suggestions'. I don't really know
// what this one does in addition to above, but it's included because disabling *both*
// 'suggesting searches', and 'search suggesting' was too compelling.
// That, and it can't really make things any worse.
user_pref("browser.search.suggest.enabled", false);

