// (function(root) {
//   var _genres = [];
//   var GENRES_INDEX_CHANGE_EVENT = "genresIndexChange"
//
//   var resetGenres = function (genres) {
//     _genres = genres;
//   }
//
//   root.GenreStore = $.extend({}, EventEmitter.prototype, {
//     all: function () {
//       return _genres.slice();
//     },
//
//     addChangeListener: function (callback) {
//       GenreStore.on(GENRES_INDEX_CHANGE_EVENT, callback);
//     },
//
//     removeChangeListener: function (callback) {
//       GenreStore.removeListener(GENRES_INDEX_CHANGE_EVENT, callback);
//     },
//
//     dispatcherId: AppDispatcher.register(function (payload) {
//       switch(payload.actionType) {
//         case GenreConstants.GENRES_RECEIVED:
//           resetGenres(payload.genres);
//           GenreStore.emit(GENRES_INDEX_CHANGE_EVENT);
//           break;
//       }
//     })
//   })
// }(this))
