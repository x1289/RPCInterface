class NetworkRPC {
  constructor(version = '1.0') {
    this.rpcVersion = version;
  }
  
  ping(id = 'test') {
    return `{"jsonrpc": "${this.rpcVersion}", "id": "${id}", "method": "ping", "params": []}`;
  }
}
