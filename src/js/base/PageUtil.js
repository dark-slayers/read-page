class PageUtil {
  static reload() {
    window.location.reload();
  }
  static redirect(url) {
    window.location.href=url;
  }
};

export default PageUtil;
