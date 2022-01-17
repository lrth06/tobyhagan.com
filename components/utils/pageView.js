
export async function pageView(route) {
    const res = await fetch(`https://api.ipify.org?format=json`);
    const ipAddress = await res.json();
    ipAddress = ipAddress.ip;
    const sent = await fetch('/api/pageView', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            path: route,
            ip: ipAddress,
        }),
    });
    const data = await sent.json();
    return data;
}
