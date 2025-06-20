export function setupBridge(callback: (...rest: any[]) => void) {
  // 这里视为android和ios互相独立
  if (window.WebViewJavascriptBridge) {
    // android的bridge
    return callback(window.WebViewJavascriptBridge);
  }
  if (window.WKWebViewJavascriptBridge) {
    // ios的bridge
    return callback(window.WKWebViewJavascriptBridge);
  }
  if (window.WKWVJBCallbacks) {
    // ios没有WKWebViewJavascriptBridge时的备用方法
    window.WKWVJBCallbacks.push(callback);
    return;
  }
  window.WKWVJBCallbacks = [callback];
  window.webkit?.messageHandlers?.iOS_Native_InjectJavascript?.postMessage?.(
    null,
  );

  // android没有WebViewJavascriptBridge使的备用方法
  document.addEventListener(
    'WebViewJavascriptBridgeReady',
    function () {
      callback(window.WebViewJavascriptBridge);
    },
    false,
  );
}

export function callBridge(
  eventName: string,
  args: any,
  callback: (...rest: any) => void,
) {
  setupBridge(function (bridge) {
    bridge?.callHandler(eventName, args, callback);
  });
}

export function registerBridgeEvent(
  eventName: string,
  callback: (...rest: any) => void,
) {
  setupBridge(function (bridge) {
    bridge?.registerHandler(eventName, callback);
  });
}

export function goBack(toRoot = 1) {
  callBridge('webBack', { toRoot }, function () {
    console.log('返回啦');
  });
}

// 隐藏原生的头部栏
export const hideHeaderBar = () => {
  callBridge('hideHeaderBar', null, function () {
    console.log('隐藏啦');
  });
};

// 通知客户端注销用户
export const logoff = () => {
  callBridge('logoff', null, function () {
    console.log('注销了');
  });
};
