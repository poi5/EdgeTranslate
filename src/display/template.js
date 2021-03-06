export {template};
var template =  '<i class="translate-icon translate-icon-tuding-fix translate-fix" title="固定侧边栏"></i>'+
                '<i class="translate-icon translate-icon-tuding-full translate-fix" title="解除固定"></i>'+
                '<i class="translate-icon translate-icon-close"></i>' + 
                '<div class="translate-main-meaning">' + 
                   '<% if (this.mainMeaning.length <= 6) { %>' + 
                       '<p class="translate-main-meaning-content-larger"><% this.mainMeaning %></p>' + 
                   '<% } %>' + 
                   '<% else if (this.mainMeaning.length > 6 && this.mainMeaning.length <= 12) { %>' + 
                       '<p class="translate-main-meaning-content-large"><% this.mainMeaning %></p>' + 
                   '<% } %>' + 
                   '<% else if (this.mainMeaning.length > 12 && this.mainMeaning.length <= 460) { %>' + 
                       '<p class="translate-main-meaning-content-small"><% this.mainMeaning %></p>' + 
                   '<% } %>' + 
                   '<% else { %>' + 
                       '<p class="translate-main-meaning-content-smaller"><% this.mainMeaning %></p>' + 
                   '<% } %>' + 
               '</div>' + 
               '<div class="translate-common-meanings">' + 
                   '<% if (this.commonMeanings && this.commonMeanings.length > 0) { %>' + 
                        '<p class="translate-content-title"><% chrome.i18n.getMessage("CommonMeanings") %>: </p>' + 
                        '<ul class="translate-list">'+
                            '<li class="translate-common-meanings-content"><% this.commonMeanings %></li>' + 
                        '</ul>'+
                   '<% } %>' + 
               '</div>' + 
               '<div class="translate-detailed-meanings">' + 
                   '<% if (this.detailedMeanings && this.detailedMeanings.length > 0) { %>' + 
                       '<p class="translate-content-title"><% chrome.i18n.getMessage("DetailedMeanings") %>: </p>' + 
                       '<% for (let i in this.detailedMeanings) { %>' + 
                           '<p class="translate-detailed-meanings-content">' + 
                               '<span class="translate-word-type"><% this.detailedMeanings[i].type + ": " %></span>' + 
                               '<span class="translate-content"><% this.detailedMeanings[i].meaning %></span>' + 
                           '</p>' + 
                       '<% } %>' + 
                   '<% } %>' + 
               '</div>' + 
               '<div class="translate-definitions">' + 
                   '<% if (this.definitions && this.definitions.length > 0) { %>' + 
                       '<p class="translate-content-title"><% chrome.i18n.getMessage("Definitions") %>: </p>' + 
                       '<% for (let i in this.definitions) { %>' + 
                           '<div class="translate-definitions-content">' + 
                               '<p class="translate-word-type"><% this.definitions[i].type + ": " %></p>' + 
                               '<ul class="translate-list">' + 
                                   '<% for (let j in this.definitions[i].meanings) { %>' + 
                                       '<li>' + 
                                           '<span class="translate-word-type"><% chrome.i18n.getMessage("DefinitionsMeaning") %>: </span>'+
                                           '<span class="translate-content"><% this.definitions[i].meanings[j].meaning %></span>' + 
                                           '<span class="translate-word-type"><% chrome.i18n.getMessage("DefinitionsExample") %>: </span>'+
                                           '<span class="translate-content"><% this.definitions[i].meanings[j].example %></span>' + 
                                       '</li>' + 
                                   '<% } %>' + 
                               '</ul>' + 
                           '</div>' + 
                       '<% } %>' + 
                   '<% } %>' + 
               '</div>' + 
               '<div class="translate-synonyms">' + 
                   '<% if (this.synonyms && this.synonyms.length > 0) { %>' + 
                       '<p class="translate-content-title"><% chrome.i18n.getMessage("Synonyms") %>: </p>' + 
                       '<% for (let i in this.synonyms) { %>' + 
                           '<p class="translate-synonyms-content">' + 
                               '<span class="translate-word-type"><% this.synonyms[i].type + ": " %></span>' + 
                               '<span class="translate-synonyms-words"><% this.synonyms[i].words[0] %></span>' + 
                           '</p>' + 
                       '<% } %>' + 
                   '<% } %>' +
               '</div>' + 
               '<div class="translate-phrases">' + 
                   '<% if (this.phrases && this.phrases.length > 0) { %>' + 
                       '<p class="translate-content-title"><% chrome.i18n.getMessage("Phrases") %>: </p>' + 
                       '<ul class="translate-list">' + 
                           '<% for (let i in this.phrases) { %>' + 
                               '<li class="translate-content"><% this.phrases[i] %></li>' + 
                           '<% } %>' + 
                       '</ul>' + 
                   '<% } %>' + 
               '</div>' + 
               '<div class="translate-examples">' + 
                   '<% if (this.examples && this.examples.length > 0) { %>' + 
                       '<p class="translate-content-title"><% chrome.i18n.getMessage("Examples") %>: </p>' + 
                       '<p>' + 
                           '<% for (let i in this.examples) { %>' + 
                               '<p class="translate-sentences"><% this.examples[i] %></p>' + 
                           '<% } %>' + 
                       '</p>' + 
                   '<% } %>' + 
               '</div>';