
export function CheckDevice() {
    var platform;

    const userAgent = typeof window !== 'undefined' ? navigator.userAgent || navigator.vendor : '';
    if (/android/i.test(userAgent)) {
      platform = ('mobile');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !/Macintosh/.test(userAgent)) {
      platform = ('mobile');
    } else {
      platform = ('desktop');
    }

  return platform;
}

