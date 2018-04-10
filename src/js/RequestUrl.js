const RequestUrl={
  chapter:function(bookId,chapterIndex){
    return `/book/${bookId}/chapter/${chapterIndex}`;
  },
  bookInfo:'/book/info',
  titles:'/book/titles/',
  addBook:'/book/path ',
};

export default RequestUrl;
