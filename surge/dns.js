// set ssid
const ssid = "LLA";
// set DNS servers array
const servers = ["1.1.1.1", "1.0.0.1", "8.8.8.8", "8.8.4.4"];
// switch dns based on ssid
if ($network.wifi.ssid == ssid) {
  $done({}); // Fallback to standard DND query
} else {
  $done({ servers: servers }); // Use custom DNS servers
}