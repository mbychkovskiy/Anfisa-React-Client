export const en = {
  general: {
    exportReport: 'Export report',
    tags: 'Tag(s)',
    excel: 'Excel',
    csv: 'Csv',
    noResultsFound: 'No results found',
    noResultsFoundByFilters:
      'There are no results. Try to reset filters and try again',
    resetFilters: 'Reset filters',
    selectAll: 'Select All',
    clearAll: 'Clear All',
    cancel: 'Cancel',
    apply: 'Apply',
    clear: 'Clear',
    replace: 'Replace',
    add: '+ Add',
    filter: '+ Filter',
    presetCreated: 'Preset has been created',
    showLess: 'Show less',
    delete: 'Delete',
    total: 'Total',
    closeWindow: 'Close window',
    creaitionIsInProcess: 'Dataset creation has not been finished yet',
    selectPreset: 'Select Preset',
  },
  header: {
    version: {
      frontend: 'Frontend: Anfisa {version}',
      backend: 'Backend: {version}',
    },
    presetAction: {
      success: {
        create: 'Preset "{presetName}" has been created',
        modify: 'Preset "{presetName}" has been modified',
        join: 'Preset "{presetName}" has been joined',
        delete: 'Preset "{presetName}" has been deleted',
      },
      error: {
        create: 'Error when creating the "{presetName}" preset',
        modify: 'Error when modifying the "{presetName}" preset',
        join: 'Error when joining the "{presetName}" preset',
        delete: 'Error when deleting the "{presetName}" preset',
      },
    },
    selectSecondaryPlaceholder: 'Select secondary...',
  },
  home: {
    title: 'Home',
    datasets: 'Datasets',
    searchForADataset: 'Search for dataset',
    name: 'Name',
    createdAt: 'Created at',
    openInViewer: 'Open in viewer',
    info: 'Info',
    general: 'General',
    base: 'Derived from {name}',
    pickDataset: 'Select dataset',
    table: 'Main Table',
    dtree: 'Decision Tree Panel',
    refiner: 'Filter Refiner',
  },
  ds: {
    preset: 'Preset',
    filters: 'Filters',
    results: 'Results',
    totalVariants: 'Total variants: ',
    resultsFound: '{0} results found',
    tableVisualization: 'Table Visualization',
    grid: 'Grid',
    rows: 'Rows',
    searchColumns: 'Search',
    columns: 'Columns',
    customizeTable: 'Customize Table',
    copied: 'Copied successfully',
    editFilters: 'Edit Filters',
    gene: 'Gene',
    searchFilter: 'Search',
    searchTag: 'Search',
    searchColumn: 'Search',
    Compact: 'Compact View',
    Cozy: 'Cozy View',
    samples: 'Samples',
    geneList: 'Gene List',
    sample: 'Sample',
    tags: 'Tag',
    edit: 'Edit',
    notMode: 'NOT Mode',
    variantsWithNotesOnly: 'Variants with notes only',
    tooMuchVariants:
      'There are too many variants to export. The number of variants should be less than 300',
  },
  dsCreation: {
    createDeriveDS: 'Create Derive DS',
    datasetCreation: 'Dataset Creation',
    addDatasetTitle: 'Add new dataset',
    label: 'Dataset Name:',
    attention:
      'Attention: Zone filters (Gene, Gene List, Sample, Tags) do not participate in dataset creation',
    addDataset: 'Add dataset',
  },
  variant: {
    genes: 'Gene(s)',
    worstAnnotation: 'Worst Annotation',
    hg19: 'hg19',
    generalInfo: 'General info',
    canonicalAnnotations: 'Canonical Annotations',
    transcript: 'Transcript',
    refSeqCanonical: 'RefSeq  (Canonical)',
    refSeqWorst: 'RefSeq  (Worst)',
    ensemblCanonical: 'Ensembl  (Canonical)',
    ensemblWorst: 'Ensembl (Worst)',
    genotype: 'Genotype',
    proband: 'Proband',
    maternal: 'Maternal',
    paternal: 'Paternal',
    geneAnnotation: 'Gene annotation',
    tags: 'Tags',
    tagsFor: 'Tags for',
    notes: 'Notes',
    notesFor: 'Notes for',
    tagExists: 'That tag already exists',
    showSelectionOnly: 'Show selection only',
    saveNote: 'Save note',
    noDataToShow: 'No data to show',
  },
  numericCondition: {
    limitedRange: 'Limited range',
    upperBoundError: 'Upper bound is incorrect',
    lowerBoundError: 'Lower bound is incorrect',
    conditionError: 'Condition is incorrect',
    includeZero: 'Include 0 ({ count } variants)',
    center: 'Center',
    distance: 'Distance',
  },
  filter: {
    method: 'Filtering method',
    results: 'Results',
    selectedVariants: 'Selected variants',
    show: 'Show {amount} variants',
    variants: 'Variants: {all}',
    transcripts: 'Transcripts: {all}',
    transcribedVariants: 'Transcribed variants: {all}',
    query: 'Query',
    presetName: 'Preset name',
    presets: 'Presets',
    createPreset: '+ Create New',
    actions: 'Actions',
    searchForAField: 'Search',
    decisionTrees: 'Decision Trees',
    tooMuchVariants: 'The number of variants is more than 2600!',
    prohibitToOpen: 'You cannot open XL-dataset on Filter Refiner',
    chooseProblemGroup: 'Choose any problem group first',
    notValidName: 'Preset name is not valid',
    conditionsAdded: '{count} added',
    chart: {
      seeAll: 'See all',
      hide: 'Hide',
      total: 'Total',
      variants: '{value} variants',
    },
    delete: 'Delete',
    copy: 'Copy',
    errors: {
      loadPreset: 'Failed to load preset "{presetName}"',
      joinPreset: 'Failed to join preset "{presetName}"',
    },
  },
  dtree: {
    variants: 'variants',
    previewMode: 'Preview mode',
    results: 'Results',
    tree: 'Tree',
    showingResultsForStep: 'Showing results for Step',
    showingResultsForFinalStep: 'Showing results for Final Step',
    excludedVariants: 'Excluded Variants',
    includedVariants: 'Included Variants',
    logScale: 'Log scale',
    step: 'Step',
    include: 'Include',
    exclude: 'Exclude',
    addStep: '+ Add Step',
    applyFilter: 'Apply Filter',
    algorithm: 'Algorithm',
    addAttribute: '+ Add Attribute',
    addNewAttribute: 'Add attribute',
    addByJoining: 'Add by joining',
    nothingSelected: 'Nothing is selected',
    addQuery: 'Add query',
    add: 'Add',
    selectAttribute: 'Select attribute',
    backToAttribute: 'Back to Attributes List',
    saveChanges: 'Save changes',
    deleteAttribute: 'Delete attribute',
    selected: 'selected',
    replace: 'Replace',
    join: 'Join',
    joinBy: 'Join by',
    joinByAnd: 'Join by AND',
    joinByOr: 'Join by OR',
    duplicate: 'Duplicate',
    negate: 'Negate',
    delete: 'Delete',
    addStepBefore: 'Add Step Before',
    addStepAfter: 'Add Step After',
    problemGroup: 'Problem group:',
    fn: 'fn',
    noFilters: 'There are no filters to show',
    scenario: 'Scenario',
    all: 'All',
    not: 'Not',
    reset: 'Reset',
    empty: 'empty',
    split: 'Split',
    approx: 'Approx',
    state: 'State',
    locus: 'Locus',
    minimalCountsOfEventsOnCompoundRequest:
      'Minimal count of events should be more than 0',
    fullList: 'Full list',
    samples25: 'Samples-25',
    editCurrentDecisionTreeCode: 'Edit current Decision Tree code',
    expressionIsNotCorrect: 'Expression is incorrect',
    darkMode: 'dark mode',
    loading: 'Loading...',
    chooseActiveStep: 'Choose active step',
    dtreeIsEmpty: 'Decision Tree is empty',
    decisionTreeName: 'Decision Tree name',
    dtree: 'Decision Tree',
    hasBeenCreated: 'has been created',
    hasBeenDeleted: 'has been deleted',
    hasBeenModified: 'has been modified',
    loadAnyDtree: 'Load any Decision Tree first',
    noChanges: 'There are no changes in Decision Tree',
    chooseAnyTree: 'Choose any Decision Tree from the left list first',
    cantDeleteModifyDefaultTree:
      'You cannot delete or modify default Decision Trees',
    confirmClosing: 'Do you really want to close the window?',
    changesWontBeSaved: 'This action will drop all your changes',
    acceptedVariants: 'Accepted variants: ',
    rejectedVariants: 'Rejected variants: ',
    finalStep: 'Final Step',
    initialStep: 'Initial Step',
    viewVariants: 'View variants',
    viewReturnedVariants: 'View returned variants',
    showReturnedVariantsForStep: 'Show {returnValue} variants for step {index}',
    dtreeDeleteConfirmation: 'Do you really want to delete this tree?',
  },
  error: {
    getBack: 'Back to home',
    smthWentWrong: 'Sorry, something went wrong...',
    noFirstSymbols: 'No symbols at the first position',
    tooLongNote: 'Note is too long',
    tagNameIsTooLong: 'Tag name is too long',
    dtreeNameIsNotValid: 'Decision tree name is not valid',
    noChangesToModify: 'There are no changes to modify',
    choosePresetFirst: 'Choose preset first',
    chooseFiltersFirst: 'Choose filters first',
    cantJoinTheSamePreset: 'Cant join the same preset',
    runtimeProblem: 'Runtime problem',
  },
  igv: {
    openIgv: 'Open igv',
    filesNotFound: 'Files not found',
  },
  notFound: {
    somethingIsWrong: 'Something is wrong',
    info: 'The page you are looking for was moved, removed, renamed or might never existed',
  },
}
