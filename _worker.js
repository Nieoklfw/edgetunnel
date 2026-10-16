const a0_0x43d2af = a0_0x5eca;
(function (_0x209d67, _0x580ba4) {
    const _0xa2726d = a0_0x5eca, _0x6b7e2b = _0x209d67();
    while (!![]) {
        try {
            const _0x3851d5 = -parseInt(_0xa2726d(0x202)) / 0x1 + parseInt(_0xa2726d(0x414)) / 0x2 + parseInt(_0xa2726d(0x20c)) / 0x3 * (parseInt(_0xa2726d(0x613)) / 0x4) + parseInt(_0xa2726d(0x28d)) / 0x5 * (parseInt(_0xa2726d(0x3f1)) / 0x6) + -parseInt(_0xa2726d(0x37a)) / 0x7 * (parseInt(_0xa2726d(0x5d9)) / 0x8) + -parseInt(_0xa2726d(0x1e9)) / 0x9 * (-parseInt(_0xa2726d(0x1c1)) / 0xa) + parseInt(_0xa2726d(0x365)) / 0xb;
            if (_0x3851d5 === _0x580ba4)
                break;
            else
                _0x6b7e2b['push'](_0x6b7e2b['shift']());
        } catch (_0x565e36) {
            _0x6b7e2b['push'](_0x6b7e2b['shift']());
        }
    }
}(a0_0x2d4e, 0x6ea11));
const Version = a0_0x43d2af(0x436);
let config_JSON, 缓存SOCKS5白名单 = null, 调试日志打印 = ![], SOCKS5白名单 = [
        a0_0x43d2af(0x1bf),
        '*cloudatacdn.com',
        a0_0x43d2af(0x37c),
        a0_0x43d2af(0x688),
        a0_0x43d2af(0x372)
    ];
const Pages静态页面 = a0_0x43d2af(0x4ed), EDT_版本号 = Number(String(Version)[a0_0x43d2af(0x680)](/\D+/g, '')), WS早期数据最大字节 = 0x8 * 0x400, WS早期数据最大头长度 = Math['ceil'](WS早期数据最大字节 * 0x4 / 0x3) + 0x4, 上行合包目标字节 = 0x14 * 0x400, 上行队列最大字节 = 0x10 * 0x400 * 0x400, 上行队列最大条目 = 0x1000, 下行Grain包字节 = 0x20 * 0x400, 下行Grain尾部阈值 = 0x200, 下行Grain低水位字节 = Math[a0_0x43d2af(0x209)](0x1000, 下行Grain尾部阈值 * 0xc), 下行Grain最大等待轮次 = 0x4;
let TCP并发拨号数 = 0x2, 反代并发拨号数 = 0x1, 预加载竞速拨号 = ![];
const 特征码字典 = [
        (Proxy['name'] + 'IP')[a0_0x43d2af(0x570)](),
        (String['fromCharCode'](0x43, 0x6d) + URL[a0_0x43d2af(0x1b6)][0x2] + 'i' + URL['name'][0x0])[a0_0x43d2af(0x486)](),
        String(0x967 * 0x12c - 0xa)[a0_0x43d2af(0x492)]('')[a0_0x43d2af(0x398)]()[a0_0x43d2af(0x4f1)]('')
    ], 汇聚订阅_UA = a0_0x43d2af(0x4cc) + 'tunnel\x20(https://github.com/' + 特征码字典[0x1] + a0_0x43d2af(0x3ba) + a0_0x43d2af(0x502);
export default {
    async 'fetch'(request, env, ctx) {
        const _0x39baea = a0_0x43d2af;
        try {
            let _0x4dcc53 = request['url'][_0x39baea(0x680)](/%5[Cc]/g, '')[_0x39baea(0x680)](/\\/g, '');
            const _0x37ab0c = _0x4dcc53[_0x39baea(0x413)]('#'), _0x556b32 = _0x37ab0c === -0x1 ? _0x4dcc53 : _0x4dcc53[_0x39baea(0x548)](0x0, _0x37ab0c);
            if (!_0x556b32['includes']('?') && /%3f/i[_0x39baea(0x247)](_0x556b32)) {
                const _0x4740c1 = _0x37ab0c === -0x1 ? '' : _0x4dcc53[_0x39baea(0x548)](_0x37ab0c);
                _0x4dcc53 = _0x556b32[_0x39baea(0x680)](/%3f/i, '?') + _0x4740c1;
            }
            const _0x13c990 = new URL(_0x4dcc53), _0x28aff8 = request['headers'][_0x39baea(0x257)](_0x39baea(0x59c)) || _0x39baea(0x5dd), _0xa9de77 = (request[_0x39baea(0x3b9)]['get'](_0x39baea(0x1da)) || '')[_0x39baea(0x486)](), _0x493fce = (request[_0x39baea(0x3b9)][_0x39baea(0x257)]('content-type') || '')['toLowerCase'](), _0x3f4c06 = env[_0x39baea(0x1ea)] || env[_0x39baea(0x4dd)] || env[_0x39baea(0x270)] || env['password'] || env[_0x39baea(0x2b0)] || env[_0x39baea(0x1dc)] || env['KEY'] || env[_0x39baea(0x1bb)] || env[_0x39baea(0x1b4)], _0x140de9 = env['KEY'] || '勿动此默认密钥，有需求请自行通过添加变量KEY进行修改', _0x93de67 = await MD5MD5(_0x3f4c06 + _0x140de9), _0x3f33b0 = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/, _0x932bad = env['UUID'] || env[_0x39baea(0x1b4)], _0x53fad7 = _0x932bad && _0x3f33b0[_0x39baea(0x247)](_0x932bad) ? _0x932bad[_0x39baea(0x486)]() : [
                    _0x93de67['slice'](0x0, 0x8),
                    _0x93de67[_0x39baea(0x548)](0x8, 0xc),
                    '4' + _0x93de67[_0x39baea(0x548)](0xd, 0x10),
                    '8' + _0x93de67['slice'](0x11, 0x14),
                    _0x93de67[_0x39baea(0x548)](0x14)
                ][_0x39baea(0x4f1)]('-'), _0x4bd4a5 = env[_0x39baea(0x657)] ? (await 整理成数组(env[_0x39baea(0x657)]))[_0x39baea(0x2a7)](_0x120c46 => _0x120c46[_0x39baea(0x486)]()[_0x39baea(0x680)](/^https?:\/\//, '')[_0x39baea(0x492)]('/')[0x0][_0x39baea(0x492)](':')[0x0]) : [_0x13c990[_0x39baea(0x5ac)]], _0x19ba04 = _0x4bd4a5[0x0], _0x35f61f = _0x13c990['pathname']['slice'](0x1)[_0x39baea(0x486)]();
            调试日志打印 = [
                '1',
                'true'
            ][_0x39baea(0x68e)](env['DEBUG']) || 调试日志打印, 预加载竞速拨号 = [
                '1',
                _0x39baea(0x3dd)
            ][_0x39baea(0x68e)](env['PRELOAD_RACE_DIAL']) || 预加载竞速拨号, 反代并发拨号数 = Math['max'](0x1, Number(env['PROXY_CONCURRENT_DIAL']) || 反代并发拨号数), TCP并发拨号数 = Math[_0x39baea(0x209)](0x1, Number(env[_0x39baea(0x373)]) || TCP并发拨号数);
            if (!env[_0x39baea(0x373)] && TCP并发拨号数 !== 0x1 && 识别运营商(request) === _0x39baea(0x51b))
                TCP并发拨号数 = 0x1;
            let _0x5549a9 = (request['cf'][_0x39baea(0x4e3)] + '.' + 特征码字典[0x0] + '.' + 特征码字典[0x1] + _0x39baea(0x293))['toLowerCase'](), _0x2a26f9 = !![];
            if (env[_0x39baea(0x4ba)]) {
                const _0x295f4c = await 整理成数组(env[_0x39baea(0x4ba)]);
                _0x5549a9 = _0x295f4c[Math[_0x39baea(0x2eb)](Math[_0x39baea(0x3eb)]() * _0x295f4c['length'])], _0x2a26f9 = ![];
            }
            ;
            const _0x377093 = request[_0x39baea(0x3b9)][_0x39baea(0x257)](_0x39baea(0x5a1)) || request[_0x39baea(0x3b9)][_0x39baea(0x257)](_0x39baea(0x5e5)) || request[_0x39baea(0x3b9)][_0x39baea(0x257)](_0x39baea(0x286)) || request[_0x39baea(0x3b9)][_0x39baea(0x257)](_0x39baea(0x374)) || request[_0x39baea(0x3b9)][_0x39baea(0x257)](_0x39baea(0x68c)) || request[_0x39baea(0x3b9)][_0x39baea(0x257)](_0x39baea(0x590)) || request['headers'][_0x39baea(0x257)](_0x39baea(0x3f8)) || _0x39baea(0x567), [_0x57fbd7, _0x32e876] = 获取本机标识(_0x53fad7);
            if (缓存SOCKS5白名单 === null) {
                if (env[_0x39baea(0x470)])
                    SOCKS5白名单 = [...new Set(SOCKS5白名单['concat'](await 整理成数组(env[_0x39baea(0x470)])))];
                缓存SOCKS5白名单 = SOCKS5白名单;
            } else
                SOCKS5白名单 = 缓存SOCKS5白名单;
            if (_0x35f61f === _0x39baea(0x610)) {
                const _0x3ea8b6 = (_0x13c990[_0x39baea(0x598)][_0x39baea(0x257)]('uuid') || '')[_0x39baea(0x486)]();
                if (_0x3f33b0[_0x39baea(0x247)](_0x3ea8b6)) {
                    const _0x27002f = String(_0x53fad7)[_0x39baea(0x486)]();
                    let _0x4c0fbe = 0x0, _0x4754d5 = 0x0;
                    for (let _0x162f78 = 0x0; _0x162f78 < 0x8; _0x162f78++) {
                        const _0x58e57f = _0x3ea8b6['charCodeAt'](_0x162f78);
                        _0x4c0fbe += _0x58e57f <= 0x39 ? _0x58e57f - 0x30 : _0x58e57f - 0x57;
                        const _0x89e60a = _0x27002f[_0x39baea(0x411)](_0x162f78);
                        _0x4754d5 += _0x89e60a <= 0x39 ? _0x89e60a - 0x30 : _0x89e60a - 0x57;
                    }
                    if (_0x4c0fbe === _0x4754d5 && _0x3ea8b6[_0x39baea(0x548)](-0xc) === _0x27002f[_0x39baea(0x548)](-0xc))
                        return new Response(JSON['stringify']({ 'Version': EDT_版本号 }), {
                            'status': 0xc8,
                            'headers': { 'Content-Type': _0x39baea(0x5fa) }
                        });
                }
            } else {
                if (_0x3f4c06 && _0xa9de77 === _0x39baea(0x473)) {
                    const _0x2c66c7 = await 反代参数获取(_0x13c990, _0x53fad7, _0x5549a9, _0x2a26f9);
                    return log('[WebSocket]\x20命中请求:\x20' + _0x13c990['pathname'] + _0x13c990['search']), await 处理WS请求(request, _0x53fad7, _0x13c990, _0x2c66c7);
                } else {
                    if (_0x3f4c06 && !_0x35f61f[_0x39baea(0x661)](_0x39baea(0x252)) && _0x35f61f !== _0x39baea(0x4c3) && request[_0x39baea(0x52d)] === _0x39baea(0x4f6)) {
                        const _0x323276 = await 反代参数获取(_0x13c990, _0x53fad7, _0x5549a9, _0x2a26f9), _0x253b4f = !!request['headers'][_0x39baea(0x257)](_0x57fbd7) || !!_0x13c990[_0x39baea(0x598)][_0x39baea(0x257)](_0x32e876);
                        if (!_0x253b4f && _0x493fce[_0x39baea(0x661)](_0x39baea(0x55d)))
                            return log(_0x39baea(0x440) + _0x13c990[_0x39baea(0x40e)] + _0x13c990[_0x39baea(0x3f0)]), await 处理gRPC请求(request, _0x53fad7, _0x323276);
                        return log(_0x39baea(0x692) + _0x13c990[_0x39baea(0x40e)] + _0x13c990[_0x39baea(0x3f0)]), await 处理叉HTTP请求(request, _0x53fad7, _0x323276);
                    } else {
                        if (_0x13c990[_0x39baea(0x4a7)] === _0x39baea(0x22f))
                            return Response[_0x39baea(0x681)](_0x13c990[_0x39baea(0x44f)]['replace'](_0x39baea(0x58e) + _0x13c990[_0x39baea(0x5ac)], _0x39baea(0x22a) + _0x13c990['hostname']), 0x12d);
                        if (!_0x3f4c06)
                            return fetch(Pages静态页面 + _0x39baea(0x633))[_0x39baea(0x56e)](_0x221cff => {
                                const _0xfaae22 = _0x39baea, _0x4f1f42 = new Headers(_0x221cff[_0xfaae22(0x3b9)]);
                                return _0x4f1f42[_0xfaae22(0x1f2)](_0xfaae22(0x41f), _0xfaae22(0x1d3)), _0x4f1f42[_0xfaae22(0x1f2)]('Pragma', _0xfaae22(0x446)), _0x4f1f42[_0xfaae22(0x1f2)](_0xfaae22(0x66d), '0'), new Response(_0x221cff[_0xfaae22(0x3ff)], {
                                    'status': 0x194,
                                    'statusText': _0x221cff[_0xfaae22(0x417)],
                                    'headers': _0x4f1f42
                                });
                            })[_0x39baea(0x5ec)](() => new Response('<h1>edgetunnel:\x20未配置\x20ADMIN\x20环境变量</h1><p>请前往\x20Cloudflare\x20控制台\x20->\x20Workers\x20->\x20设置\x20->\x20变量\x20->\x20添加变量\x20ADMIN（值为管理员密码）。</p>', {
                                'status': 0x191,
                                'headers': { 'Content-Type': _0x39baea(0x21f) }
                            }));
                        if (env['KV'] && typeof env['KV'][_0x39baea(0x257)] === 'function') {
                            const _0x441d01 = _0x13c990[_0x39baea(0x40e)][_0x39baea(0x548)](0x1);
                            if (_0x441d01 === _0x140de9 && _0x140de9 !== _0x39baea(0x44d)) {
                                const _0x32b3d4 = new URLSearchParams(_0x13c990['search']);
                                return _0x32b3d4['set']('token', await MD5MD5(_0x19ba04 + _0x53fad7)), new Response(_0x39baea(0x348), {
                                    'status': 0x12e,
                                    'headers': { 'Location': '/sub?' + _0x32b3d4[_0x39baea(0x592)]() }
                                });
                            } else {
                                if (_0x35f61f === 'login') {
                                    const _0x7d218d = request[_0x39baea(0x3b9)]['get']('Cookie') || '', _0x294ae1 = _0x7d218d[_0x39baea(0x492)](';')['find'](_0x45f08b => _0x45f08b['trim']()[_0x39baea(0x661)](_0x39baea(0x3e7)))?.[_0x39baea(0x492)]('=')[0x1];
                                    if (_0x294ae1 == await MD5MD5(_0x28aff8 + _0x140de9 + _0x3f4c06))
                                        return new Response(_0x39baea(0x348), {
                                            'status': 0x12e,
                                            'headers': { 'Location': _0x39baea(0x685) }
                                        });
                                    if (request[_0x39baea(0x52d)] === 'POST') {
                                        const _0x58b85b = await request[_0x39baea(0x66c)](), _0x3e18cb = new URLSearchParams(_0x58b85b), _0x581e3a = _0x3e18cb[_0x39baea(0x257)](_0x39baea(0x2f6));
                                        if (_0x581e3a === (typeof _0x3f4c06 === _0x39baea(0x615) ? _0x3f4c06[_0x39baea(0x680)](/[\r\n]/g, '') : _0x3f4c06)) {
                                            const _0x168fa7 = new Response(JSON[_0x39baea(0x510)]({ 'success': !![] }), {
                                                'status': 0xc8,
                                                'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                            });
                                            return _0x168fa7[_0x39baea(0x3b9)][_0x39baea(0x1f2)](_0x39baea(0x36d), _0x39baea(0x3e7) + await MD5MD5(_0x28aff8 + _0x140de9 + _0x3f4c06) + _0x39baea(0x4b5)), _0x168fa7;
                                        }
                                    }
                                    return fetch(Pages静态页面 + _0x39baea(0x3db));
                                } else {
                                    if (_0x35f61f === 'admin' || _0x35f61f['startsWith']('admin/')) {
                                        const _0x3af8ed = request[_0x39baea(0x3b9)]['get'](_0x39baea(0x253)) || '', _0x25e932 = _0x3af8ed[_0x39baea(0x492)](';')[_0x39baea(0x204)](_0x82aaff => _0x82aaff['trim']()[_0x39baea(0x661)](_0x39baea(0x3e7)))?.[_0x39baea(0x492)]('=')[0x1];
                                        if (!_0x25e932 || _0x25e932 !== await MD5MD5(_0x28aff8 + _0x140de9 + _0x3f4c06))
                                            return new Response(_0x39baea(0x348), {
                                                'status': 0x12e,
                                                'headers': { 'Location': _0x39baea(0x3db) }
                                            });
                                        if (_0x35f61f === _0x39baea(0x432)) {
                                            const _0x5b5315 = await env['KV'][_0x39baea(0x257)](_0x39baea(0x513)) || '[]';
                                            return new Response(_0x5b5315, {
                                                'status': 0xc8,
                                                'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                            });
                                        } else {
                                            if (_0x441d01 === _0x39baea(0x48e))
                                                try {
                                                    const _0x5a9387 = await getCloudflareUsage(_0x13c990['searchParams']['get'](_0x39baea(0x670)), _0x13c990[_0x39baea(0x598)]['get']('GlobalAPIKey'), _0x13c990[_0x39baea(0x598)][_0x39baea(0x257)](_0x39baea(0x5d3)), _0x13c990['searchParams'][_0x39baea(0x257)](_0x39baea(0x245)));
                                                    return new Response(JSON[_0x39baea(0x510)](_0x5a9387, null, 0x2), {
                                                        'status': 0xc8,
                                                        'headers': { 'Content-Type': _0x39baea(0x4c8) }
                                                    });
                                                } catch (_0x10a654) {
                                                    const _0x3abe0c = {
                                                        'msg': _0x39baea(0x671) + _0x10a654[_0x39baea(0x385)],
                                                        'error': _0x10a654[_0x39baea(0x385)]
                                                    };
                                                    return new Response(JSON[_0x39baea(0x510)](_0x3abe0c, null, 0x2), {
                                                        'status': 0x1f4,
                                                        'headers': { 'Content-Type': 'application/json;charset=utf-8' }
                                                    });
                                                }
                                            else {
                                                if (_0x441d01 === _0x39baea(0x3f9)) {
                                                    if (_0x13c990[_0x39baea(0x598)][_0x39baea(0x257)]('url')) {
                                                        const _0x4a1adf = _0x13c990[_0x39baea(0x598)][_0x39baea(0x257)](_0x39baea(0x25a));
                                                        try {
                                                            new URL(_0x4a1adf);
                                                            const _0x272e81 = await 请求优选API([_0x4a1adf], _0x13c990[_0x39baea(0x598)][_0x39baea(0x257)](_0x39baea(0x4bb)) || _0x39baea(0x35a), _0x57fbd7);
                                                            let _0x4649da = _0x272e81[0x0][_0x39baea(0x292)] > 0x0 ? _0x272e81[0x0] : _0x272e81[0x1];
                                                            return _0x4649da = _0x4649da['map'](_0x9d05c4 => _0x9d05c4['replace'](/#(.+)$/, (_0x236870, _0xc7d7a5) => '#' + decodeURIComponent(_0xc7d7a5))), new Response(JSON[_0x39baea(0x510)]({
                                                                'success': !![],
                                                                'data': _0x4649da
                                                            }, null, 0x2), {
                                                                'status': 0xc8,
                                                                'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                            });
                                                        } catch (_0x4e35a7) {
                                                            const _0x2733bc = {
                                                                'msg': _0x39baea(0x31a) + _0x4e35a7[_0x39baea(0x385)],
                                                                'error': _0x4e35a7[_0x39baea(0x385)]
                                                            };
                                                            return new Response(JSON[_0x39baea(0x510)](_0x2733bc, null, 0x2), {
                                                                'status': 0x1f4,
                                                                'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                            });
                                                        }
                                                    }
                                                    return new Response(JSON[_0x39baea(0x510)]({
                                                        'success': ![],
                                                        'data': []
                                                    }, null, 0x2), {
                                                        'status': 0x193,
                                                        'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                    });
                                                } else {
                                                    if (_0x35f61f === _0x39baea(0x5fe)) {
                                                        const _0xd03af5 = [
                                                            'socks5',
                                                            'http',
                                                            _0x39baea(0x2d6),
                                                            _0x39baea(0x59a),
                                                            _0x39baea(0x5b3)
                                                        ]['find'](_0x3862db => _0x13c990[_0x39baea(0x598)][_0x39baea(0x53a)](_0x3862db)) || null;
                                                        if (!_0xd03af5)
                                                            return new Response(JSON[_0x39baea(0x510)]({ 'error': _0x39baea(0x5cd) }), {
                                                                'status': 0x190,
                                                                'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                            });
                                                        const _0x524df9 = _0x13c990['searchParams'][_0x39baea(0x257)](_0xd03af5), _0x5add58 = Date['now']();
                                                        let _0x318dc0;
                                                        try {
                                                            const _0x5cc323 = await 获取SOCKS5账号(_0x524df9, 获取代理默认端口(_0xd03af5)), {
                                                                    username: _0x1a9329,
                                                                    password: _0x125269,
                                                                    hostname: _0x507d77,
                                                                    port: _0x18fde6
                                                                } = _0x5cc323, _0x8a429a = _0x1a9329 && _0x125269 ? _0x1a9329 + ':' + _0x125269 + '@' + _0x507d77 + ':' + _0x18fde6 : _0x507d77 + ':' + _0x18fde6;
                                                            try {
                                                                const _0x300f15 = _0x39baea(0x312), _0x1b7473 = 0x1bb, _0x5e5ef8 = new TextEncoder(), _0x49d6b8 = new TextDecoder(), _0x3207ab = 创建请求TCP连接器(request);
                                                                let _0x2ac7a8 = null, _0x24e566 = null;
                                                                try {
                                                                    _0x2ac7a8 = _0xd03af5 === _0x39baea(0x626) ? await socks5Connect(_0x300f15, _0x1b7473, new Uint8Array(0x0), _0x3207ab, _0x5cc323) : _0xd03af5 === _0x39baea(0x59a) ? await turnConnect(_0x5cc323, _0x300f15, _0x1b7473, _0x3207ab) : _0xd03af5 === _0x39baea(0x5b3) ? await sstpConnect(_0x5cc323, _0x300f15, _0x1b7473, _0x3207ab) : _0xd03af5 === _0x39baea(0x2d6) && isIPHostname(_0x507d77) ? await httpsConnect(_0x300f15, _0x1b7473, new Uint8Array(0x0), _0x3207ab, _0x5cc323) : await httpConnect(_0x300f15, _0x1b7473, new Uint8Array(0x0), _0xd03af5 === 'https', _0x3207ab, _0x5cc323);
                                                                    if (!_0x2ac7a8)
                                                                        throw new Error(_0x39baea(0x3c5));
                                                                    _0x24e566 = new TlsClient(_0x2ac7a8, {
                                                                        'serverName': _0x300f15,
                                                                        'insecure': !![]
                                                                    }), await _0x24e566[_0x39baea(0x4f0)](), await _0x24e566[_0x39baea(0x668)](_0x5e5ef8['encode'](_0x39baea(0x6a2) + _0x300f15 + _0x39baea(0x50d)));
                                                                    let _0x46edcf = new Uint8Array(0x0), _0x45de8f = -0x1, _0x1f73f6 = null, _0xaa05a5 = ![];
                                                                    const _0x23c37d = 0x40 * 0x400;
                                                                    while (_0x46edcf[_0x39baea(0x292)] < _0x23c37d) {
                                                                        const _0x304873 = await _0x24e566[_0x39baea(0x1e7)]();
                                                                        if (!_0x304873)
                                                                            break;
                                                                        if (_0x304873[_0x39baea(0x574)] === 0x0)
                                                                            continue;
                                                                        _0x46edcf = 拼接字节数据(_0x46edcf, _0x304873);
                                                                        if (_0x45de8f === -0x1) {
                                                                            const _0x5c31d0 = _0x46edcf[_0x39baea(0x647)]((_0x2e0b01, _0x3ca7f4) => _0x3ca7f4 < _0x46edcf['length'] - 0x3 && _0x46edcf[_0x3ca7f4] === 0xd && _0x46edcf[_0x3ca7f4 + 0x1] === 0xa && _0x46edcf[_0x3ca7f4 + 0x2] === 0xd && _0x46edcf[_0x3ca7f4 + 0x3] === 0xa);
                                                                            if (_0x5c31d0 !== -0x1) {
                                                                                _0x45de8f = _0x5c31d0 + 0x4;
                                                                                const _0x494329 = _0x49d6b8[_0x39baea(0x49a)](_0x46edcf['slice'](0x0, _0x45de8f)), _0x10fda7 = _0x494329[_0x39baea(0x492)]('\x0d\x0a')[0x0] || '', _0x4f5846 = _0x10fda7[_0x39baea(0x5f7)](/HTTP\/\d\.\d\s+(\d+)/), _0x5edc04 = _0x4f5846 ? parseInt(_0x4f5846[0x1], 0xa) : NaN;
                                                                                if (!Number[_0x39baea(0x526)](_0x5edc04) || _0x5edc04 < 0xc8 || _0x5edc04 >= 0x12c)
                                                                                    throw new Error(_0x39baea(0x20b) + (_0x10fda7 || _0x39baea(0x63a)));
                                                                                const _0x3817bd = _0x494329['match'](/\r\nContent-Length:\s*(\d+)/i);
                                                                                if (_0x3817bd)
                                                                                    _0x1f73f6 = parseInt(_0x3817bd[0x1], 0xa);
                                                                                _0xaa05a5 = /\r\nTransfer-Encoding:\s*chunked/i['test'](_0x494329);
                                                                            }
                                                                        }
                                                                        if (_0x45de8f !== -0x1 && _0x1f73f6 !== null && _0x46edcf[_0x39baea(0x292)] >= _0x45de8f + _0x1f73f6)
                                                                            break;
                                                                        if (_0x45de8f !== -0x1 && _0xaa05a5 && _0x49d6b8[_0x39baea(0x49a)](_0x46edcf)[_0x39baea(0x68e)](_0x39baea(0x3ca)))
                                                                            break;
                                                                    }
                                                                    if (_0x45de8f === -0x1)
                                                                        throw new Error(_0x39baea(0x69b));
                                                                    const _0xbb3716 = _0x49d6b8['decode'](_0x46edcf), _0x59c618 = _0xbb3716[_0x39baea(0x5f7)](/(?:^|\n)ip=(.*)/)?.[0x1], _0x235f55 = _0xbb3716[_0x39baea(0x5f7)](/(?:^|\n)loc=(.*)/)?.[0x1];
                                                                    if (!_0x59c618 || !_0x235f55)
                                                                        throw new Error(_0x39baea(0x358));
                                                                    _0x318dc0 = {
                                                                        'success': !![],
                                                                        'proxy': _0xd03af5 + '://' + _0x8a429a,
                                                                        'ip': _0x59c618,
                                                                        'loc': _0x235f55,
                                                                        'responseTime': Date[_0x39baea(0x1e0)]() - _0x5add58
                                                                    };
                                                                } finally {
                                                                    try {
                                                                        _0x24e566 ? _0x24e566[_0x39baea(0x418)]() : await _0x2ac7a8?.[_0x39baea(0x418)]?.();
                                                                    } catch (_0xd41c42) {
                                                                    }
                                                                }
                                                            } catch (_0x287f3a) {
                                                                _0x318dc0 = {
                                                                    'success': ![],
                                                                    'error': _0x287f3a[_0x39baea(0x385)],
                                                                    'proxy': _0xd03af5 + _0x39baea(0x248) + _0x8a429a,
                                                                    'responseTime': Date[_0x39baea(0x1e0)]() - _0x5add58
                                                                };
                                                            }
                                                        } catch (_0x19635f) {
                                                            _0x318dc0 = {
                                                                'success': ![],
                                                                'error': _0x19635f[_0x39baea(0x385)],
                                                                'proxy': _0xd03af5 + _0x39baea(0x248) + _0x524df9,
                                                                'responseTime': Date['now']() - _0x5add58
                                                            };
                                                        }
                                                        return new Response(JSON[_0x39baea(0x510)](_0x318dc0, null, 0x2), {
                                                            'status': 0xc8,
                                                            'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                        config_JSON = await 读取config_JSON(env, _0x19ba04, _0x53fad7, _0x28aff8);
                                        if (_0x35f61f === _0x39baea(0x2b2))
                                            try {
                                                return config_JSON = await 读取config_JSON(env, _0x19ba04, _0x53fad7, _0x28aff8, !![]), ctx[_0x39baea(0x5a9)](请求日志记录(env, request, _0x377093, _0x39baea(0x2de), config_JSON)), config_JSON[_0x39baea(0x317)] = _0x39baea(0x27c), new Response(JSON[_0x39baea(0x510)](config_JSON, null, 0x2), {
                                                    'status': 0xc8,
                                                    'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                });
                                            } catch (_0x29b546) {
                                                const _0x2d4bdb = {
                                                    'msg': _0x39baea(0x37b) + _0x29b546[_0x39baea(0x385)],
                                                    'error': _0x29b546[_0x39baea(0x385)]
                                                };
                                                return new Response(JSON[_0x39baea(0x510)](_0x2d4bdb, null, 0x2), {
                                                    'status': 0x1f4,
                                                    'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                });
                                            }
                                        else {
                                            if (request[_0x39baea(0x52d)] === 'POST') {
                                                if (_0x35f61f === _0x39baea(0x698))
                                                    try {
                                                        const _0x21e6ac = await request[_0x39baea(0x331)]();
                                                        if (!_0x21e6ac[_0x39baea(0x1bb)] || !_0x21e6ac[_0x39baea(0x657)])
                                                            return new Response(JSON[_0x39baea(0x510)]({ 'error': '配置不完整' }), {
                                                                'status': 0x190,
                                                                'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                            });
                                                        return await env['KV'][_0x39baea(0x399)](_0x39baea(0x26e), JSON[_0x39baea(0x510)](_0x21e6ac, null, 0x2)), ctx[_0x39baea(0x5a9)](请求日志记录(env, request, _0x377093, _0x39baea(0x2c7), config_JSON)), new Response(JSON[_0x39baea(0x510)]({
                                                            'success': !![],
                                                            'message': '配置已保存'
                                                        }), {
                                                            'status': 0xc8,
                                                            'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                        });
                                                    } catch (_0x1e4c38) {
                                                        return console[_0x39baea(0x35f)]('保存配置失败:', _0x1e4c38), new Response(JSON[_0x39baea(0x510)]({ 'error': '保存配置失败:\x20' + _0x1e4c38[_0x39baea(0x385)] }), {
                                                            'status': 0x1f4,
                                                            'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                        });
                                                    }
                                                else {
                                                    if (_0x35f61f === _0x39baea(0x1e6))
                                                        try {
                                                            const _0xd5da6d = await request['json'](), _0xd59bb3 = {
                                                                    'Email': null,
                                                                    'GlobalAPIKey': null,
                                                                    'AccountID': null,
                                                                    'APIToken': null,
                                                                    'UsageAPI': null
                                                                };
                                                            if (!_0xd5da6d['init'] || _0xd5da6d['init'] !== !![]) {
                                                                if (_0xd5da6d[_0x39baea(0x670)] && _0xd5da6d['GlobalAPIKey'])
                                                                    _0xd59bb3[_0x39baea(0x670)] = _0xd5da6d['Email'], _0xd59bb3[_0x39baea(0x24c)] = _0xd5da6d[_0x39baea(0x24c)];
                                                                else {
                                                                    if (_0xd5da6d['AccountID'] && _0xd5da6d[_0x39baea(0x245)])
                                                                        _0xd59bb3[_0x39baea(0x5d3)] = _0xd5da6d['AccountID'], _0xd59bb3[_0x39baea(0x245)] = _0xd5da6d[_0x39baea(0x245)];
                                                                    else {
                                                                        if (_0xd5da6d[_0x39baea(0x1fe)])
                                                                            _0xd59bb3[_0x39baea(0x1fe)] = _0xd5da6d['UsageAPI'];
                                                                        else
                                                                            return new Response(JSON[_0x39baea(0x510)]({ 'error': _0x39baea(0x392) }), {
                                                                                'status': 0x190,
                                                                                'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                                            });
                                                                    }
                                                                }
                                                            }
                                                            return await env['KV'][_0x39baea(0x399)](_0x39baea(0x1bc), JSON[_0x39baea(0x510)](_0xd59bb3, null, 0x2)), ctx[_0x39baea(0x5a9)](请求日志记录(env, request, _0x377093, 'Save_Config', config_JSON)), new Response(JSON[_0x39baea(0x510)]({
                                                                'success': !![],
                                                                'message': _0x39baea(0x3ef)
                                                            }), {
                                                                'status': 0xc8,
                                                                'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                            });
                                                        } catch (_0x3f2bf9) {
                                                            return console[_0x39baea(0x35f)](_0x39baea(0x4d6), _0x3f2bf9), new Response(JSON[_0x39baea(0x510)]({ 'error': _0x39baea(0x69d) + _0x3f2bf9[_0x39baea(0x385)] }), {
                                                                'status': 0x1f4,
                                                                'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                            });
                                                        }
                                                    else {
                                                        if (_0x35f61f === 'admin/tg.json')
                                                            try {
                                                                const _0x4ab127 = await request[_0x39baea(0x331)]();
                                                                if (_0x4ab127[_0x39baea(0x317)] && _0x4ab127[_0x39baea(0x317)] === !![]) {
                                                                    const _0x3ff2d4 = {
                                                                        'BotToken': null,
                                                                        'ChatID': null
                                                                    };
                                                                    await env['KV'][_0x39baea(0x399)](_0x39baea(0x3f3), JSON['stringify'](_0x3ff2d4, null, 0x2));
                                                                } else {
                                                                    if (!_0x4ab127[_0x39baea(0x4f9)] || !_0x4ab127[_0x39baea(0x4d2)])
                                                                        return new Response(JSON[_0x39baea(0x510)]({ 'error': _0x39baea(0x392) }), {
                                                                            'status': 0x190,
                                                                            'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                                        });
                                                                    await env['KV'][_0x39baea(0x399)](_0x39baea(0x3f3), JSON[_0x39baea(0x510)](_0x4ab127, null, 0x2));
                                                                }
                                                                return ctx[_0x39baea(0x5a9)](请求日志记录(env, request, _0x377093, _0x39baea(0x2c7), config_JSON)), new Response(JSON[_0x39baea(0x510)]({
                                                                    'success': !![],
                                                                    'message': _0x39baea(0x3ef)
                                                                }), {
                                                                    'status': 0xc8,
                                                                    'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                                });
                                                            } catch (_0x569313) {
                                                                return console[_0x39baea(0x35f)](_0x39baea(0x4d6), _0x569313), new Response(JSON['stringify']({ 'error': _0x39baea(0x69d) + _0x569313[_0x39baea(0x385)] }), {
                                                                    'status': 0x1f4,
                                                                    'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                                });
                                                            }
                                                        else {
                                                            if (_0x441d01 === 'admin/ADD.txt')
                                                                try {
                                                                    const _0x239090 = await request[_0x39baea(0x66c)]();
                                                                    return await env['KV'][_0x39baea(0x399)](_0x39baea(0x479), _0x239090), ctx[_0x39baea(0x5a9)](请求日志记录(env, request, _0x377093, _0x39baea(0x433), config_JSON)), new Response(JSON['stringify']({
                                                                        'success': !![],
                                                                        'message': _0x39baea(0x52e)
                                                                    }), {
                                                                        'status': 0xc8,
                                                                        'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                                    });
                                                                } catch (_0x2656cb) {
                                                                    return console[_0x39baea(0x35f)](_0x39baea(0x314), _0x2656cb), new Response(JSON[_0x39baea(0x510)]({ 'error': _0x39baea(0x261) + _0x2656cb[_0x39baea(0x385)] }), {
                                                                        'status': 0x1f4,
                                                                        'headers': { 'Content-Type': _0x39baea(0x5fa) }
                                                                    });
                                                                }
                                                            else
                                                                return new Response(JSON[_0x39baea(0x510)]({ 'error': _0x39baea(0x276) }), {
                                                                    'status': 0x194,
                                                                    'headers': { 'Content-Type': 'application/json;charset=utf-8' }
                                                                });
                                                        }
                                                    }
                                                }
                                            } else {
                                                if (_0x35f61f === _0x39baea(0x698))
                                                    return new Response(JSON[_0x39baea(0x510)](config_JSON, null, 0x2), {
                                                        'status': 0xc8,
                                                        'headers': { 'Content-Type': 'application/json' }
                                                    });
                                                else {
                                                    if (_0x441d01 === _0x39baea(0x320)) {
                                                        let _0x1e9bf9 = await env['KV'][_0x39baea(0x257)](_0x39baea(0x479)) || _0x39baea(0x5dd);
                                                        if (_0x1e9bf9 == _0x39baea(0x5dd))
                                                            _0x1e9bf9 = (await 生成随机IP(request, config_JSON[_0x39baea(0x2a2)][_0x39baea(0x345)][_0x39baea(0x364)], config_JSON[_0x39baea(0x2a2)][_0x39baea(0x345)]['指定端口']))[0x1];
                                                        return new Response(_0x1e9bf9, {
                                                            'status': 0xc8,
                                                            'headers': {
                                                                'Content-Type': _0x39baea(0x569),
                                                                'asn': request['cf']['asn']
                                                            }
                                                        });
                                                    } else {
                                                        if (_0x35f61f === _0x39baea(0x1e6))
                                                            return new Response(JSON[_0x39baea(0x510)](request?.['cf'] || {}, null, 0x2), {
                                                                'status': 0xc8,
                                                                'headers': { 'Content-Type': 'application/json;charset=utf-8' }
                                                            });
                                                    }
                                                }
                                            }
                                        }
                                        return ctx['waitUntil'](请求日志记录(env, request, _0x377093, _0x39baea(0x3a4), config_JSON)), fetch(Pages静态页面 + _0x39baea(0x685) + _0x13c990[_0x39baea(0x3f0)]);
                                    } else {
                                        if (_0x35f61f === _0x39baea(0x2d3) || _0x3f33b0[_0x39baea(0x247)](_0x35f61f)) {
                                            const _0x22568a = new Response('重定向中...', {
                                                'status': 0x12e,
                                                'headers': { 'Location': _0x39baea(0x3db) }
                                            });
                                            return _0x22568a[_0x39baea(0x3b9)][_0x39baea(0x1f2)]('Set-Cookie', _0x39baea(0x3be)), _0x22568a;
                                        } else {
                                            if (_0x35f61f === _0x39baea(0x3cf)) {
                                                const _0x8cc426 = await MD5MD5(_0x19ba04 + _0x53fad7), _0xac1670 = [
                                                        '1',
                                                        _0x39baea(0x3dd)
                                                    ][_0x39baea(0x68e)](env[_0x39baea(0x60d)]) && _0x13c990[_0x39baea(0x598)][_0x39baea(0x257)](_0x39baea(0x606)) === 'example.com' && _0x13c990['searchParams'][_0x39baea(0x257)](_0x39baea(0x1b4)) === _0x39baea(0x3b3) && _0x28aff8[_0x39baea(0x486)]()['includes'](_0x39baea(0x476) + 特征码字典[0x1] + '/edge'), _0xa58fe8 = _0x13c990['searchParams'][_0x39baea(0x257)](_0x39baea(0x6a3)), _0x4e27a8 = _0xa58fe8 === _0x8cc426, _0x3285a4 = Math[_0x39baea(0x2eb)](Date[_0x39baea(0x1e0)]() / 0x5265c00), _0x4ca126 = base64SecretEncode(_0x8cc426, _0x53fad7), [_0x49e480, _0x27e560] = await Promise[_0x39baea(0x369)]([
                                                        MD5MD5(_0x4ca126 + _0x3285a4),
                                                        MD5MD5(_0x4ca126 + (_0x3285a4 - 0x1))
                                                    ]), _0x36f173 = _0xa58fe8 === _0x49e480 || _0xa58fe8 === _0x27e560;
                                                if (_0x4e27a8 || _0x36f173 || _0xac1670) {
                                                    config_JSON = await 读取config_JSON(env, _0x19ba04, _0x53fad7, _0x28aff8);
                                                    if (_0xac1670)
                                                        ctx[_0x39baea(0x5a9)](请求日志记录(env, request, _0x377093, 'Get_Best_SUB', config_JSON, ![]));
                                                    else
                                                        ctx[_0x39baea(0x5a9)](请求日志记录(env, request, _0x377093, _0x39baea(0x3fe), config_JSON));
                                                    const _0x2b9be2 = _0x28aff8[_0x39baea(0x486)](), _0x4f78df = {
                                                            'content-type': _0x39baea(0x467),
                                                            'Profile-Update-Interval': config_JSON[_0x39baea(0x2a2)][_0x39baea(0x525)],
                                                            'Profile-web-page-url': _0x13c990[_0x39baea(0x4a7)] + '//' + _0x13c990['host'] + '/admin',
                                                            'Cache-Control': _0x39baea(0x306)
                                                        };
                                                    if (config_JSON['CF']['Usage']['success']) {
                                                        const _0x5dabb2 = config_JSON['CF'][_0x39baea(0x200)][_0x39baea(0x5a3)], _0x288943 = config_JSON['CF'][_0x39baea(0x200)][_0x39baea(0x634)], _0x3493a4 = Number[_0x39baea(0x526)](config_JSON['CF'][_0x39baea(0x200)][_0x39baea(0x209)]) ? config_JSON['CF'][_0x39baea(0x200)]['max'] / 0x3e8 * 0x400 : 0x400 * 0x64;
                                                        _0x4f78df['Subscription-Userinfo'] = _0x39baea(0x47f) + _0x5dabb2 + _0x39baea(0x211) + _0x288943 + ';\x20total=' + _0x3493a4 + _0x39baea(0x5d6);
                                                    }
                                                    const _0x4c696e = _0x13c990[_0x39baea(0x598)][_0x39baea(0x53a)](_0x39baea(0x3da)) || _0x13c990[_0x39baea(0x598)]['has'](_0x39baea(0x558)) || request[_0x39baea(0x3b9)][_0x39baea(0x257)]('subconverter-request') || request['headers']['get'](_0x39baea(0x694)) || _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x33b)) || _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x31c)[_0x39baea(0x486)]()) || _0xac1670, _0x102381 = _0x4c696e ? 'mixed' : _0x13c990['searchParams'][_0x39baea(0x53a)]('target') ? _0x13c990[_0x39baea(0x598)]['get'](_0x39baea(0x423)) : _0x13c990[_0x39baea(0x598)][_0x39baea(0x53a)](_0x39baea(0x1b7)) || _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x1b7)) || _0x2b9be2['includes'](_0x39baea(0x480)) || _0x2b9be2['includes'](_0x39baea(0x2d8)) ? _0x39baea(0x1b7) : _0x13c990[_0x39baea(0x598)][_0x39baea(0x53a)]('sb') || _0x13c990[_0x39baea(0x598)][_0x39baea(0x53a)]('singbox') || _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x4cf)) || _0x2b9be2['includes'](_0x39baea(0x639)) ? _0x39baea(0x4cf) : _0x13c990[_0x39baea(0x598)][_0x39baea(0x53a)](_0x39baea(0x271)) || _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x271)) ? _0x39baea(0x4d8) : _0x13c990['searchParams'][_0x39baea(0x53a)](_0x39baea(0x3df)) || _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x3c7)) ? _0x39baea(0x3df) : _0x13c990['searchParams'][_0x39baea(0x53a)](_0x39baea(0x2d9)) || _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x2d9)) ? _0x39baea(0x2d9) : _0x39baea(0x4ee);
                                                    if (!_0x2b9be2['includes'](_0x39baea(0x268)))
                                                        _0x4f78df[_0x39baea(0x6a6)] = _0x39baea(0x63d) + encodeURIComponent(config_JSON[_0x39baea(0x2a2)]['SUBNAME']);
                                                    const _0x4be408 = (_0x13c990[_0x39baea(0x598)]['has'](_0x39baea(0x271)) || _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x271))) && config_JSON[_0x39baea(0x4ff)] !== 'ss' ? 'tro' + _0x39baea(0x589) : config_JSON[_0x39baea(0x4ff)];
                                                    let _0x2fa897 = '';
                                                    if (_0x102381 === _0x39baea(0x4ee)) {
                                                        const _0xff37cc = config_JSON['TLS分片'] == _0x39baea(0x57a) ? '&fragment=' + encodeURIComponent('1,40-60,30-50,tlshello') : config_JSON[_0x39baea(0x551)] == 'Happ' ? _0x39baea(0x400) + encodeURIComponent(_0x39baea(0x1e4)) : '';
                                                        let _0x186f5f = [], _0x514f5f = '', _0xf6cecc = [];
                                                        if (!_0x13c990['searchParams'][_0x39baea(0x53a)](_0x39baea(0x3cf)) && config_JSON[_0x39baea(0x2a2)][_0x39baea(0x597)]) {
                                                            const _0x5f09bb = config_JSON[_0x39baea(0x2a2)]['本地IP库'][_0x39baea(0x217)] ? (await 生成随机IP(request, config_JSON[_0x39baea(0x2a2)][_0x39baea(0x345)]['随机数量'], config_JSON[_0x39baea(0x2a2)][_0x39baea(0x345)][_0x39baea(0x27b)]))[0x0] : await env['KV'][_0x39baea(0x257)](_0x39baea(0x479)) ? await 整理成数组(await env['KV'][_0x39baea(0x257)](_0x39baea(0x479))) : (await 生成随机IP(request, config_JSON[_0x39baea(0x2a2)][_0x39baea(0x345)]['随机数量'], config_JSON['优选订阅生成']['本地IP库'][_0x39baea(0x27b)]))[0x0], _0x4ac73b = [], _0x3c2e9 = [], _0x26ec8f = [];
                                                            for (const _0x3fee1d of _0x5f09bb) {
                                                                if (_0x3fee1d[_0x39baea(0x486)]()['startsWith'](_0x39baea(0x2cb)))
                                                                    _0x4ac73b[_0x39baea(0x4a8)](_0x3fee1d);
                                                                else {
                                                                    const _0x5289be = _0x3fee1d[_0x39baea(0x413)]('#'), _0x126629 = _0x5289be > -0x1 ? _0x3fee1d[_0x39baea(0x548)](0x0, _0x5289be) : _0x3fee1d, _0x987c61 = _0x5289be > -0x1 ? _0x3fee1d['slice'](_0x5289be) : '', _0x173d53 = _0x3fee1d[_0x39baea(0x5f7)](/sub\s*=\s*([^\s&#]+)/i);
                                                                    if (_0x173d53 && _0x173d53[0x1]['trim']()[_0x39baea(0x68e)]('.')) {
                                                                        const _0x35db8c = _0x3fee1d[_0x39baea(0x486)]()[_0x39baea(0x68e)](_0x39baea(0x2a8));
                                                                        if (_0x35db8c)
                                                                            _0x4ac73b[_0x39baea(0x4a8)](_0x39baea(0x2cb) + _0x173d53[0x1][_0x39baea(0x55a)]() + _0x39baea(0x458) + (_0x3fee1d['includes']('#') ? '#' + _0x3fee1d[_0x39baea(0x492)]('#')[0x1] : ''));
                                                                        else
                                                                            _0x4ac73b[_0x39baea(0x4a8)]('sub://' + _0x173d53[0x1][_0x39baea(0x55a)]() + (_0x3fee1d[_0x39baea(0x68e)]('#') ? '#' + _0x3fee1d[_0x39baea(0x492)]('#')[0x1] : ''));
                                                                    } else {
                                                                        if (_0x126629[_0x39baea(0x486)]()['startsWith'](_0x39baea(0x22a)))
                                                                            _0x4ac73b[_0x39baea(0x4a8)](_0x3fee1d);
                                                                        else {
                                                                            if (_0x126629[_0x39baea(0x486)]()[_0x39baea(0x68e)]('://')) {
                                                                                if (_0x3fee1d[_0x39baea(0x68e)]('#')) {
                                                                                    const _0x334f33 = _0x3fee1d[_0x39baea(0x492)]('#');
                                                                                    _0x26ec8f['push'](_0x334f33[0x0] + '#' + encodeURIComponent(decodeURIComponent(_0x334f33[0x1])));
                                                                                } else
                                                                                    _0x26ec8f[_0x39baea(0x4a8)](_0x3fee1d);
                                                                            } else {
                                                                                if (_0x126629[_0x39baea(0x68e)]('*'))
                                                                                    _0x3c2e9[_0x39baea(0x4a8)](替换星号为随机字符(_0x126629) + _0x987c61);
                                                                                else
                                                                                    _0x3c2e9[_0x39baea(0x4a8)](_0x3fee1d);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            const _0x487778 = await 请求优选API(_0x4ac73b, _0x39baea(0x35a), _0x57fbd7), _0x40ecd5 = [...new Set(_0x26ec8f['concat'](_0x487778[0x1]))];
                                                            _0x514f5f = _0x40ecd5[_0x39baea(0x292)] > 0x0 ? _0x40ecd5[_0x39baea(0x4f1)]('\x0a') + '\x0a' : '';
                                                            const _0x5f1a81 = _0x487778[0x0];
                                                            _0xf6cecc = _0x487778[0x3] || [], _0x186f5f = [...new Set(_0x3c2e9[_0x39baea(0x283)](_0x5f1a81))];
                                                        } else {
                                                            let _0x396b2b = _0x13c990[_0x39baea(0x598)][_0x39baea(0x257)](_0x39baea(0x3cf)) || config_JSON['优选订阅生成'][_0x39baea(0x2e9)];
                                                            const [_0x3ca2bb, _0x3897e0] = await 获取优选订阅生成器数据(_0x396b2b, _0x57fbd7);
                                                            _0x186f5f = _0x186f5f[_0x39baea(0x283)](_0x3ca2bb), _0x514f5f += _0x3897e0;
                                                        }
                                                        const _0x43ce88 = config_JSON[_0x39baea(0x3d3)] ? '&ech=' + encodeURIComponent((config_JSON[_0x39baea(0x3fd)][_0x39baea(0x3ec)] ? config_JSON[_0x39baea(0x3fd)][_0x39baea(0x3ec)] + '+' : '') + config_JSON[_0x39baea(0x3fd)][_0x39baea(0x51a)]) : '', _0xea8783 = _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x2d9)) || _0x2b9be2['includes']('surge'), {
                                                                type: _0x13733c,
                                                                路径字段名: _0x318fa9,
                                                                域名字段名: _0x2cd97e
                                                            } = 获取传输协议配置(config_JSON);
                                                        _0x2fa897 = _0x514f5f + _0x186f5f['map'](_0x4d3b49 => {
                                                            const _0x5aa879 = _0x39baea, _0x2b0b7c = /^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/, _0x35b058 = _0x4d3b49[_0x5aa879(0x5f7)](_0x2b0b7c);
                                                            let _0x1a4a0b, _0x351515 = _0x5aa879(0x35a), _0xa58dde;
                                                            if (_0x35b058)
                                                                _0x1a4a0b = _0x35b058[0x1], _0x351515 = _0x35b058[0x2] ? _0x35b058[0x2] : _0x5aa879(0x35a), _0xa58dde = _0x35b058[0x3] || _0x1a4a0b;
                                                            else
                                                                return console['warn'](_0x5aa879(0x48d) + _0x4d3b49), null;
                                                            let _0x7b96bb = config_JSON[_0x5aa879(0x39c)];
                                                            const _0x5b6f37 = _0xa58dde[_0x5aa879(0x5f7)](/\$(socks5|http|https|turn|sstp):\/\/([^#\s]+)/i);
                                                            if (_0x5b6f37)
                                                                try {
                                                                    const _0x44d44d = _0x5b6f37[0x1]['toLowerCase'](), _0x233d96 = _0x5b6f37[0x2], _0x3b3b42 = {
                                                                            'type': _0x44d44d,
                                                                            ...获取SOCKS5账号(_0x233d96, 获取代理默认端口(_0x44d44d))
                                                                        };
                                                                    _0x7b96bb = _0x5aa879(0x29d) + (base64SecretEncode(JSON[_0x5aa879(0x510)](_0x3b3b42), _0x53fad7) + (config_JSON[_0x5aa879(0x3b6)] ? _0x5aa879(0x2ce) : '')), _0xa58dde = _0xa58dde[_0x5aa879(0x680)](_0x5b6f37[0x0], '')[_0x5aa879(0x55a)]() || _0x1a4a0b;
                                                                } catch (_0x5a7fd2) {
                                                                    console['warn']('[订阅内容]\x20链式代理解析失败，已忽略该指令:\x20' + _0x5b6f37[0x0] + '\x20(' + (_0x5a7fd2 && _0x5a7fd2[_0x5aa879(0x385)] ? _0x5a7fd2[_0x5aa879(0x385)] : _0x5a7fd2) + ')');
                                                                }
                                                            else {
                                                                if (_0xf6cecc[_0x5aa879(0x292)] > 0x0) {
                                                                    const _0x3d92ec = _0xf6cecc[_0x5aa879(0x204)](_0x22d8ed => _0x22d8ed[_0x5aa879(0x68e)](_0x1a4a0b));
                                                                    if (_0x3d92ec)
                                                                        _0x7b96bb = (config_JSON[_0x5aa879(0x2ed)] + '/proxyip=' + _0x3d92ec)['replace'](/\/\//g, '/') + (config_JSON['启用0RTT'] ? _0x5aa879(0x2ce) : '');
                                                                }
                                                            }
                                                            if (_0xea8783)
                                                                _0x7b96bb = _0x7b96bb[_0x5aa879(0x680)](/,/g, _0x5aa879(0x5c7));
                                                            if (_0x4be408 === 'ss' && !_0xac1670) {
                                                                if (!config_JSON['SS'][_0x5aa879(0x600)]) {
                                                                    const _0x354add = [
                                                                            0x1bb,
                                                                            0x805,
                                                                            0x823,
                                                                            0x827,
                                                                            0x830,
                                                                            0x20fb
                                                                        ], _0x5d95c8 = [
                                                                            0x50,
                                                                            0x804,
                                                                            0x822,
                                                                            0x826,
                                                                            0x82f,
                                                                            0x1f90
                                                                        ];
                                                                    _0x351515 = String(_0x5d95c8[_0x354add[_0x5aa879(0x413)](Number(_0x351515))] ?? _0x351515);
                                                                }
                                                                _0x7b96bb = (_0x7b96bb[_0x5aa879(0x68e)]('?') ? _0x7b96bb[_0x5aa879(0x680)]('?', '?enc=' + config_JSON['SS'][_0x5aa879(0x637)] + '&') : _0x7b96bb + _0x5aa879(0x618) + config_JSON['SS'][_0x5aa879(0x637)])[_0x5aa879(0x680)](/([=,])/g, _0x5aa879(0x285));
                                                                if (!_0x4c696e)
                                                                    _0x7b96bb = _0x7b96bb + _0x5aa879(0x311);
                                                                return _0x4be408 + _0x5aa879(0x248) + btoa(config_JSON['SS'][_0x5aa879(0x637)] + ':00000000-0000-4000-8000-000000000000') + '@' + _0x1a4a0b + ':' + _0x351515 + _0x5aa879(0x5ce) + (encodeURIComponent(_0x5aa879(0x220) + (config_JSON[_0x5aa879(0x577)] ? 随机路径(_0x7b96bb) : _0x7b96bb) + (config_JSON['SS'][_0x5aa879(0x600)] ? _0x5aa879(0x4b7) : '')) + _0x43ce88 + _0xff37cc) + '#' + encodeURIComponent(_0xa58dde);
                                                            } else {
                                                                const _0x5b5cd6 = 获取传输路径参数值(config_JSON, _0x7b96bb, _0xac1670);
                                                                return _0x4be408 + _0x5aa879(0x26f) + _0x1a4a0b + ':' + _0x351515 + _0x5aa879(0x4a0) + (_0x13733c + _0x43ce88) + '&' + _0x2cd97e + _0x5aa879(0x515) + config_JSON['Fingerprint'] + _0x5aa879(0x4f7) + _0x318fa9 + '=' + (encodeURIComponent(_0x5b5cd6) + _0xff37cc) + _0x5aa879(0x2c1) + encodeURIComponent(config_JSON[_0x5aa879(0x23f)]) + '#' + encodeURIComponent(_0xa58dde);
                                                            }
                                                        })[_0x39baea(0x216)](_0x40dfd0 => _0x40dfd0 !== null)['join']('\x0a');
                                                    } else {
                                                        const _0x364542 = config_JSON[_0x39baea(0x337)][_0x39baea(0x20f)] + _0x39baea(0x1cd) + _0x102381 + _0x39baea(0x360) + encodeURIComponent(_0x13c990[_0x39baea(0x4a7)] + '//' + _0x13c990['host'] + _0x39baea(0x2db) + _0x49e480 + '&cnIspCode=' + 识别运营商(request) + (_0x13c990[_0x39baea(0x598)][_0x39baea(0x53a)](_0x39baea(0x3cf)) && _0x13c990[_0x39baea(0x598)][_0x39baea(0x257)](_0x39baea(0x3cf)) != '' ? _0x39baea(0x642) + _0x13c990[_0x39baea(0x598)]['get'](_0x39baea(0x3cf)) : '')) + _0x39baea(0x454) + encodeURIComponent(config_JSON['订阅转换配置'][_0x39baea(0x65e)]) + _0x39baea(0x677) + config_JSON[_0x39baea(0x337)][_0x39baea(0x2cf)] + _0x39baea(0x546) + config_JSON[_0x39baea(0x337)][_0x39baea(0x63c)] + _0x39baea(0x24a) + config_JSON[_0x39baea(0x2c6)] + _0x39baea(0x51e) + config_JSON[_0x39baea(0x337)][_0x39baea(0x3fa)] + '&udp=' + config_JSON[_0x39baea(0x337)][_0x39baea(0x4fc)] + _0x39baea(0x353) + config_JSON[_0x39baea(0x337)]['TLS13'] + '&append_type=' + config_JSON[_0x39baea(0x337)][_0x39baea(0x5bd)] + _0x39baea(0x3ad) + config_JSON[_0x39baea(0x337)][_0x39baea(0x32c)] + _0x39baea(0x487) + config_JSON[_0x39baea(0x337)]['EXPAND'];
                                                        try {
                                                            const _0x52eecf = await fetch(_0x364542, { 'headers': { 'User-Agent': _0x39baea(0x3aa) + _0x102381 + '\x20edge' + _0x39baea(0x476) + 特征码字典[0x1] + '/edge' + _0x39baea(0x339) + _0x57fbd7 + '\x20Version/' + EDT_版本号 } });
                                                            if (_0x52eecf['ok']) {
                                                                _0x2fa897 = await _0x52eecf['text']();
                                                                if (_0x13c990[_0x39baea(0x598)][_0x39baea(0x53a)]('surge') || _0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x271)))
                                                                    _0x2fa897 = Surge订阅配置文件热补丁(_0x2fa897, _0x13c990[_0x39baea(0x4a7)] + '//' + _0x13c990[_0x39baea(0x606)] + _0x39baea(0x4eb) + _0x8cc426 + _0x39baea(0x4b3), config_JSON);
                                                            } else
                                                                return new Response(_0x39baea(0x2b3) + _0x52eecf[_0x39baea(0x417)], { 'status': _0x52eecf[_0x39baea(0x3d7)] });
                                                        } catch (_0x32b369) {
                                                            return new Response(_0x39baea(0x2b3) + _0x32b369[_0x39baea(0x385)], { 'status': 0x193 });
                                                        }
                                                    }
                                                    if (!_0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x33b)) && _0x4e27a8) {
                                                        const _0x1728bf = [...config_JSON[_0x39baea(0x498)]][_0x39baea(0x3a3)](() => Math[_0x39baea(0x3eb)]() - 0.5);
                                                        let _0x52a876 = 0x0, _0x3280cf = null;
                                                        _0x2fa897 = _0x2fa897[_0x39baea(0x680)](/00000000-0000-4000-8000-000000000000/g, config_JSON['UUID'])[_0x39baea(0x680)](/MDAwMDAwMDAtMDAwMC00MDAwLTgwMDAtMDAwMDAwMDAwMDAw/g, btoa(config_JSON['UUID']))[_0x39baea(0x680)](/example\.com/g, () => {
                                                            const _0x510fc1 = _0x39baea;
                                                            if (_0x52a876 % 0x2 === 0x0) {
                                                                const _0x52aeee = _0x1728bf[Math['floor'](_0x52a876 / 0x2) % _0x1728bf[_0x510fc1(0x292)]];
                                                                _0x3280cf = 替换星号为随机字符(_0x52aeee);
                                                            }
                                                            return _0x52a876++, _0x3280cf;
                                                        });
                                                    }
                                                    if (_0x102381 === 'mixed' && (!_0x2b9be2[_0x39baea(0x68e)](_0x39baea(0x268)) || _0x13c990['searchParams'][_0x39baea(0x53a)](_0x39baea(0x3da)) || _0x13c990[_0x39baea(0x598)]['has'](_0x39baea(0x558))))
                                                        _0x2fa897 = btoa(_0x2fa897);
                                                    if (_0x102381 === _0x39baea(0x4cf))
                                                        _0x2fa897 = await Singbox订阅配置文件热补丁(_0x2fa897, config_JSON), _0x4f78df[_0x39baea(0x5fb)] = 'application/json;\x20charset=utf-8';
                                                    else
                                                        _0x102381 === 'clash' && (_0x2fa897 = Clash订阅配置文件热补丁(_0x2fa897, config_JSON), _0x4f78df[_0x39baea(0x5fb)] = _0x39baea(0x343));
                                                    return new Response(_0x2fa897, {
                                                        'status': 0xc8,
                                                        'headers': _0x4f78df
                                                    });
                                                }
                                            } else {
                                                if (_0x35f61f === 'locations') {
                                                    const _0x5dbd9e = request[_0x39baea(0x3b9)][_0x39baea(0x257)](_0x39baea(0x253)) || '', _0x42d6b1 = _0x5dbd9e[_0x39baea(0x492)](';')['find'](_0x3ad5aa => _0x3ad5aa['trim']()[_0x39baea(0x661)](_0x39baea(0x3e7)))?.[_0x39baea(0x492)]('=')[0x1];
                                                    if (_0x42d6b1 && _0x42d6b1 == await MD5MD5(_0x28aff8 + _0x140de9 + _0x3f4c06))
                                                        return fetch(new Request(_0x39baea(0x3ee), { 'headers': { 'Referer': _0x39baea(0x378) } }));
                                                } else {
                                                    if (_0x35f61f === _0x39baea(0x1de))
                                                        return new Response(_0x39baea(0x22e), {
                                                            'status': 0xc8,
                                                            'headers': { 'Content-Type': _0x39baea(0x2b4) }
                                                        });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (!_0x932bad)
                                return fetch(Pages静态页面 + '/noKV')[_0x39baea(0x56e)](_0x316374 => {
                                    const _0x20c8fe = _0x39baea, _0x198e6a = new Headers(_0x316374[_0x20c8fe(0x3b9)]);
                                    return _0x198e6a[_0x20c8fe(0x1f2)](_0x20c8fe(0x41f), _0x20c8fe(0x1d3)), _0x198e6a[_0x20c8fe(0x1f2)]('Pragma', _0x20c8fe(0x446)), _0x198e6a[_0x20c8fe(0x1f2)](_0x20c8fe(0x66d), '0'), new Response(_0x316374['body'], {
                                        'status': 0x194,
                                        'statusText': _0x316374[_0x20c8fe(0x417)],
                                        'headers': _0x198e6a
                                    });
                                })[_0x39baea(0x5ec)](() => new Response(_0x39baea(0x607), {
                                    'status': 0x1f4,
                                    'headers': { 'Content-Type': _0x39baea(0x21f) }
                                }));
                        }
                    }
                }
            }
            let _0x540c98 = env[_0x39baea(0x1c9)] || _0x39baea(0x23d);
            if (_0x540c98 && _0x540c98 !== _0x39baea(0x23d) && _0x540c98 !== _0x39baea(0x666)) {
                _0x540c98 = _0x540c98[_0x39baea(0x55a)]()[_0x39baea(0x680)](/\/$/, '');
                if (!_0x540c98[_0x39baea(0x5f7)](/^https?:\/\//i))
                    _0x540c98 = _0x39baea(0x22a) + _0x540c98;
                if (_0x540c98[_0x39baea(0x486)]()[_0x39baea(0x661)](_0x39baea(0x58e)))
                    _0x540c98 = 'https://' + _0x540c98[_0x39baea(0x25d)](0x7);
                try {
                    const _0xc284c6 = new URL(_0x540c98);
                    _0x540c98 = _0xc284c6[_0x39baea(0x4a7)] + '//' + _0xc284c6[_0x39baea(0x606)];
                } catch (_0x13f1a9) {
                    _0x540c98 = _0x39baea(0x23d);
                }
            }
            if (_0x540c98 === _0x39baea(0x666))
                return new Response(await html1101(_0x13c990[_0x39baea(0x606)], _0x377093), {
                    'status': 0xc8,
                    'headers': { 'Content-Type': _0x39baea(0x2cd) }
                });
            try {
                const _0x3d27e9 = new URL(_0x540c98), _0x513981 = new Headers(request[_0x39baea(0x3b9)]);
                _0x513981[_0x39baea(0x1f2)](_0x39baea(0x512), _0x3d27e9[_0x39baea(0x606)]), _0x513981[_0x39baea(0x1f2)](_0x39baea(0x68b), _0x3d27e9[_0x39baea(0x5dc)]), _0x513981['set'](_0x39baea(0x4b2), _0x3d27e9[_0x39baea(0x5dc)]);
                if (!_0x513981[_0x39baea(0x53a)](_0x39baea(0x59c)) && _0x28aff8 && _0x28aff8 !== _0x39baea(0x5dd))
                    _0x513981[_0x39baea(0x1f2)]('User-Agent', _0x28aff8);
                const _0x34aa02 = await fetch(_0x3d27e9[_0x39baea(0x5dc)] + _0x13c990['pathname'] + _0x13c990[_0x39baea(0x3f0)], {
                        'method': request[_0x39baea(0x52d)],
                        'headers': _0x513981,
                        'body': request['body'],
                        'cf': request['cf']
                    }), _0x50627c = _0x34aa02[_0x39baea(0x3b9)][_0x39baea(0x257)](_0x39baea(0x5fb)) || '';
                if (/text|javascript|json|xml/[_0x39baea(0x247)](_0x50627c)) {
                    const _0x223229 = (await _0x34aa02[_0x39baea(0x66c)]())[_0x39baea(0x27f)](_0x3d27e9[_0x39baea(0x606)], _0x13c990['host']);
                    return new Response(_0x223229, {
                        'status': _0x34aa02[_0x39baea(0x3d7)],
                        'headers': {
                            ...Object[_0x39baea(0x381)](_0x34aa02[_0x39baea(0x3b9)]),
                            'Cache-Control': _0x39baea(0x306)
                        }
                    });
                }
                return _0x34aa02;
            } catch (_0x52bbc4) {
            }
            return new Response(await nginx(), {
                'status': 0xc8,
                'headers': { 'Content-Type': _0x39baea(0x2cd) }
            });
        } catch (_0x552ed0) {
            return new Response(_0x39baea(0x523) + (_0x552ed0?.[_0x39baea(0x24f)] || _0x552ed0?.[_0x39baea(0x385)] || _0x552ed0), {
                'status': 0x1f4,
                'headers': { 'Content-Type': 'text/plain;charset=utf-8' }
            });
        }
    }
};
const HPACKHuffman码长 = [
    0xd,
    0x17,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x18,
    0x1e,
    0x1c,
    0x1c,
    0x1e,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1e,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x1c,
    0x6,
    0xa,
    0xa,
    0xc,
    0xd,
    0x6,
    0x8,
    0xb,
    0xa,
    0xa,
    0x8,
    0xb,
    0x8,
    0x6,
    0x6,
    0x6,
    0x5,
    0x5,
    0x5,
    0x6,
    0x6,
    0x6,
    0x6,
    0x6,
    0x6,
    0x6,
    0x7,
    0x8,
    0xf,
    0x6,
    0xc,
    0xa,
    0xd,
    0x6,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0x8,
    0x7,
    0x8,
    0xd,
    0x13,
    0xd,
    0xe,
    0x6,
    0xf,
    0x5,
    0x6,
    0x5,
    0x6,
    0x5,
    0x6,
    0x6,
    0x6,
    0x5,
    0x7,
    0x7,
    0x6,
    0x6,
    0x6,
    0x5,
    0x6,
    0x7,
    0x6,
    0x5,
    0x5,
    0x6,
    0x7,
    0x7,
    0x7,
    0x7,
    0x7,
    0xf,
    0xb,
    0xe,
    0xd,
    0x1c,
    0x14,
    0x16,
    0x14,
    0x14,
    0x16,
    0x16,
    0x16,
    0x17,
    0x16,
    0x17,
    0x17,
    0x17,
    0x17,
    0x17,
    0x18,
    0x17,
    0x18,
    0x18,
    0x16,
    0x17,
    0x18,
    0x17,
    0x17,
    0x17,
    0x17,
    0x15,
    0x16,
    0x17,
    0x16,
    0x17,
    0x17,
    0x18,
    0x16,
    0x15,
    0x14,
    0x16,
    0x16,
    0x17,
    0x17,
    0x15,
    0x17,
    0x16,
    0x16,
    0x18,
    0x15,
    0x16,
    0x17,
    0x17,
    0x15,
    0x15,
    0x16,
    0x15,
    0x17,
    0x16,
    0x17,
    0x17,
    0x14,
    0x16,
    0x16,
    0x16,
    0x17,
    0x16,
    0x16,
    0x17,
    0x1a,
    0x1a,
    0x14,
    0x13,
    0x16,
    0x17,
    0x16,
    0x19,
    0x1a,
    0x1a,
    0x1a,
    0x1b,
    0x1b,
    0x1a,
    0x18,
    0x19,
    0x13,
    0x15,
    0x1a,
    0x1b,
    0x1b,
    0x1a,
    0x1b,
    0x18,
    0x15,
    0x15,
    0x1a,
    0x1a,
    0x1c,
    0x1b,
    0x1b,
    0x1b,
    0x14,
    0x18,
    0x14,
    0x15,
    0x16,
    0x15,
    0x15,
    0x17,
    0x16,
    0x16,
    0x19,
    0x19,
    0x18,
    0x18,
    0x1a,
    0x17,
    0x1a,
    0x1b,
    0x1a,
    0x1a,
    0x1b,
    0x1b,
    0x1b,
    0x1b,
    0x1b,
    0x1c,
    0x1b,
    0x1b,
    0x1b,
    0x1b,
    0x1b,
    0x1a,
    0x1e
];
function 获取本机标识(_0x343511) {
    const _0x208a04 = a0_0x43d2af;
    return [
        _0x343511[_0x208a04(0x548)](0x1, 0x7),
        '_' + _0x343511['slice'](0x19, 0x1f)
    ];
}
function 计算HPACKHuffman字节长度(_0x39758c) {
    const _0x4a6346 = a0_0x43d2af, _0x2eed68 = new TextEncoder()[_0x4a6346(0x564)](_0x39758c);
    let _0x4651f6 = 0x0;
    for (let _0x220700 = 0x0; _0x220700 < _0x2eed68[_0x4a6346(0x292)]; _0x220700++) {
        _0x4651f6 += HPACKHuffman码长[_0x2eed68[_0x220700]];
    }
    return Math[_0x4a6346(0x554)](_0x4651f6 / 0x8);
}
function 提取叉HTTPPadding值(request, _0x38c9f4, _0x21bfe0) {
    const _0x4a52b7 = a0_0x43d2af, _0x332b22 = request['headers'][_0x4a52b7(0x257)](_0x38c9f4);
    if (_0x332b22) {
        try {
            const _0xf3b99d = new URL(_0x332b22, _0x4a52b7(0x612)), _0x15c680 = _0xf3b99d[_0x4a52b7(0x598)]['get'](_0x21bfe0);
            if (_0x15c680)
                return _0x15c680;
        } catch (_0x344095) {
        }
        return _0x332b22;
    }
    const _0x48cf1a = new URL(request[_0x4a52b7(0x25a)]);
    return _0x48cf1a[_0x4a52b7(0x598)][_0x4a52b7(0x257)](_0x21bfe0) || '';
}
function 校验叉HTTPPadding(request, _0x10b4ab, _0x4b1f37) {
    const _0x3cd148 = 提取叉HTTPPadding值(request, _0x10b4ab, _0x4b1f37);
    if (!_0x3cd148)
        return !![];
    const _0x4e00ae = 计算HPACKHuffman字节长度(_0x3cd148);
    return _0x4e00ae >= 0x62 && _0x4e00ae <= 0x3ea;
}
const 叉HTTPBase62字符集 = a0_0x43d2af(0x4ca);
function 生成叉HTTPPadding串(_0x4aef99) {
    const _0x506630 = a0_0x43d2af, _0xbdf1f5 = 叉HTTPBase62字符集[_0x506630(0x292)];
    let _0x5aa7c4 = '';
    for (let _0x3ecdb3 = 0x0; _0x3ecdb3 < _0x4aef99; _0x3ecdb3++) {
        _0x5aa7c4 += 叉HTTPBase62字符集[Math[_0x506630(0x2eb)](Math[_0x506630(0x3eb)]() * _0xbdf1f5)];
    }
    return _0x5aa7c4;
}
async function 处理叉HTTP请求(request, _0x232f33, _0x58a498 = {}) {
    const _0x125586 = a0_0x43d2af;
    if (!request[_0x125586(0x3ff)])
        return new Response(_0x125586(0x222), { 'status': 0x190 });
    const [_0x516546, _0x49b6ec] = 获取本机标识(_0x232f33);
    if (!校验叉HTTPPadding(request, _0x516546, _0x49b6ec))
        return new Response(_0x125586(0x222), { 'status': 0x190 });
    const _0x3b4eda = request['body'][_0x125586(0x22c)](), _0xeb2c08 = await 读取叉HTTP首包(_0x3b4eda, _0x232f33);
    if (!_0xeb2c08) {
        try {
            _0x3b4eda[_0x125586(0x1d5)]();
        } catch (_0x1f522b) {
        }
        return new Response('Invalid\x20request', { 'status': 0x190 });
    }
    if (isSpeedTestSite(_0xeb2c08['hostname']) && _0x58a498[_0x125586(0x2af)] === null) {
        try {
            _0x3b4eda[_0x125586(0x1d5)]();
        } catch (_0x5981c0) {
        }
        return new Response(构造本地204响应(_0xeb2c08[_0x125586(0x31f)]), {
            'status': 0xc8,
            'headers': {
                'Content-Type': _0x125586(0x462),
                'X-Accel-Buffering': 'no',
                'Cache-Control': _0x125586(0x306)
            }
        });
    }
    if (_0xeb2c08['isUDP'] && _0xeb2c08['协议'] !== 'trojan' && _0xeb2c08[_0x125586(0x4bb)] !== 0x35) {
        try {
            _0x3b4eda[_0x125586(0x1d5)]();
        } catch (_0x42f39a) {
        }
        return new Response(_0x125586(0x3c1), { 'status': 0x190 });
    }
    const _0x49ea30 = new Headers({
        'Content-Type': 'application/octet-stream',
        'X-Accel-Buffering': 'no',
        'Cache-Control': _0x125586(0x306)
    });
    try {
        const _0x2ff502 = new URL('https://x.invalid/');
        _0x2ff502[_0x125586(0x598)][_0x125586(0x1f2)](_0x49b6ec, 生成叉HTTPPadding串(0x64 + Math[_0x125586(0x2eb)](Math[_0x125586(0x3eb)]() * 0x385))), _0x49ea30[_0x125586(0x1f2)](_0x516546, _0x2ff502[_0x125586(0x592)]());
    } catch (_0x1cf561) {
    }
    if (_0xeb2c08[_0x125586(0x30a)])
        return 处理叉HTTPUDP请求(_0xeb2c08, _0x3b4eda, request, _0x58a498, _0x49ea30);
    try {
        _0x3b4eda[_0x125586(0x1d5)]();
    } catch (_0x180381) {
    }
    const _0xc51e42 = {
            'socket': null,
            'connectingPromise': null,
            'retryConnect': null,
            'downlinkDrain': Promise[_0x125586(0x58b)]()
        }, _0x42e552 = new AbortController();
    let _0x3c36a0 = ![];
    const _0x3d480c = _0x3a02b6 => {
            const _0x5ebc07 = _0x125586;
            if (_0x3c36a0)
                return;
            _0x3c36a0 = !![];
            try {
                _0x42e552[_0x5ebc07(0x38c)](_0x3a02b6);
            } catch (_0x395b96) {
            }
            失效TCP连接世代(_0xc51e42);
        }, _0x106789 = { 'readyState': WebSocket[_0x125586(0x63f)] };
    let _0x4f5aae;
    try {
        _0x4f5aae = await forwardataTCP(_0xeb2c08[_0x125586(0x5ac)], _0xeb2c08[_0x125586(0x4bb)], _0xeb2c08[_0x125586(0x2c9)], _0x106789, _0xeb2c08['respHeader'], _0xc51e42, _0x232f33, request, _0x58a498, _0xeb2c08['协议'] === _0x125586(0x2a6), _0xeb2c08['原始数据'], !![]);
    } catch (_0x3c232e) {
        return log(_0x125586(0x699) + (_0x3c232e?.[_0x125586(0x385)] || _0x3c232e)), _0x3d480c(_0x3c232e), new Response(_0x125586(0x3dc), { 'status': 0x1f6 });
    }
    if (!_0x4f5aae)
        return _0x3d480c(new Error(_0x125586(0x676))), new Response(_0x125586(0x3dc), { 'status': 0x1f6 });
    const _0x476040 = ((async () => {
            const _0x4a953c = _0x125586, _0x12e465 = 创建上行Grain合包流(), _0x15c123 = _0x12e465[_0x4a953c(0x416)][_0x4a953c(0x4c1)](_0x4f5aae[_0x4a953c(0x5ab)], { 'signal': _0x42e552[_0x4a953c(0x4d1)] });
            void _0x15c123[_0x4a953c(0x5ec)](_0x3d480c);
            const _0x2c612c = request['body'][_0x4a953c(0x22c)](), _0x44301a = () => {
                    const _0x224c6a = _0x4a953c;
                    try {
                        _0x2c612c['cancel'](_0x42e552[_0x224c6a(0x4d1)][_0x224c6a(0x520)])['catch'](() => {
                        });
                    } catch (_0x1fca3f) {
                    }
                };
            _0x42e552[_0x4a953c(0x4d1)][_0x4a953c(0x571)](_0x4a953c(0x38c), _0x44301a, { 'once': !![] });
            try {
                try {
                    while (!![]) {
                        const {
                            done: _0x409420,
                            value: _0x5979b5
                        } = await _0x2c612c[_0x4a953c(0x1e7)]();
                        if (_0x409420)
                            break;
                        if (_0x5979b5?.[_0x4a953c(0x574)])
                            await _0x12e465['写入'](_0x5979b5);
                    }
                } finally {
                    _0x42e552['signal'][_0x4a953c(0x318)](_0x4a953c(0x38c), _0x44301a);
                    try {
                        _0x2c612c[_0x4a953c(0x1d5)]();
                    } catch (_0x3a4142) {
                    }
                }
            } finally {
                try {
                    await _0x12e465['结束']();
                } catch (_0x3c17ae) {
                }
            }
            await _0x15c123;
        })()), _0x54d56b = typeof IdentityTransformStream !== _0x125586(0x4f2) ? new IdentityTransformStream() : new TransformStream(), _0x6bcfdc = ((async () => {
            const _0x2d6de9 = _0x125586, _0x3b1dd7 = _0x54d56b[_0x2d6de9(0x5ab)][_0x2d6de9(0x50b)]();
            try {
                if (有效数据长度(_0xeb2c08[_0x2d6de9(0x31f)]) > 0x0)
                    await _0x3b1dd7[_0x2d6de9(0x668)](_0xeb2c08[_0x2d6de9(0x31f)]);
            } catch (_0x6cb76e) {
                try {
                    await _0x3b1dd7['abort'](_0x6cb76e);
                } catch (_0x4ac0b2) {
                }
                throw _0x6cb76e;
            } finally {
                try {
                    _0x3b1dd7[_0x2d6de9(0x1d5)]();
                } catch (_0x4b619c) {
                }
            }
            await _0x4f5aae['readable'][_0x2d6de9(0x4c1)](_0x54d56b[_0x2d6de9(0x5ab)], { 'signal': _0x42e552[_0x2d6de9(0x4d1)] });
        })());
    return void _0x476040[_0x125586(0x5ec)](_0x3d480c), void _0x6bcfdc[_0x125586(0x56e)](() => _0x3d480c(), _0x3d480c), void Promise['allSettled']([
        _0x476040,
        _0x6bcfdc
    ]), new Response(_0x54d56b['readable'], {
        'status': 0xc8,
        'headers': _0x49ea30
    });
}
function 处理叉HTTPUDP请求(_0x17cce6, _0x2fecf1, request, _0x481d07, _0x47ffb3) {
    const _0x452684 = a0_0x43d2af, _0x144301 = {
            '缓存': new Uint8Array(0x0),
            '反代地址': _0x481d07[_0x452684(0x3a2)]
        };
    return new Response(new ReadableStream({
        async 'start'(_0xa74890) {
            const _0x5d6b2d = _0x452684;
            let _0x377086 = ![], _0x3fd9e9 = _0x17cce6[_0x5d6b2d(0x31f)];
            const _0x2be292 = {
                'readyState': WebSocket[_0x5d6b2d(0x63f)],
                'send'(_0x1f03e0) {
                    const _0x264d6d = _0x5d6b2d;
                    if (_0x377086)
                        return;
                    try {
                        const _0x43259e = _0x1f03e0 instanceof Uint8Array ? _0x1f03e0 : _0x1f03e0 instanceof ArrayBuffer ? new Uint8Array(_0x1f03e0) : ArrayBuffer[_0x264d6d(0x2b5)](_0x1f03e0) ? new Uint8Array(_0x1f03e0[_0x264d6d(0x565)], _0x1f03e0['byteOffset'], _0x1f03e0['byteLength']) : new Uint8Array(_0x1f03e0);
                        _0xa74890[_0x264d6d(0x55f)](_0x43259e);
                    } catch (_0x81777f) {
                        _0x377086 = !![], this[_0x264d6d(0x1f7)] = WebSocket[_0x264d6d(0x38b)];
                    }
                },
                'close'() {
                    const _0x124cb1 = _0x5d6b2d;
                    if (_0x377086)
                        return;
                    _0x377086 = !![], this['readyState'] = WebSocket[_0x124cb1(0x38b)];
                    try {
                        _0xa74890[_0x124cb1(0x418)]();
                    } catch (_0xff579e) {
                    }
                }
            };
            let _0x42aa17 = ![];
            try {
                if (_0x17cce6['协议'] === _0x5d6b2d(0x2a6)) {
                    _0x144301[_0x5d6b2d(0x384)] = _0x17cce6[_0x5d6b2d(0x5ac)], _0x144301[_0x5d6b2d(0x517)] = _0x17cce6[_0x5d6b2d(0x4bb)];
                    if (_0x144301[_0x5d6b2d(0x3a5)])
                        await 转发木马UDP数据(_0x17cce6[_0x5d6b2d(0x57c)], _0x2be292, _0x144301, request);
                }
                if (!(_0x17cce6['协议'] === _0x5d6b2d(0x2a6) && _0x144301[_0x5d6b2d(0x3a5)]) && _0x17cce6[_0x5d6b2d(0x2c9)]?.['byteLength']) {
                    if (_0x17cce6['协议'] === _0x5d6b2d(0x2a6))
                        await 转发木马UDP数据(_0x17cce6['rawData'], _0x2be292, _0x144301, request);
                    else
                        await forwardataudp(_0x17cce6[_0x5d6b2d(0x2c9)], _0x2be292, _0x3fd9e9, request);
                    _0x3fd9e9 = null;
                }
                while (!![]) {
                    const {
                        done: _0x4b9519,
                        value: _0x4a79b0
                    } = await _0x2fecf1[_0x5d6b2d(0x1e7)]();
                    if (_0x4b9519)
                        break;
                    if (!_0x4a79b0 || _0x4a79b0[_0x5d6b2d(0x574)] === 0x0)
                        continue;
                    if (_0x17cce6['协议'] === _0x5d6b2d(0x2a6))
                        await 转发木马UDP数据(_0x4a79b0, _0x2be292, _0x144301, request);
                    else
                        await forwardataudp(_0x4a79b0, _0x2be292, _0x3fd9e9, request);
                    _0x3fd9e9 = null;
                }
            } catch (_0x200b36) {
                _0x42aa17 = !![], log(_0x5d6b2d(0x240) + (_0x200b36?.['message'] || _0x200b36)), closeSocketQuietly(_0x2be292);
            } finally {
                const _0xb8538f = !_0x42aa17 && _0x17cce6['协议'] === _0x5d6b2d(0x2a6) && _0x144301[_0x5d6b2d(0x3a5)] && _0x144301[_0x5d6b2d(0x522)];
                if (!_0xb8538f) {
                    try {
                        _0x144301[_0x5d6b2d(0x522)]?.[_0x5d6b2d(0x418)]();
                    } catch (_0x3781c5) {
                    }
                    closeSocketQuietly(_0x2be292);
                }
                try {
                    _0x2fecf1['releaseLock']();
                } catch (_0x56b616) {
                }
            }
        },
        'cancel'() {
            const _0x19acab = _0x452684;
            try {
                _0x144301[_0x19acab(0x522)]?.[_0x19acab(0x418)]();
            } catch (_0xcb60c3) {
            }
            try {
                _0x2fecf1['releaseLock']();
            } catch (_0x3a3d7a) {
            }
        }
    }), {
        'status': 0xc8,
        'headers': _0x47ffb3
    });
}
function 有效数据长度(_0x23e155) {
    const _0x4a0538 = a0_0x43d2af;
    if (!_0x23e155)
        return 0x0;
    if (typeof _0x23e155[_0x4a0538(0x574)] === _0x4a0538(0x689))
        return _0x23e155[_0x4a0538(0x574)];
    if (typeof _0x23e155[_0x4a0538(0x292)] === _0x4a0538(0x689))
        return _0x23e155[_0x4a0538(0x292)];
    return 0x0;
}
function 失效TCP连接世代(_0x54cff1) {
    const _0x63e24d = a0_0x43d2af;
    if (!_0x54cff1)
        return;
    _0x54cff1['generation'] = (Number[_0x63e24d(0x32d)](_0x54cff1['generation']) ? _0x54cff1[_0x63e24d(0x3b7)] : 0x0) + 0x1;
    const _0x2b4abc = _0x54cff1[_0x63e24d(0x67b)];
    _0x54cff1[_0x63e24d(0x67b)] = null, _0x54cff1[_0x63e24d(0x49b)] = null, _0x54cff1[_0x63e24d(0x5f1)] = Promise[_0x63e24d(0x58b)]();
    try {
        _0x2b4abc?.['close']?.();
    } catch (_0x2677f5) {
    }
}
function 开始TCP连接世代(_0x350454) {
    const _0x297f09 = a0_0x43d2af;
    if (!Number[_0x297f09(0x32d)](_0x350454[_0x297f09(0x3b7)]))
        _0x350454[_0x297f09(0x3b7)] = 0x0;
    const _0x29dc8b = ++_0x350454['generation'], _0x2bf43d = _0x350454[_0x297f09(0x67b)];
    _0x350454[_0x297f09(0x67b)] = null;
    const _0xeb04fe = _0x350454[_0x297f09(0x49b)];
    _0x350454[_0x297f09(0x49b)] = null;
    const _0x54c24e = _0x350454[_0x297f09(0x5f1)] || Promise[_0x297f09(0x58b)]();
    let _0x47a49e;
    try {
        _0x47a49e = _0xeb04fe?.[_0x297f09(0x45c)]?.() || Promise[_0x297f09(0x58b)]();
    } catch (_0x32ec2c) {
        _0x47a49e = Promise[_0x297f09(0x349)](_0x32ec2c);
    }
    const _0x556941 = Promise['all']([
        _0x54c24e,
        _0x47a49e
    ]);
    _0x556941[_0x297f09(0x5ec)](() => {
    }), _0x350454[_0x297f09(0x5f1)] = _0x556941;
    try {
        _0x2bf43d?.['close']?.();
    } catch (_0x3e9ef3) {
    }
    return {
        'generation': _0x29dc8b,
        'downlinkDrain': _0x556941
    };
}
async function 读取叉HTTP首包(_0x53e055, _0x7ba4cb) {
    const _0xbf3da9 = a0_0x43d2af, _0x3c5104 = 魏烈思文本解码器, _0x392142 = _0xc70fb4 => {
            const _0x1d4db0 = a0_0x5eca, _0x46eaee = _0xc70fb4[_0x1d4db0(0x574)];
            if (_0x46eaee < 0x12)
                return { '状态': _0x1d4db0(0x256) };
            if (!UUID字节匹配(_0xc70fb4, 0x1, _0x7ba4cb))
                return { '状态': _0x1d4db0(0x59b) };
            const _0x830942 = _0xc70fb4[0x11], _0x16cafe = 0x12 + _0x830942;
            if (_0x46eaee < _0x16cafe + 0x1)
                return { '状态': _0x1d4db0(0x256) };
            const _0x92a749 = _0xc70fb4[_0x16cafe];
            if (_0x92a749 !== 0x1 && _0x92a749 !== 0x2)
                return { '状态': _0x1d4db0(0x59b) };
            const _0x3f39a3 = _0x16cafe + 0x1;
            if (_0x46eaee < _0x3f39a3 + 0x3)
                return { '状态': _0x1d4db0(0x256) };
            const _0x5473ed = _0xc70fb4[_0x3f39a3] << 0x8 | _0xc70fb4[_0x3f39a3 + 0x1], _0x1c5932 = _0xc70fb4[_0x3f39a3 + 0x2], _0x48bc5b = _0x3f39a3 + 0x3;
            let _0x29ad77 = -0x1, _0x2b7585 = '';
            if (_0x1c5932 === 0x1) {
                if (_0x46eaee < _0x48bc5b + 0x4)
                    return { '状态': _0x1d4db0(0x256) };
                _0x2b7585 = _0xc70fb4[_0x48bc5b] + '.' + _0xc70fb4[_0x48bc5b + 0x1] + '.' + _0xc70fb4[_0x48bc5b + 0x2] + '.' + _0xc70fb4[_0x48bc5b + 0x3], _0x29ad77 = _0x48bc5b + 0x4;
            } else {
                if (_0x1c5932 === 0x2) {
                    if (_0x46eaee < _0x48bc5b + 0x1)
                        return { '状态': 'need_more' };
                    const _0x5dfcf6 = _0xc70fb4[_0x48bc5b];
                    if (_0x46eaee < _0x48bc5b + 0x1 + _0x5dfcf6)
                        return { '状态': _0x1d4db0(0x256) };
                    _0x2b7585 = _0x3c5104[_0x1d4db0(0x49a)](_0xc70fb4[_0x1d4db0(0x68d)](_0x48bc5b + 0x1, _0x48bc5b + 0x1 + _0x5dfcf6)), _0x29ad77 = _0x48bc5b + 0x1 + _0x5dfcf6;
                } else {
                    if (_0x1c5932 === 0x3) {
                        if (_0x46eaee < _0x48bc5b + 0x10)
                            return { '状态': _0x1d4db0(0x256) };
                        const _0xa5fb79 = [];
                        for (let _0x3e5eaa = 0x0; _0x3e5eaa < 0x8; _0x3e5eaa++) {
                            const _0x5cc1b3 = _0x48bc5b + _0x3e5eaa * 0x2;
                            _0xa5fb79['push']((_0xc70fb4[_0x5cc1b3] << 0x8 | _0xc70fb4[_0x5cc1b3 + 0x1])['toString'](0x10));
                        }
                        _0x2b7585 = _0xa5fb79[_0x1d4db0(0x4f1)](':'), _0x29ad77 = _0x48bc5b + 0x10;
                    } else
                        return { '状态': _0x1d4db0(0x59b) };
                }
            }
            if (!_0x2b7585)
                return { '状态': 'invalid' };
            return {
                '状态': 'ok',
                '结果': {
                    '协议': 'vl' + _0x1d4db0(0x5c3),
                    'hostname': _0x2b7585,
                    'port': _0x5473ed,
                    'isUDP': _0x92a749 === 0x2,
                    'rawData': _0xc70fb4[_0x1d4db0(0x68d)](_0x29ad77),
                    'respHeader': new Uint8Array([
                        _0xc70fb4[0x0],
                        0x0
                    ]),
                    '原始数据': null
                }
            };
        }, _0x43c547 = _0x115dff => {
            const _0x456eb2 = a0_0x5eca, _0x1e9c1b = sha224(_0x7ba4cb), _0x1b3ad8 = new TextEncoder()['encode'](_0x1e9c1b), _0x6ca092 = _0x115dff[_0x456eb2(0x574)];
            if (_0x6ca092 < 0x3a)
                return { '状态': 'need_more' };
            if (_0x115dff[0x38] !== 0xd || _0x115dff[0x39] !== 0xa)
                return { '状态': _0x456eb2(0x59b) };
            for (let _0x5f164a = 0x0; _0x5f164a < 0x38; _0x5f164a++) {
                if (_0x115dff[_0x5f164a] !== _0x1b3ad8[_0x5f164a])
                    return { '状态': _0x456eb2(0x59b) };
            }
            const _0x3b1e84 = 0x3a;
            if (_0x6ca092 < _0x3b1e84 + 0x2)
                return { '状态': 'need_more' };
            const _0x4c455f = _0x115dff[_0x3b1e84];
            if (_0x4c455f !== 0x1 && _0x4c455f !== 0x3)
                return { '状态': _0x456eb2(0x59b) };
            const _0x2f1b10 = _0x4c455f === 0x3, _0x184c6b = _0x115dff[_0x3b1e84 + 0x1];
            let _0x217a83 = _0x3b1e84 + 0x2, _0x4cf062 = '';
            if (_0x184c6b === 0x1) {
                if (_0x6ca092 < _0x217a83 + 0x4)
                    return { '状态': 'need_more' };
                _0x4cf062 = _0x115dff[_0x217a83] + '.' + _0x115dff[_0x217a83 + 0x1] + '.' + _0x115dff[_0x217a83 + 0x2] + '.' + _0x115dff[_0x217a83 + 0x3], _0x217a83 += 0x4;
            } else {
                if (_0x184c6b === 0x3) {
                    if (_0x6ca092 < _0x217a83 + 0x1)
                        return { '状态': 'need_more' };
                    const _0x57427a = _0x115dff[_0x217a83];
                    if (_0x6ca092 < _0x217a83 + 0x1 + _0x57427a)
                        return { '状态': _0x456eb2(0x256) };
                    _0x4cf062 = _0x3c5104[_0x456eb2(0x49a)](_0x115dff[_0x456eb2(0x68d)](_0x217a83 + 0x1, _0x217a83 + 0x1 + _0x57427a)), _0x217a83 += 0x1 + _0x57427a;
                } else {
                    if (_0x184c6b === 0x4) {
                        if (_0x6ca092 < _0x217a83 + 0x10)
                            return { '状态': _0x456eb2(0x256) };
                        const _0x3f30ef = [];
                        for (let _0x4fd6a9 = 0x0; _0x4fd6a9 < 0x8; _0x4fd6a9++) {
                            const _0x1a4e2a = _0x217a83 + _0x4fd6a9 * 0x2;
                            _0x3f30ef[_0x456eb2(0x4a8)]((_0x115dff[_0x1a4e2a] << 0x8 | _0x115dff[_0x1a4e2a + 0x1])[_0x456eb2(0x592)](0x10));
                        }
                        _0x4cf062 = _0x3f30ef[_0x456eb2(0x4f1)](':'), _0x217a83 += 0x10;
                    } else
                        return { '状态': _0x456eb2(0x59b) };
                }
            }
            if (!_0x4cf062)
                return { '状态': _0x456eb2(0x59b) };
            if (_0x6ca092 < _0x217a83 + 0x4)
                return { '状态': _0x456eb2(0x256) };
            const _0x55e6cf = _0x115dff[_0x217a83] << 0x8 | _0x115dff[_0x217a83 + 0x1];
            if (_0x115dff[_0x217a83 + 0x2] !== 0xd || _0x115dff[_0x217a83 + 0x3] !== 0xa)
                return { '状态': _0x456eb2(0x59b) };
            const _0x1fd65a = _0x217a83 + 0x4;
            return {
                '状态': 'ok',
                '结果': {
                    '协议': _0x456eb2(0x2a6),
                    'hostname': _0x4cf062,
                    'port': _0x55e6cf,
                    'isUDP': _0x2f1b10,
                    'rawData': _0x115dff['subarray'](_0x1fd65a),
                    '原始数据': _0x115dff,
                    'respHeader': null
                }
            };
        };
    let _0x1109d4 = new Uint8Array(0x400), _0x4c1f2e = 0x0;
    while (!![]) {
        const {
            value: _0x57e296,
            done: _0x3f4d86
        } = await _0x53e055[_0xbf3da9(0x1e7)]();
        if (_0x3f4d86) {
            if (_0x4c1f2e === 0x0)
                return null;
            break;
        }
        const _0x45994c = _0x57e296 instanceof Uint8Array ? _0x57e296 : new Uint8Array(_0x57e296);
        if (_0x4c1f2e + _0x45994c[_0xbf3da9(0x574)] > _0x1109d4[_0xbf3da9(0x574)]) {
            const _0x4361e9 = new Uint8Array(Math[_0xbf3da9(0x209)](_0x1109d4['byteLength'] * 0x2, _0x4c1f2e + _0x45994c[_0xbf3da9(0x574)]));
            _0x4361e9[_0xbf3da9(0x1f2)](_0x1109d4['subarray'](0x0, _0x4c1f2e)), _0x1109d4 = _0x4361e9;
        }
        _0x1109d4['set'](_0x45994c, _0x4c1f2e), _0x4c1f2e += _0x45994c[_0xbf3da9(0x574)];
        const _0x182030 = _0x1109d4[_0xbf3da9(0x68d)](0x0, _0x4c1f2e), _0x460fef = _0x43c547(_0x182030);
        if (_0x460fef['状态'] === 'ok')
            return {
                ..._0x460fef['结果'],
                'reader': _0x53e055
            };
        const _0x3b38aa = _0x392142(_0x182030);
        if (_0x3b38aa['状态'] === 'ok')
            return {
                ..._0x3b38aa['结果'],
                'reader': _0x53e055
            };
        if (_0x460fef['状态'] === _0xbf3da9(0x59b) && _0x3b38aa['状态'] === _0xbf3da9(0x59b))
            return null;
    }
    const _0x5b7318 = _0x1109d4['subarray'](0x0, _0x4c1f2e), _0xddacca = _0x43c547(_0x5b7318);
    if (_0xddacca['状态'] === 'ok')
        return {
            ..._0xddacca['结果'],
            'reader': _0x53e055
        };
    const _0x91d296 = _0x392142(_0x5b7318);
    if (_0x91d296['状态'] === 'ok')
        return {
            ..._0x91d296['结果'],
            'reader': _0x53e055
        };
    return null;
}
async function 处理gRPC请求(request, _0x34629e, _0x45ecf2 = {}) {
    const _0x1a0209 = a0_0x43d2af;
    if (!request[_0x1a0209(0x3ff)])
        return new Response(_0x1a0209(0x222), { 'status': 0x190 });
    const _0x5f0735 = request[_0x1a0209(0x3ff)][_0x1a0209(0x22c)](), _0x177929 = {
            'socket': null,
            'connectingPromise': null,
            'retryConnect': null,
            'downlinkDrain': Promise[_0x1a0209(0x58b)]()
        }, _0x45449b = () => 失效TCP连接世代(_0x177929);
    let _0x4950b9 = ![];
    const _0x42490f = {
        '缓存': new Uint8Array(0x0),
        '反代地址': _0x45ecf2[_0x1a0209(0x3a2)]
    };
    let _0x955341 = null, _0x1a8eaf = null, _0x55a0b0 = null, _0x367b0f = null;
    const _0x2bf65c = new Headers({
            'Content-Type': _0x1a0209(0x55d),
            'grpc-status': '0',
            'X-Accel-Buffering': 'no',
            'Cache-Control': _0x1a0209(0x306)
        }), _0x28c9dc = 下行Grain包字节, _0x4adccf = 0x1;
    return new Response(new ReadableStream({
        async 'start'(_0x194374) {
            const _0x36514c = _0x1a0209;
            let _0x41e7f8 = ![], _0x7c3cf = [], _0x4678ae = 0x0, _0x2e21c7 = null, _0x98c7bf = ![];
            const _0x32cfa4 = {
                    'readyState': WebSocket[_0x36514c(0x63f)],
                    'send'(_0x5cdeea) {
                        const _0x12288b = _0x36514c;
                        if (_0x41e7f8)
                            return;
                        const _0x57ca0f = _0x5cdeea instanceof Uint8Array ? _0x5cdeea : new Uint8Array(_0x5cdeea), _0x4ca271 = [];
                        let _0x42c258 = _0x57ca0f['byteLength'] >>> 0x0;
                        while (_0x42c258 > 0x7f) {
                            _0x4ca271[_0x12288b(0x4a8)](_0x42c258 & 0x7f | 0x80), _0x42c258 >>>= 0x7;
                        }
                        _0x4ca271[_0x12288b(0x4a8)](_0x42c258);
                        const _0x309cfd = new Uint8Array(_0x4ca271), _0x5c5a25 = 0x1 + _0x309cfd['length'] + _0x57ca0f[_0x12288b(0x574)], _0x57d7e3 = new Uint8Array(0x5 + _0x5c5a25);
                        _0x57d7e3[0x0] = 0x0, _0x57d7e3[0x1] = _0x5c5a25 >>> 0x18 & 0xff, _0x57d7e3[0x2] = _0x5c5a25 >>> 0x10 & 0xff, _0x57d7e3[0x3] = _0x5c5a25 >>> 0x8 & 0xff, _0x57d7e3[0x4] = _0x5c5a25 & 0xff, _0x57d7e3[0x5] = 0xa, _0x57d7e3['set'](_0x309cfd, 0x6), _0x57d7e3[_0x12288b(0x1f2)](_0x57ca0f, 0x6 + _0x309cfd[_0x12288b(0x292)]), _0x7c3cf[_0x12288b(0x4a8)](_0x57d7e3), _0x4678ae += _0x57d7e3[_0x12288b(0x574)], _0x134317();
                    },
                    'close'() {
                        const _0x748de4 = _0x36514c;
                        if (this['readyState'] === WebSocket[_0x748de4(0x38b)])
                            return;
                        _0x507dd4(!![]), _0x41e7f8 = !![], this[_0x748de4(0x1f7)] = WebSocket['CLOSED'];
                        try {
                            _0x194374[_0x748de4(0x418)]();
                        } catch (_0x254ee5) {
                        }
                    }
                }, _0x507dd4 = (_0x2c8c4f = ![]) => {
                    const _0x5560b5 = _0x36514c;
                    _0x98c7bf = ![];
                    _0x2e21c7 && (clearTimeout(_0x2e21c7), _0x2e21c7 = null);
                    if (!_0x2c8c4f && _0x41e7f8 || _0x4678ae === 0x0)
                        return;
                    const _0x1eba84 = new Uint8Array(_0x4678ae);
                    let _0x1ebbac = 0x0;
                    for (const _0x4da5eb of _0x7c3cf) {
                        _0x1eba84['set'](_0x4da5eb, _0x1ebbac), _0x1ebbac += _0x4da5eb[_0x5560b5(0x574)];
                    }
                    _0x7c3cf = [], _0x4678ae = 0x0;
                    try {
                        _0x194374[_0x5560b5(0x55f)](_0x1eba84);
                    } catch (_0xee1987) {
                        _0x41e7f8 = !![], _0x32cfa4[_0x5560b5(0x1f7)] = WebSocket[_0x5560b5(0x38b)];
                    }
                }, _0x134317 = () => {
                    if (_0x4678ae >= _0x28c9dc) {
                        _0x507dd4();
                        return;
                    }
                    if (_0x98c7bf || _0x2e21c7)
                        return;
                    _0x98c7bf = !![], queueMicrotask(() => {
                        _0x98c7bf = ![];
                        if (_0x41e7f8 || _0x4678ae === 0x0 || _0x2e21c7)
                            return;
                        _0x2e21c7 = setTimeout(_0x507dd4, _0x4adccf);
                    });
                }, _0x5c68e8 = () => {
                    const _0x42e627 = _0x36514c;
                    if (_0x41e7f8)
                        return;
                    _0x367b0f?.['清空'](), _0x45449b(), _0x507dd4(!![]), _0x41e7f8 = !![], _0x32cfa4[_0x42e627(0x1f7)] = WebSocket[_0x42e627(0x38b)];
                    if (_0x2e21c7)
                        clearTimeout(_0x2e21c7);
                    if (_0x55a0b0) {
                        try {
                            _0x55a0b0['releaseLock']();
                        } catch (_0x273117) {
                        }
                        _0x55a0b0 = null;
                    }
                    _0x1a8eaf = null;
                    try {
                        _0x5f0735[_0x42e627(0x1d5)]();
                    } catch (_0x1448e1) {
                    }
                    try {
                        _0x42490f[_0x42e627(0x522)]?.[_0x42e627(0x418)]();
                    } catch (_0x284151) {
                    }
                    try {
                        _0x194374[_0x42e627(0x418)]();
                    } catch (_0xf9b616) {
                    }
                }, _0x43ddbb = () => {
                    const _0x361742 = _0x36514c;
                    if (_0x55a0b0) {
                        try {
                            _0x55a0b0[_0x361742(0x1d5)]();
                        } catch (_0x21b4b2) {
                        }
                        _0x55a0b0 = null;
                    }
                    _0x1a8eaf = null;
                }, _0x4d1e6c = _0x367b0f = 创建上行写入队列({
                    '获取写入器': () => {
                        const _0x4c1fde = _0x36514c, _0x4c4ce6 = _0x177929[_0x4c1fde(0x67b)];
                        if (!_0x4c4ce6)
                            return null;
                        return _0x4c4ce6 !== _0x1a8eaf && (_0x43ddbb(), _0x1a8eaf = _0x4c4ce6, _0x55a0b0 = _0x4c4ce6[_0x4c1fde(0x5ab)][_0x4c1fde(0x50b)]()), _0x55a0b0;
                    },
                    '获取连接任务': () => _0x177929[_0x36514c(0x5bc)],
                    '释放写入器': _0x43ddbb,
                    '重试连接': async () => {
                        const _0x257ed6 = _0x36514c;
                        if (typeof _0x177929[_0x257ed6(0x298)] !== 'function')
                            throw new Error(_0x257ed6(0x2f8));
                        await _0x177929[_0x257ed6(0x298)]();
                    },
                    '关闭连接': _0x5c68e8,
                    '名称': _0x36514c(0x2cc)
                }), _0x23dd80 = async (_0x386e70, _0x43aab6 = !![]) => {
                    const _0x108147 = _0x36514c;
                    return _0x4d1e6c[_0x108147(0x5aa)](_0x386e70, _0x43aab6);
                };
            let _0x2483ed = ![];
            try {
                let _0x3a9a9e = new Uint8Array(0x0);
                while (!![]) {
                    const {
                        done: _0x1ac987,
                        value: _0x1afd0e
                    } = await _0x5f0735[_0x36514c(0x1e7)]();
                    if (_0x1ac987)
                        break;
                    if (!_0x1afd0e || _0x1afd0e[_0x36514c(0x574)] === 0x0)
                        continue;
                    const _0x33f1e0 = _0x1afd0e instanceof Uint8Array ? _0x1afd0e : new Uint8Array(_0x1afd0e), _0x1bbe77 = new Uint8Array(_0x3a9a9e[_0x36514c(0x292)] + _0x33f1e0[_0x36514c(0x292)]);
                    _0x1bbe77[_0x36514c(0x1f2)](_0x3a9a9e, 0x0), _0x1bbe77[_0x36514c(0x1f2)](_0x33f1e0, _0x3a9a9e[_0x36514c(0x292)]), _0x3a9a9e = _0x1bbe77;
                    while (_0x3a9a9e[_0x36514c(0x574)] >= 0x5) {
                        const _0x3e1333 = _0x3a9a9e[0x1] << 0x18 >>> 0x0 | _0x3a9a9e[0x2] << 0x10 | _0x3a9a9e[0x3] << 0x8 | _0x3a9a9e[0x4], _0x2c7ce = 0x5 + _0x3e1333;
                        if (_0x3a9a9e[_0x36514c(0x574)] < _0x2c7ce)
                            break;
                        const _0x4b5e5f = _0x3a9a9e[_0x36514c(0x68d)](0x5, _0x2c7ce);
                        _0x3a9a9e = _0x3a9a9e[_0x36514c(0x548)](_0x2c7ce);
                        if (!_0x4b5e5f[_0x36514c(0x574)])
                            continue;
                        let _0x19cafc = _0x4b5e5f;
                        if (_0x19cafc[_0x36514c(0x574)] >= 0x2 && _0x19cafc[0x0] === 0xa) {
                            let _0x252b9c = 0x0, _0x35561f = 0x1, _0x232c62 = ![];
                            while (_0x35561f < _0x19cafc[_0x36514c(0x292)]) {
                                const _0x439204 = _0x19cafc[_0x35561f++];
                                if ((_0x439204 & 0x80) === 0x0) {
                                    _0x232c62 = !![];
                                    break;
                                }
                                _0x252b9c += 0x7;
                                if (_0x252b9c > 0x23)
                                    break;
                            }
                            if (_0x232c62)
                                _0x19cafc = _0x19cafc['subarray'](_0x35561f);
                        }
                        if (!_0x19cafc[_0x36514c(0x574)])
                            continue;
                        if (_0x4950b9) {
                            if (_0x955341)
                                await 转发木马UDP数据(_0x19cafc, _0x32cfa4, _0x42490f, request);
                            else
                                await forwardataudp(_0x19cafc, _0x32cfa4, null, request);
                            continue;
                        }
                        if (_0x177929[_0x36514c(0x67b)] || _0x177929[_0x36514c(0x5bc)]) {
                            if (!await _0x23dd80(_0x19cafc))
                                throw new Error('Remote\x20socket\x20is\x20not\x20ready');
                        } else {
                            const _0x10ec24 = 数据转Uint8Array(_0x19cafc);
                            if (_0x955341 === null)
                                _0x955341 = _0x10ec24[_0x36514c(0x574)] >= 0x3a && _0x10ec24[0x38] === 0xd && _0x10ec24[0x39] === 0xa;
                            if (_0x955341) {
                                const _0x5c778c = 解析木马请求(_0x10ec24, _0x34629e);
                                if (_0x5c778c?.[_0x36514c(0x305)])
                                    throw new Error(_0x5c778c[_0x36514c(0x385)] || _0x36514c(0x3d4));
                                const {
                                    port: _0x3cea8c,
                                    hostname: _0x5c3f09,
                                    rawClientData: _0x43ca77,
                                    isUDP: _0x38ef85
                                } = _0x5c778c;
                                log(_0x36514c(0x2ca) + _0x5c3f09 + ':' + _0x3cea8c + '\x20|\x20UDP:\x20' + (_0x38ef85 ? '是' : '否'));
                                if (isSpeedTestSite(_0x5c3f09) && _0x45ecf2[_0x36514c(0x2af)] === null) {
                                    _0x32cfa4['send'](构造本地204响应());
                                    return;
                                }
                                if (_0x38ef85) {
                                    _0x4950b9 = !![], _0x42490f[_0x36514c(0x384)] = _0x5c3f09, _0x42490f['目标端口'] = _0x3cea8c;
                                    if (_0x42490f[_0x36514c(0x3a5)])
                                        await 转发木马UDP数据(_0x10ec24, _0x32cfa4, _0x42490f, request);
                                    else {
                                        if (有效数据长度(_0x43ca77) > 0x0)
                                            await 转发木马UDP数据(_0x43ca77, _0x32cfa4, _0x42490f, request);
                                    }
                                } else
                                    await forwardataTCP(_0x5c3f09, _0x3cea8c, _0x43ca77, _0x32cfa4, null, _0x177929, _0x34629e, request, _0x45ecf2, !![], _0x10ec24);
                            } else {
                                _0x955341 = ![];
                                const _0x3150f6 = 解析魏烈思请求(_0x10ec24, _0x34629e);
                                if (_0x3150f6?.[_0x36514c(0x305)])
                                    throw new Error(_0x3150f6[_0x36514c(0x385)] || 'Invalid\x20魏烈思\x20request');
                                const {
                                    port: _0x4e2b8b,
                                    hostname: _0x521c9b,
                                    version: _0x5221d5,
                                    isUDP: _0x167cdb,
                                    rawClientData: _0x401787
                                } = _0x3150f6;
                                log(_0x36514c(0x648) + _0x521c9b + ':' + _0x4e2b8b + _0x36514c(0x2d2) + (_0x167cdb ? '是' : '否'));
                                const _0x24abc3 = new Uint8Array([
                                    _0x5221d5,
                                    0x0
                                ]);
                                if (isSpeedTestSite(_0x521c9b) && _0x45ecf2['代理类型'] === null) {
                                    _0x32cfa4[_0x36514c(0x544)](构造本地204响应(_0x24abc3));
                                    return;
                                }
                                if (_0x167cdb) {
                                    if (_0x4e2b8b !== 0x35)
                                        throw new Error(_0x36514c(0x3c1));
                                    _0x4950b9 = !![];
                                }
                                _0x32cfa4[_0x36514c(0x544)](_0x24abc3);
                                const _0x1171fc = _0x401787;
                                if (_0x4950b9) {
                                    if (_0x955341)
                                        await 转发木马UDP数据(_0x1171fc, _0x32cfa4, _0x42490f, request);
                                    else
                                        await forwardataudp(_0x1171fc, _0x32cfa4, null, request);
                                } else
                                    await forwardataTCP(_0x521c9b, _0x4e2b8b, _0x1171fc, _0x32cfa4, null, _0x177929, _0x34629e, request, _0x45ecf2);
                            }
                        }
                    }
                    _0x507dd4();
                }
                await _0x4d1e6c[_0x36514c(0x3f2)]();
            } catch (_0xff8543) {
                _0x2483ed = !![], log(_0x36514c(0x2fe) + (_0xff8543?.[_0x36514c(0x385)] || _0xff8543));
            } finally {
                const _0x129957 = !_0x2483ed && _0x4950b9 && _0x955341 && _0x42490f[_0x36514c(0x3a5)] && _0x42490f[_0x36514c(0x522)];
                if (_0x129957) {
                    _0x4d1e6c['清空'](), _0x45449b(), _0x43ddbb();
                    try {
                        _0x5f0735[_0x36514c(0x1d5)]();
                    } catch (_0x414b53) {
                    }
                } else
                    _0x5c68e8();
            }
        },
        'cancel'() {
            const _0x125441 = _0x1a0209;
            _0x367b0f?.['清空'](), _0x45449b();
            try {
                _0x42490f['反代Socket']?.[_0x125441(0x418)]();
            } catch (_0xd798f3) {
            }
            try {
                _0x5f0735[_0x125441(0x1d5)]();
            } catch (_0x27df59) {
            }
        }
    }), {
        'status': 0xc8,
        'headers': _0x2bf65c
    });
}
function 是有效WS早期数据(_0x130574, _0x2cc7d4) {
    const _0x15c19c = a0_0x43d2af;
    if (!_0x130574?.[_0x15c19c(0x574)])
        return ![];
    if (_0x130574[_0x15c19c(0x574)] >= 0x12 && UUID字节匹配(_0x130574, 0x1, _0x2cc7d4))
        return !![];
    if (_0x130574['byteLength'] < 0x3a || _0x130574[0x38] !== 0xd || _0x130574[0x39] !== 0xa)
        return ![];
    const _0x4e23ac = sha224(_0x2cc7d4);
    for (let _0x22911c = 0x0; _0x22911c < 0x38; _0x22911c++) {
        if (_0x130574[_0x22911c] !== _0x4e23ac[_0x15c19c(0x411)](_0x22911c))
            return ![];
    }
    return !![];
}
function 解码WS早期数据(_0x2f6c69, _0x46ee95) {
    const _0x21ed22 = a0_0x43d2af;
    if (!_0x2f6c69)
        return null;
    if (_0x2f6c69[_0x21ed22(0x292)] > WS早期数据最大头长度)
        throw new Error(_0x21ed22(0x519));
    let _0x261fde;
    const _0x569fbb = Uint8Array;
    if (typeof _0x569fbb[_0x21ed22(0x2b8)] === _0x21ed22(0x4a5))
        try {
            _0x261fde = _0x569fbb[_0x21ed22(0x2b8)](_0x2f6c69, { 'alphabet': _0x21ed22(0x5da) });
        } catch (_0x522170) {
        }
    if (!_0x261fde) {
        let _0x42e566 = _0x2f6c69[_0x21ed22(0x680)](/-/g, '+')[_0x21ed22(0x680)](/_/g, '/');
        const _0x4d7d44 = _0x42e566[_0x21ed22(0x292)] % 0x4;
        if (_0x4d7d44)
            _0x42e566 += '='[_0x21ed22(0x296)](0x4 - _0x4d7d44);
        let _0x138660;
        try {
            _0x138660 = atob(_0x42e566);
        } catch (_0x68d2aa) {
            return null;
        }
        _0x261fde = new Uint8Array(_0x138660['length']);
        for (let _0x585f08 = 0x0; _0x585f08 < _0x138660[_0x21ed22(0x292)]; _0x585f08++)
            _0x261fde[_0x585f08] = _0x138660['charCodeAt'](_0x585f08);
    }
    if (_0x261fde['byteLength'] > WS早期数据最大字节)
        throw new Error(_0x21ed22(0x519));
    return 是有效WS早期数据(_0x261fde, _0x46ee95) ? _0x261fde : null;
}
async function 处理WS请求(request, _0x415ae8, _0x14dd4f, _0x56de7d = {}) {
    const _0x167c1a = a0_0x43d2af, _0x2e0d8c = new WebSocketPair(), [_0x1f966d, _0x46987e] = Object['values'](_0x2e0d8c);
    try {
        _0x46987e[_0x167c1a(0x397)]({ 'allowHalfOpen': !![] });
    } catch (_0x2891c0) {
        _0x46987e[_0x167c1a(0x397)]();
    }
    _0x46987e['binaryType'] = _0x167c1a(0x524);
    let _0x417a9d = {
        'socket': null,
        'connectingPromise': null,
        'retryConnect': null,
        'downlinkDrain': Promise[_0x167c1a(0x58b)]()
    };
    const _0x1ca5c9 = () => 失效TCP连接世代(_0x417a9d);
    let _0x3eee7d = ![], _0x678c05 = null;
    const _0x3ddf3c = {
            '缓存': new Uint8Array(0x0),
            '反代地址': _0x56de7d[_0x167c1a(0x3a2)]
        }, _0x2dfb13 = request[_0x167c1a(0x3b9)][_0x167c1a(0x257)](_0x167c1a(0x5de)) || '', _0x48d1b8 = !!_0x14dd4f[_0x167c1a(0x598)][_0x167c1a(0x257)](_0x167c1a(0x34b));
    let _0x4a7b5f = null, _0x5efbee = Promise[_0x167c1a(0x58b)](), _0x1c0f0d = ![], _0x1fa312 = ![], _0x25940c = ![], _0x48be48 = 0x0, _0x342e5c = 0x0, _0x18ee77 = null, _0x246eb1 = null, _0x4e90e8 = null, _0x49f3cb = null, _0x233028 = null, _0x2bffab = ![], _0x589a9f = null, _0x595f23 = new Uint8Array(0x0), _0x5117d6 = null;
    const _0x92664a = 0x40 * 0x400, _0x15fade = async () => {
            if (!_0x589a9f)
                return;
            const _0x475cdf = _0x5117d6;
            _0x5117d6 = null, await WebSocket发送并等待(_0x589a9f, 构造WS本地204响应(_0x475cdf));
        }, _0x3ef687 = _0x5f42ee => {
            const _0x165cb4 = _0x167c1a;
            for (let _0x8d26c4 = 0x0; _0x8d26c4 <= _0x5f42ee[_0x165cb4(0x574)] - 0x4; _0x8d26c4++) {
                if (_0x5f42ee[_0x8d26c4] === 0xd && _0x5f42ee[_0x8d26c4 + 0x1] === 0xa && _0x5f42ee[_0x8d26c4 + 0x2] === 0xd && _0x5f42ee[_0x8d26c4 + 0x3] === 0xa)
                    return _0x8d26c4 + 0x4;
            }
            return -0x1;
        }, _0x423f2f = async _0x19acc0 => {
            const _0x18e6b0 = _0x167c1a, _0x3a5f56 = 数据转Uint8Array(_0x19acc0);
            if (!_0x3a5f56[_0x18e6b0(0x574)])
                return;
            if (_0x595f23[_0x18e6b0(0x574)] + _0x3a5f56[_0x18e6b0(0x574)] > _0x92664a)
                throw new Error('WS\x20local\x20speed-test\x20request\x20is\x20too\x20large');
            _0x595f23 = 拼接字节数据(_0x595f23, _0x3a5f56);
            while (_0x595f23[_0x18e6b0(0x574)]) {
                const _0x5d3504 = _0x3ef687(_0x595f23);
                if (_0x5d3504 === -0x1)
                    return;
                const _0x1278e5 = 魏烈思文本解码器[_0x18e6b0(0x49a)](_0x595f23[_0x18e6b0(0x68d)](0x0, _0x5d3504)), _0x48de9d = _0x1278e5[_0x18e6b0(0x5f7)](/(?:^|\r\n)content-length\s*:\s*(\d+)/i), _0x17ca3d = _0x48de9d ? Number(_0x48de9d[0x1]) : 0x0, _0x36e070 = _0x5d3504 + _0x17ca3d;
                if (!Number[_0x18e6b0(0x54c)](_0x17ca3d) || _0x36e070 > _0x92664a)
                    throw new Error(_0x18e6b0(0x342));
                if (_0x595f23[_0x18e6b0(0x574)] < _0x36e070)
                    return;
                _0x595f23 = _0x595f23['slice'](_0x36e070), await _0x15fade();
            }
        }, _0x367d75 = async (_0x52d9c4, _0x3b2123 = null, _0x741b6b = null) => {
            _0x2bffab = !![], _0x589a9f = _0x52d9c4, _0x595f23 = new Uint8Array(0x0), _0x5117d6 = _0x3b2123;
            if (有效数据长度(_0x741b6b) > 0x0)
                await _0x423f2f(_0x741b6b);
        }, _0x4a1cfc = () => {
            const _0xb3f15a = _0x167c1a;
            if (_0x4e90e8) {
                try {
                    _0x4e90e8[_0xb3f15a(0x1d5)]();
                } catch (_0x58aa33) {
                }
                _0x4e90e8 = null;
            }
            _0x246eb1 = null;
        }, _0x45151e = _0x4a7b5f = 创建上行写入队列({
            '获取写入器': () => {
                const _0x1cb8e3 = _0x167c1a, _0x403816 = _0x417a9d['socket'];
                if (!_0x403816)
                    return null;
                return _0x403816 !== _0x246eb1 && (_0x4a1cfc(), _0x246eb1 = _0x403816, _0x4e90e8 = _0x403816[_0x1cb8e3(0x5ab)][_0x1cb8e3(0x50b)]()), _0x4e90e8;
            },
            '获取连接任务': () => _0x417a9d[_0x167c1a(0x5bc)],
            '释放写入器': _0x4a1cfc,
            '重试连接': async () => {
                const _0x33c7cb = _0x167c1a;
                if (typeof _0x417a9d['retryConnect'] !== 'function')
                    throw new Error(_0x33c7cb(0x2f8));
                await _0x417a9d['retryConnect']();
            },
            '关闭连接': _0x845b1d => _0x4dd5ee(_0x845b1d),
            '名称': _0x167c1a(0x5b6)
        }), _0x1f9d7b = async (_0x162bb8, _0x241fd8 = !![]) => {
            return _0x45151e['写入'](_0x162bb8, _0x241fd8);
        }, _0xcfd8a8 = async () => {
            const _0x51d84c = _0x167c1a;
            if (_0x49f3cb)
                return _0x49f3cb;
            return !_0x233028 && (_0x233028 = (async () => {
                const _0x423e67 = a0_0x5eca, _0x44afab = (_0x14dd4f[_0x423e67(0x598)][_0x423e67(0x257)](_0x423e67(0x34b)) || '')[_0x423e67(0x486)](), _0x48e42c = SS支持加密配置[_0x44afab] || SS支持加密配置[_0x423e67(0x1df)], _0x3aae1b = [
                        _0x48e42c,
                        ...Object[_0x423e67(0x5a2)](SS支持加密配置)[_0x423e67(0x216)](_0x5dab8a => _0x5dab8a[_0x423e67(0x52d)] !== _0x48e42c[_0x423e67(0x52d)])
                    ], _0x3b5fce = new Map(), _0x3f772b = _0x5a0f0a => {
                        const _0xca5aa8 = _0x423e67;
                        if (!_0x3b5fce[_0xca5aa8(0x53a)](_0x5a0f0a[_0xca5aa8(0x52d)]))
                            _0x3b5fce[_0xca5aa8(0x1f2)](_0x5a0f0a[_0xca5aa8(0x52d)], SS派生主密钥(_0x415ae8, _0x5a0f0a[_0xca5aa8(0x300)]));
                        return _0x3b5fce[_0xca5aa8(0x257)](_0x5a0f0a[_0xca5aa8(0x52d)]);
                    }, _0x164379 = {
                        'buffer': new Uint8Array(0x0),
                        'hasSalt': ![],
                        'waitPayloadLength': null,
                        'decryptKey': null,
                        'nonceCounter': new Uint8Array(SSNonce长度),
                        '加密配置': null
                    }, _0x96fd86 = async () => {
                        const _0x351cf6 = _0x423e67, _0x2beeca = 0x2 + SSAEAD标签长度, _0x44152d = Math['max'](..._0x3aae1b[_0x351cf6(0x2a7)](_0x2a0354 => _0x2a0354[_0x351cf6(0x2bb)])), _0x5cf122 = 0x10, _0x2b4a33 = Math[_0x351cf6(0x572)](_0x5cf122, Math[_0x351cf6(0x209)](0x0, _0x164379['buffer'][_0x351cf6(0x574)] - (_0x2beeca + Math[_0x351cf6(0x572)](..._0x3aae1b[_0x351cf6(0x2a7)](_0x39a834 => _0x39a834[_0x351cf6(0x2bb)])))));
                        for (let _0x28ee48 = 0x0; _0x28ee48 <= _0x2b4a33; _0x28ee48++) {
                            for (const _0x17d083 of _0x3aae1b) {
                                const _0x79d5fb = _0x28ee48 + _0x17d083[_0x351cf6(0x2bb)] + _0x2beeca;
                                if (_0x164379[_0x351cf6(0x565)][_0x351cf6(0x574)] < _0x79d5fb)
                                    continue;
                                const _0x253c47 = _0x164379[_0x351cf6(0x565)]['subarray'](_0x28ee48, _0x28ee48 + _0x17d083['saltLen']), _0x2ef6f2 = _0x164379[_0x351cf6(0x565)][_0x351cf6(0x68d)](_0x28ee48 + _0x17d083[_0x351cf6(0x2bb)], _0x79d5fb), _0x103d96 = await _0x3f772b(_0x17d083), _0x2bb391 = await SS派生会话密钥(_0x17d083, _0x103d96, _0x253c47, [_0x351cf6(0x267)]), _0x47503c = new Uint8Array(SSNonce长度);
                                try {
                                    const _0x4e7c0a = await SSAEAD解密(_0x2bb391, _0x47503c, _0x2ef6f2);
                                    if (_0x4e7c0a[_0x351cf6(0x574)] !== 0x2)
                                        continue;
                                    const _0x275dd5 = _0x4e7c0a[0x0] << 0x8 | _0x4e7c0a[0x1];
                                    if (_0x275dd5 < 0x0 || _0x275dd5 > _0x17d083['maxChunk'])
                                        continue;
                                    if (_0x28ee48 > 0x0)
                                        log(_0x351cf6(0x303) + _0x28ee48 + _0x351cf6(0x61a));
                                    if (_0x17d083[_0x351cf6(0x52d)] !== _0x48e42c[_0x351cf6(0x52d)])
                                        log(_0x351cf6(0x57b) + (_0x44afab || _0x48e42c[_0x351cf6(0x52d)]) + _0x351cf6(0x362) + _0x17d083['method'] + _0x351cf6(0x457));
                                    return _0x164379[_0x351cf6(0x565)] = _0x164379[_0x351cf6(0x565)]['subarray'](_0x79d5fb), _0x164379[_0x351cf6(0x263)] = _0x2bb391, _0x164379['nonceCounter'] = _0x47503c, _0x164379[_0x351cf6(0x59e)] = _0x275dd5, _0x164379[_0x351cf6(0x254)] = _0x17d083, _0x164379[_0x351cf6(0x2ae)] = !![], !![];
                                } catch (_0x1178cc) {
                                }
                            }
                        }
                        const _0x52ee3e = _0x44152d + _0x2beeca + _0x5cf122;
                        if (_0x164379[_0x351cf6(0x565)][_0x351cf6(0x574)] >= _0x52ee3e)
                            throw new Error(_0x351cf6(0x39d) + (_0x44afab || _0x351cf6(0x2d4)) + _0x351cf6(0x328) + _0x3aae1b[_0x351cf6(0x2a7)](_0x1f67c2 => _0x1f67c2[_0x351cf6(0x52d)])[_0x351cf6(0x4f1)]('/') + ')');
                        return ![];
                    }, _0x1cbfa9 = {
                        async '输入'(_0x15e846) {
                            const _0xeb740a = _0x423e67, _0x1e1f9a = 数据转Uint8Array(_0x15e846);
                            if (_0x1e1f9a[_0xeb740a(0x574)] > 0x0)
                                _0x164379['buffer'] = 拼接字节数据(_0x164379['buffer'], _0x1e1f9a);
                            if (!_0x164379[_0xeb740a(0x2ae)]) {
                                const _0x5b4f92 = await _0x96fd86();
                                if (!_0x5b4f92)
                                    return [];
                            }
                            const _0x4b5018 = [];
                            while (!![]) {
                                if (_0x164379[_0xeb740a(0x59e)] === null) {
                                    const _0x57f647 = 0x2 + SSAEAD标签长度;
                                    if (_0x164379[_0xeb740a(0x565)][_0xeb740a(0x574)] < _0x57f647)
                                        break;
                                    const _0x21a60a = _0x164379[_0xeb740a(0x565)][_0xeb740a(0x68d)](0x0, _0x57f647);
                                    _0x164379[_0xeb740a(0x565)] = _0x164379[_0xeb740a(0x565)][_0xeb740a(0x68d)](_0x57f647);
                                    const _0x318195 = await SSAEAD解密(_0x164379['decryptKey'], _0x164379[_0xeb740a(0x2fa)], _0x21a60a);
                                    if (_0x318195[_0xeb740a(0x574)] !== 0x2)
                                        throw new Error(_0xeb740a(0x5d4));
                                    const _0x410f1b = _0x318195[0x0] << 0x8 | _0x318195[0x1];
                                    if (_0x410f1b < 0x0 || _0x410f1b > _0x164379['加密配置'][_0xeb740a(0x4de)])
                                        throw new Error(_0xeb740a(0x54d) + _0x410f1b);
                                    _0x164379[_0xeb740a(0x59e)] = _0x410f1b;
                                }
                                const _0x1d8a41 = _0x164379[_0xeb740a(0x59e)] + SSAEAD标签长度;
                                if (_0x164379['buffer'][_0xeb740a(0x574)] < _0x1d8a41)
                                    break;
                                const _0x316ccf = _0x164379[_0xeb740a(0x565)][_0xeb740a(0x68d)](0x0, _0x1d8a41);
                                _0x164379[_0xeb740a(0x565)] = _0x164379[_0xeb740a(0x565)][_0xeb740a(0x68d)](_0x1d8a41);
                                const _0x162ead = await SSAEAD解密(_0x164379['decryptKey'], _0x164379[_0xeb740a(0x2fa)], _0x316ccf);
                                _0x4b5018[_0xeb740a(0x4a8)](_0x162ead), _0x164379[_0xeb740a(0x59e)] = null;
                            }
                            return _0x4b5018;
                        }
                    };
                let _0x5f2fa0 = null;
                const _0x217218 = 0x20 * 0x400, _0x297f3f = async () => {
                        const _0x3b1ea1 = _0x423e67;
                        if (_0x5f2fa0)
                            return _0x5f2fa0;
                        if (!_0x164379[_0x3b1ea1(0x254)])
                            throw new Error('SS\x20cipher\x20is\x20not\x20negotiated');
                        const _0x2da295 = _0x164379['加密配置'], _0x369de7 = await SS派生主密钥(_0x415ae8, _0x2da295[_0x3b1ea1(0x300)]), _0x16805d = crypto[_0x3b1ea1(0x60a)](new Uint8Array(_0x2da295[_0x3b1ea1(0x2bb)])), _0x321ad0 = await SS派生会话密钥(_0x2da295, _0x369de7, _0x16805d, [_0x3b1ea1(0x5df)]), _0x158109 = new Uint8Array(SSNonce长度);
                        let _0x197d26 = ![];
                        return _0x5f2fa0 = {
                            async '加密并发送'(_0x52f69c, _0x5db6b7) {
                                const _0xa70932 = _0x3b1ea1, _0x24a0e7 = 数据转Uint8Array(_0x52f69c);
                                !_0x197d26 && (await _0x5db6b7(_0x16805d), _0x197d26 = !![]);
                                if (_0x24a0e7[_0xa70932(0x574)] === 0x0)
                                    return;
                                let _0x2a05ed = 0x0;
                                while (_0x2a05ed < _0x24a0e7[_0xa70932(0x574)]) {
                                    const _0x305350 = Math[_0xa70932(0x572)](_0x2a05ed + _0x2da295['maxChunk'], _0x24a0e7[_0xa70932(0x574)]), _0x3baabd = _0x24a0e7[_0xa70932(0x68d)](_0x2a05ed, _0x305350), _0xe83ea7 = new Uint8Array(0x2);
                                    _0xe83ea7[0x0] = _0x3baabd[_0xa70932(0x574)] >>> 0x8 & 0xff, _0xe83ea7[0x1] = _0x3baabd[_0xa70932(0x574)] & 0xff;
                                    const _0x43bb12 = await SSAEAD加密(_0x321ad0, _0x158109, _0xe83ea7), _0x27b7f9 = await SSAEAD加密(_0x321ad0, _0x158109, _0x3baabd), _0xfa2dcf = new Uint8Array(_0x43bb12[_0xa70932(0x574)] + _0x27b7f9[_0xa70932(0x574)]);
                                    _0xfa2dcf[_0xa70932(0x1f2)](_0x43bb12, 0x0), _0xfa2dcf[_0xa70932(0x1f2)](_0x27b7f9, _0x43bb12['byteLength']), await _0x5db6b7(_0xfa2dcf), _0x2a05ed = _0x305350;
                                }
                            }
                        }, _0x5f2fa0;
                    };
                let _0xa8ef3c = Promise[_0x423e67(0x58b)]();
                const _0x48a55a = _0x38687 => {
                        const _0x3c456e = _0x423e67;
                        return _0xa8ef3c = _0xa8ef3c[_0x3c456e(0x56e)](async () => {
                            const _0x3ef429 = _0x3c456e;
                            if (_0x46987e[_0x3ef429(0x1f7)] !== WebSocket['OPEN'])
                                return;
                            const _0x576b40 = await _0x297f3f();
                            await _0x576b40['加密并发送'](_0x38687, async _0x296d03 => {
                                const _0x358164 = _0x3ef429;
                                _0x296d03[_0x358164(0x574)] > 0x0 && _0x46987e[_0x358164(0x1f7)] === WebSocket['OPEN'] && await WebSocket发送并等待(_0x46987e, _0x296d03[_0x358164(0x565)]);
                            });
                        })[_0x3c456e(0x5ec)](_0x32d622 => {
                            const _0x4a4e26 = _0x3c456e;
                            log(_0x4a4e26(0x669) + (_0x32d622?.[_0x4a4e26(0x385)] || _0x32d622)), closeSocketQuietly(_0x46987e);
                        }), _0xa8ef3c;
                    }, _0x277b35 = {
                        get 'readyState'() {
                            const _0x572cbe = _0x423e67;
                            return _0x46987e[_0x572cbe(0x1f7)];
                        },
                        'send'(_0x48f2a1) {
                            const _0x26da2c = _0x423e67, _0x5c697a = 数据转Uint8Array(_0x48f2a1);
                            if (_0x5c697a[_0x26da2c(0x574)] <= _0x217218)
                                return _0x48a55a(_0x5c697a);
                            for (let _0x21769b = 0x0; _0x21769b < _0x5c697a['byteLength']; _0x21769b += _0x217218) {
                                _0x48a55a(_0x5c697a[_0x26da2c(0x68d)](_0x21769b, Math[_0x26da2c(0x572)](_0x21769b + _0x217218, _0x5c697a[_0x26da2c(0x574)])));
                            }
                            return _0xa8ef3c;
                        },
                        'close'() {
                            closeSocketQuietly(_0x46987e);
                        }
                    };
                return _0x49f3cb = {
                    '入站解密器': _0x1cbfa9,
                    '回包Socket': _0x277b35,
                    '首包已建立': ![],
                    '目标主机': '',
                    '目标端口': 0x0
                }, _0x49f3cb;
            })()[_0x51d84c(0x3e9)](() => {
                _0x233028 = null;
            })), _0x233028;
        }, _0x450714 = async _0x365a0b => {
            const _0x11a696 = _0x167c1a, _0x15673c = await _0xcfd8a8();
            let _0x3d66f1 = null;
            try {
                _0x3d66f1 = await _0x15673c[_0x11a696(0x2f9)]['输入'](_0x365a0b);
            } catch (_0x487686) {
                const _0x1618bc = _0x487686?.[_0x11a696(0x385)] || '' + _0x487686;
                if (_0x1618bc[_0x11a696(0x68e)](_0x11a696(0x45f)) || _0x1618bc['includes'](_0x11a696(0x566)) || _0x1618bc[_0x11a696(0x68e)](_0x11a696(0x5d4))) {
                    log(_0x11a696(0x538) + _0x1618bc), closeSocketQuietly(_0x46987e);
                    return;
                }
                throw _0x487686;
            }
            for (const _0x5a57b0 of _0x3d66f1) {
                if (_0x2bffab) {
                    await _0x423f2f(_0x5a57b0);
                    continue;
                }
                let _0x28acd3 = ![];
                try {
                    _0x28acd3 = await _0x1f9d7b(_0x5a57b0, ![]);
                } catch (_0x3d0880) {
                    if (_0x3d0880?.[_0x11a696(0x28c)])
                        throw _0x3d0880;
                    _0x28acd3 = ![];
                }
                if (_0x28acd3)
                    continue;
                if (_0x15673c[_0x11a696(0x6a7)] && _0x15673c['目标主机'] && _0x15673c[_0x11a696(0x517)] > 0x0) {
                    await forwardataTCP(_0x15673c[_0x11a696(0x384)], _0x15673c[_0x11a696(0x517)], _0x5a57b0, _0x15673c[_0x11a696(0x203)], null, _0x417a9d, _0x415ae8, request, _0x56de7d);
                    continue;
                }
                const _0x22178c = 数据转Uint8Array(_0x5a57b0);
                if (_0x22178c[_0x11a696(0x574)] < 0x3)
                    throw new Error(_0x11a696(0x1f6));
                const _0x12b27c = _0x22178c[0x0];
                let _0x260d2b = 0x1, _0x17c0ad = '';
                if (_0x12b27c === 0x1) {
                    if (_0x22178c['byteLength'] < _0x260d2b + 0x4 + 0x2)
                        throw new Error(_0x11a696(0x50a));
                    _0x17c0ad = _0x22178c[_0x260d2b] + '.' + _0x22178c[_0x260d2b + 0x1] + '.' + _0x22178c[_0x260d2b + 0x2] + '.' + _0x22178c[_0x260d2b + 0x3], _0x260d2b += 0x4;
                } else {
                    if (_0x12b27c === 0x3) {
                        if (_0x22178c[_0x11a696(0x574)] < _0x260d2b + 0x1)
                            throw new Error(_0x11a696(0x4e6));
                        const _0x8aa40 = _0x22178c[_0x260d2b];
                        _0x260d2b += 0x1;
                        if (_0x22178c[_0x11a696(0x574)] < _0x260d2b + _0x8aa40 + 0x2)
                            throw new Error(_0x11a696(0x2aa));
                        _0x17c0ad = SS文本解码器[_0x11a696(0x49a)](_0x22178c[_0x11a696(0x68d)](_0x260d2b, _0x260d2b + _0x8aa40)), _0x260d2b += _0x8aa40;
                    } else {
                        if (_0x12b27c === 0x4) {
                            if (_0x22178c['byteLength'] < _0x260d2b + 0x10 + 0x2)
                                throw new Error(_0x11a696(0x3af));
                            const _0x58675d = [], _0x4e5536 = new DataView(_0x22178c[_0x11a696(0x565)], _0x22178c[_0x11a696(0x5ad)] + _0x260d2b, 0x10);
                            for (let _0x482150 = 0x0; _0x482150 < 0x8; _0x482150++)
                                _0x58675d[_0x11a696(0x4a8)](_0x4e5536[_0x11a696(0x4af)](_0x482150 * 0x2)[_0x11a696(0x592)](0x10));
                            _0x17c0ad = _0x58675d[_0x11a696(0x4f1)](':'), _0x260d2b += 0x10;
                        } else
                            throw new Error(_0x11a696(0x500) + _0x12b27c);
                    }
                }
                if (!_0x17c0ad)
                    throw new Error('invalid\x20ss\x20address:\x20' + _0x12b27c);
                const _0x191627 = _0x22178c[_0x260d2b] << 0x8 | _0x22178c[_0x260d2b + 0x1];
                _0x260d2b += 0x2;
                const _0x4aee11 = _0x22178c[_0x11a696(0x68d)](_0x260d2b);
                if (isSpeedTestSite(_0x17c0ad) && _0x56de7d[_0x11a696(0x2af)] === null) {
                    await _0x367d75(_0x15673c[_0x11a696(0x203)], null, _0x4aee11);
                    return;
                }
                _0x15673c['首包已建立'] = !![], _0x15673c['目标主机'] = _0x17c0ad, _0x15673c[_0x11a696(0x517)] = _0x191627, await forwardataTCP(_0x17c0ad, _0x191627, _0x4aee11, _0x15673c[_0x11a696(0x203)], null, _0x417a9d, _0x415ae8, request, _0x56de7d);
            }
        }, _0x45ffdb = async _0x1a26ec => {
            const _0x104246 = _0x167c1a;
            let _0x1cec81 = null;
            if (_0x3eee7d) {
                if (_0x678c05)
                    return await 转发木马UDP数据(_0x1a26ec, _0x46987e, _0x3ddf3c, request);
                return await forwardataudp(_0x1a26ec, _0x46987e, null, request);
            }
            if (_0x18ee77 === 'ss') {
                await _0x450714(_0x1a26ec);
                return;
            }
            if (_0x2bffab) {
                await _0x423f2f(_0x1a26ec);
                return;
            }
            if (await _0x1f9d7b(_0x1a26ec))
                return;
            if (_0x18ee77 === null) {
                if (_0x14dd4f[_0x104246(0x598)][_0x104246(0x257)](_0x104246(0x34b)))
                    _0x18ee77 = 'ss';
                else {
                    _0x1cec81 = _0x1cec81 || 数据转Uint8Array(_0x1a26ec);
                    const _0x5d6a31 = _0x1cec81;
                    _0x18ee77 = _0x5d6a31[_0x104246(0x574)] >= 0x3a && _0x5d6a31[0x38] === 0xd && _0x5d6a31[0x39] === 0xa ? '木马' : _0x104246(0x46f);
                }
                _0x678c05 = _0x18ee77 === '木马', log(_0x104246(0x334) + _0x18ee77 + _0x104246(0x675) + _0x14dd4f[_0x104246(0x606)] + _0x104246(0x259) + (request['headers'][_0x104246(0x257)]('user-agent') || '未知'));
            }
            if (_0x18ee77 === 'ss') {
                await _0x450714(_0x1a26ec);
                return;
            }
            if (await _0x1f9d7b(_0x1a26ec))
                return;
            if (_0x18ee77 === '木马') {
                const _0x1fb087 = 解析木马请求(_0x1a26ec, _0x415ae8);
                if (_0x1fb087?.[_0x104246(0x305)])
                    throw new Error(_0x1fb087[_0x104246(0x385)] || _0x104246(0x3d4));
                const {
                    port: _0x45d6f1,
                    hostname: _0x1f3a24,
                    rawClientData: _0x2619ea,
                    isUDP: _0x8ee12e
                } = _0x1fb087;
                if (isSpeedTestSite(_0x1f3a24) && _0x56de7d[_0x104246(0x2af)] === null) {
                    await _0x367d75(_0x46987e, null, _0x2619ea);
                    return;
                }
                if (_0x8ee12e) {
                    _0x3eee7d = !![], _0x3ddf3c[_0x104246(0x384)] = _0x1f3a24, _0x3ddf3c['目标端口'] = _0x45d6f1;
                    if (_0x3ddf3c[_0x104246(0x3a5)])
                        return 转发木马UDP数据(_0x1cec81 || 数据转Uint8Array(_0x1a26ec), _0x46987e, _0x3ddf3c, request);
                    if (有效数据长度(_0x2619ea) > 0x0)
                        return 转发木马UDP数据(_0x2619ea, _0x46987e, _0x3ddf3c, request);
                    return;
                }
                await forwardataTCP(_0x1f3a24, _0x45d6f1, _0x2619ea, _0x46987e, null, _0x417a9d, _0x415ae8, request, _0x56de7d, !![], _0x1cec81 || 数据转Uint8Array(_0x1a26ec));
            } else {
                _0x678c05 = ![], _0x1cec81 = _0x1cec81 || 数据转Uint8Array(_0x1a26ec);
                const _0x514572 = _0x1cec81, _0x5d6791 = 解析魏烈思请求(_0x514572, _0x415ae8);
                if (_0x5d6791?.[_0x104246(0x305)])
                    throw new Error(_0x5d6791[_0x104246(0x385)] || _0x104246(0x2d0));
                const {
                        port: _0x1a75af,
                        hostname: _0x336c1f,
                        version: _0x4d747b,
                        isUDP: _0xb9702e,
                        rawClientData: _0xe1e748
                    } = _0x5d6791, _0x148fb2 = new Uint8Array([
                        _0x4d747b,
                        0x0
                    ]);
                if (isSpeedTestSite(_0x336c1f) && _0x56de7d[_0x104246(0x2af)] === null) {
                    await _0x367d75(_0x46987e, _0x148fb2, _0xe1e748);
                    return;
                }
                if (_0xb9702e) {
                    if (_0x1a75af === 0x35)
                        _0x3eee7d = !![];
                    else
                        throw new Error(_0x104246(0x3c1));
                }
                const _0x4245bd = _0xe1e748;
                if (_0x3eee7d) {
                    if (_0x678c05)
                        return 转发木马UDP数据(_0x4245bd, _0x46987e, _0x3ddf3c, request);
                    return forwardataudp(_0x4245bd, _0x46987e, _0x148fb2, request);
                }
                await forwardataTCP(_0x336c1f, _0x1a75af, _0x4245bd, _0x46987e, _0x148fb2, _0x417a9d, _0x415ae8, request, _0x56de7d);
            }
        }, _0x4dd5ee = _0x4d3096 => {
            const _0x1dd24d = _0x167c1a;
            if (_0x1fa312)
                return;
            _0x1fa312 = !![], _0x1c0f0d = !![], _0x48be48 = 0x0, _0x342e5c = 0x0;
            const _0x36bb92 = _0x4d3096?.[_0x1dd24d(0x385)] || '' + _0x4d3096;
            _0x36bb92[_0x1dd24d(0x68e)](_0x1dd24d(0x5e2)) || _0x36bb92[_0x1dd24d(0x68e)](_0x1dd24d(0x43e)) ? log(_0x1dd24d(0x65b) + _0x36bb92) : log(_0x1dd24d(0x281) + _0x36bb92);
            _0x45151e['清空'](), _0x4a1cfc(), _0x1ca5c9();
            try {
                _0x3ddf3c[_0x1dd24d(0x522)]?.[_0x1dd24d(0x418)]();
            } catch (_0x31dddc) {
            }
            closeSocketQuietly(_0x46987e);
        }, _0x3a5a97 = _0x53dae6 => {
            const _0x2c27f9 = _0x167c1a;
            return _0x5efbee = _0x5efbee[_0x2c27f9(0x56e)](_0x53dae6)[_0x2c27f9(0x5ec)](_0x4dd5ee), _0x5efbee;
        }, _0x2f7240 = _0x3ffef5 => {
            const _0x5e5315 = _0x167c1a;
            if (_0x1c0f0d || _0x1fa312)
                return;
            const _0xd10363 = Math[_0x5e5315(0x209)](0x0, 有效数据长度(_0x3ffef5)), _0x39083c = _0x48be48 + _0xd10363, _0x456334 = _0x342e5c + 0x1;
            if (_0x39083c > 上行队列最大字节 || _0x456334 > 上行队列最大条目) {
                _0x4dd5ee(new Error(_0x5e5315(0x45d) + _0x39083c + 'B/' + _0x456334));
                return;
            }
            _0x48be48 = _0x39083c, _0x342e5c = _0x456334, _0x3a5a97(async () => {
                const _0x5f41e5 = _0x5e5315;
                _0x48be48 = Math[_0x5f41e5(0x209)](0x0, _0x48be48 - _0xd10363), _0x342e5c = Math[_0x5f41e5(0x209)](0x0, _0x342e5c - 0x1);
                if (_0x1fa312)
                    return;
                await _0x45ffdb(_0x3ffef5);
            });
        }, _0x5ebd92 = () => {
            if (_0x25940c)
                return;
            _0x25940c = !![], _0x1c0f0d = !![], _0x3a5a97(async () => {
                const _0x45344a = a0_0x5eca;
                if (_0x1fa312)
                    return;
                await _0x45151e[_0x45344a(0x3f2)](), _0x4a1cfc(), _0x1ca5c9();
                try {
                    _0x3ddf3c['反代Socket']?.['close']();
                } catch (_0x5d2f71) {
                }
            });
        };
    _0x46987e[_0x167c1a(0x571)](_0x167c1a(0x385), _0x49b1de => {
        const _0x51d283 = _0x167c1a;
        _0x2f7240(_0x49b1de[_0x51d283(0x25c)]);
    }), _0x46987e[_0x167c1a(0x571)](_0x167c1a(0x418), () => {
        closeSocketQuietly(_0x46987e), _0x5ebd92();
    }), _0x46987e[_0x167c1a(0x571)](_0x167c1a(0x35f), _0x537914 => {
        _0x4dd5ee(_0x537914);
    });
    if (!_0x48d1b8 && _0x2dfb13)
        try {
            const _0x1a3c9a = 解码WS早期数据(_0x2dfb13, _0x415ae8);
            if (_0x1a3c9a?.[_0x167c1a(0x574)])
                _0x2f7240(_0x1a3c9a[_0x167c1a(0x565)]);
        } catch (_0x953635) {
            _0x4dd5ee(_0x953635);
        }
    return new Response(null, {
        'status': 0x65,
        'webSocket': _0x1f966d,
        'headers': { 'Sec-WebSocket-Extensions': '' }
    });
}
const 木马文本解码器 = new TextDecoder();
function 解析木马反代地址(_0x1b7b39) {
    const _0xd5cafb = a0_0x43d2af, _0x545e03 = String(_0x1b7b39 || '')[_0xd5cafb(0x55a)]();
    if (!_0x545e03 || _0x545e03[_0xd5cafb(0x68e)]('/') || _0x545e03[_0xd5cafb(0x68e)]('@') || _0x545e03[_0xd5cafb(0x68e)](_0xd5cafb(0x248)))
        throw new Error(_0xd5cafb(0x284));
    let _0x1df5ad = '', _0x235d46 = '';
    if (_0x545e03[_0xd5cafb(0x661)]('[')) {
        const _0x420be3 = _0x545e03[_0xd5cafb(0x5f7)](/^(\[[^\]]+\]):(\d+)$/);
        if (!_0x420be3)
            throw new Error(_0xd5cafb(0x1d6));
        _0x1df5ad = _0x420be3[0x1], _0x235d46 = _0x420be3[0x2];
    } else {
        const _0x1c4b9b = _0x545e03[_0xd5cafb(0x492)](':');
        if (_0x1c4b9b[_0xd5cafb(0x292)] !== 0x2)
            throw new Error(_0xd5cafb(0x284));
        _0x1df5ad = _0x1c4b9b[0x0], _0x235d46 = _0x1c4b9b[0x1];
    }
    const _0x3ad94b = Number(_0x235d46);
    if (!_0x1df5ad || !Number['isInteger'](_0x3ad94b) || _0x3ad94b < 0x1 || _0x3ad94b > 0xffff)
        throw new Error(_0xd5cafb(0x550));
    return {
        'hostname': _0x1df5ad,
        'port': _0x3ad94b
    };
}
async function 连接木马反代(_0x83a997, _0x57ac1c, _0x12b436) {
    const _0x34b1cb = a0_0x43d2af;
    if (!_0x12b436)
        throw new Error(_0x34b1cb(0x5ed));
    const _0xaa2534 = _0x57ac1c({
        'hostname': stripIPv6Brackets(_0x12b436[_0x34b1cb(0x5ac)]),
        'port': _0x12b436[_0x34b1cb(0x4bb)]
    });
    let _0x1468ba = null;
    try {
        if (_0xaa2534[_0x34b1cb(0x272)])
            await _0xaa2534[_0x34b1cb(0x272)];
        return 有效数据长度(_0x83a997) > 0x0 && (_0x1468ba = _0xaa2534[_0x34b1cb(0x5ab)][_0x34b1cb(0x50b)](), await _0x1468ba[_0x34b1cb(0x668)](数据转Uint8Array(_0x83a997))), _0xaa2534;
    } catch (_0xfc6a33) {
        try {
            _0xaa2534?.[_0x34b1cb(0x418)]?.();
        } catch (_0x35e857) {
        }
        throw _0xfc6a33;
    } finally {
        try {
            _0x1468ba?.[_0x34b1cb(0x1d5)]();
        } catch (_0x5e078d) {
        }
    }
}
function 提取木马反代握手数据(_0x6cab5a, _0x257fdc) {
    const _0x1ae53b = a0_0x43d2af, _0x23bb25 = 数据转Uint8Array(_0x6cab5a), _0x27a29b = 数据转Uint8Array(_0x257fdc);
    if (!_0x27a29b[_0x1ae53b(0x574)])
        return _0x23bb25;
    const _0x1a5438 = _0x23bb25[_0x1ae53b(0x574)] - _0x27a29b[_0x1ae53b(0x574)];
    if (_0x1a5438 <= 0x0)
        return _0x23bb25;
    for (let _0x3ab835 = 0x0; _0x3ab835 < _0x27a29b[_0x1ae53b(0x574)]; _0x3ab835++) {
        if (_0x23bb25[_0x1a5438 + _0x3ab835] !== _0x27a29b[_0x3ab835])
            return _0x23bb25;
    }
    return _0x23bb25[_0x1ae53b(0x68d)](0x0, _0x1a5438);
}
async function 转发木马UDP反代数据(_0x517377, _0xa4f0c7, _0x35aebd, request) {
    const _0x399683 = a0_0x43d2af, _0x510d7c = 数据转Uint8Array(_0x517377);
    if (!_0x35aebd[_0x399683(0x522)]) {
        const _0x58ddaa = 创建请求TCP连接器(request), _0x1164fb = await 连接木马反代(_0x510d7c, _0x58ddaa, _0x35aebd['反代地址']);
        _0x35aebd[_0x399683(0x522)] = _0x1164fb, _0x1164fb[_0x399683(0x3ea)][_0x399683(0x5ec)](() => {
        })[_0x399683(0x3e9)](() => closeSocketQuietly(_0xa4f0c7)), connectStreams(_0x1164fb, _0xa4f0c7, null, null);
        return;
    }
    if (!_0x510d7c[_0x399683(0x574)])
        return;
    const _0x6bb10e = _0x35aebd['反代Socket'][_0x399683(0x5ab)][_0x399683(0x50b)]();
    try {
        await _0x6bb10e[_0x399683(0x668)](_0x510d7c);
    } finally {
        try {
            _0x6bb10e[_0x399683(0x1d5)]();
        } catch (_0x1e4396) {
        }
    }
}
function 解析木马请求(_0x3f074b, _0x157044) {
    const _0x3e6b6c = a0_0x43d2af, _0x195ba3 = 数据转Uint8Array(_0x3f074b), _0x1c9d95 = sha224(_0x157044);
    if (_0x195ba3[_0x3e6b6c(0x574)] < 0x3a)
        return {
            'hasError': !![],
            'message': _0x3e6b6c(0x54b)
        };
    let _0x3bab29 = 0x38;
    if (_0x195ba3[_0x3bab29] !== 0xd || _0x195ba3[_0x3bab29 + 0x1] !== 0xa)
        return {
            'hasError': !![],
            'message': _0x3e6b6c(0x32e)
        };
    for (let _0x3e8099 = 0x0; _0x3e8099 < _0x3bab29; _0x3e8099++) {
        if (_0x195ba3[_0x3e8099] !== _0x1c9d95['charCodeAt'](_0x3e8099))
            return {
                'hasError': !![],
                'message': _0x3e6b6c(0x1e1)
            };
    }
    const _0x39b7bb = _0x3bab29 + 0x2;
    if (_0x195ba3[_0x3e6b6c(0x574)] < _0x39b7bb + 0x6)
        return {
            'hasError': !![],
            'message': _0x3e6b6c(0x36c)
        };
    const _0x27b92a = _0x195ba3[_0x39b7bb];
    if (_0x27b92a !== 0x1 && _0x27b92a !== 0x3)
        return {
            'hasError': !![],
            'message': _0x3e6b6c(0x371)
        };
    const _0x130cd2 = _0x27b92a === 0x3, _0x1b657c = _0x195ba3[_0x39b7bb + 0x1];
    let _0x3f9443 = 0x0, _0x44adc2 = _0x39b7bb + 0x2, _0x47c0c7 = '';
    switch (_0x1b657c) {
    case 0x1:
        _0x3f9443 = 0x4;
        if (_0x195ba3[_0x3e6b6c(0x574)] < _0x44adc2 + _0x3f9443 + 0x4)
            return {
                'hasError': !![],
                'message': 'invalid\x20S5\x20request\x20data'
            };
        _0x47c0c7 = _0x195ba3[_0x44adc2] + '.' + _0x195ba3[_0x44adc2 + 0x1] + '.' + _0x195ba3[_0x44adc2 + 0x2] + '.' + _0x195ba3[_0x44adc2 + 0x3];
        break;
    case 0x3:
        if (_0x195ba3['byteLength'] < _0x44adc2 + 0x1)
            return {
                'hasError': !![],
                'message': _0x3e6b6c(0x36c)
            };
        _0x3f9443 = _0x195ba3[_0x44adc2], _0x44adc2 += 0x1;
        if (_0x195ba3[_0x3e6b6c(0x574)] < _0x44adc2 + _0x3f9443 + 0x4)
            return {
                'hasError': !![],
                'message': _0x3e6b6c(0x36c)
            };
        _0x47c0c7 = 木马文本解码器[_0x3e6b6c(0x49a)](_0x195ba3[_0x3e6b6c(0x68d)](_0x44adc2, _0x44adc2 + _0x3f9443));
        break;
    case 0x4:
        _0x3f9443 = 0x10;
        if (_0x195ba3[_0x3e6b6c(0x574)] < _0x44adc2 + _0x3f9443 + 0x4)
            return {
                'hasError': !![],
                'message': _0x3e6b6c(0x36c)
            };
        const _0x598824 = [];
        for (let _0x2b3c9e = 0x0; _0x2b3c9e < 0x8; _0x2b3c9e++) {
            const _0x2fcc8d = _0x44adc2 + _0x2b3c9e * 0x2;
            _0x598824[_0x3e6b6c(0x4a8)]((_0x195ba3[_0x2fcc8d] << 0x8 | _0x195ba3[_0x2fcc8d + 0x1])[_0x3e6b6c(0x592)](0x10));
        }
        _0x47c0c7 = _0x598824[_0x3e6b6c(0x4f1)](':');
        break;
    default:
        return {
            'hasError': !![],
            'message': _0x3e6b6c(0x3b5) + _0x1b657c
        };
    }
    if (!_0x47c0c7)
        return {
            'hasError': !![],
            'message': _0x3e6b6c(0x332) + _0x1b657c
        };
    const _0x44d9c0 = _0x44adc2 + _0x3f9443;
    if (_0x195ba3[_0x3e6b6c(0x574)] < _0x44d9c0 + 0x4)
        return {
            'hasError': !![],
            'message': _0x3e6b6c(0x36c)
        };
    const _0x61db3f = _0x195ba3[_0x44d9c0] << 0x8 | _0x195ba3[_0x44d9c0 + 0x1];
    return {
        'hasError': ![],
        'addressType': _0x1b657c,
        'port': _0x61db3f,
        'hostname': _0x47c0c7,
        'isUDP': _0x130cd2,
        'rawClientData': _0x195ba3[_0x3e6b6c(0x68d)](_0x44d9c0 + 0x4)
    };
}
const UUID字节缓存 = new Map(), 魏烈思文本解码器 = new TextDecoder();
function 读取十六进制半字节(_0x17f9ee) {
    if (_0x17f9ee >= 0x30 && _0x17f9ee <= 0x39)
        return _0x17f9ee - 0x30;
    _0x17f9ee |= 0x20;
    if (_0x17f9ee >= 0x61 && _0x17f9ee <= 0x66)
        return _0x17f9ee - 0x57;
    return -0x1;
}
function 获取UUID字节(_0xb284d6) {
    const _0x642285 = a0_0x43d2af, _0x2bd0a3 = String(_0xb284d6 || '');
    let _0x3a2a4e = UUID字节缓存[_0x642285(0x257)](_0x2bd0a3);
    if (_0x3a2a4e)
        return _0x3a2a4e;
    const _0x1e4d80 = _0x2bd0a3['replace'](/-/g, '');
    if (_0x1e4d80['length'] !== 0x20)
        return null;
    const _0x15075b = new Uint8Array(0x10);
    for (let _0x363f8e = 0x0; _0x363f8e < 0x10; _0x363f8e++) {
        const _0x1dc0a3 = 读取十六进制半字节(_0x1e4d80[_0x642285(0x411)](_0x363f8e * 0x2)), _0x3b52a2 = 读取十六进制半字节(_0x1e4d80[_0x642285(0x411)](_0x363f8e * 0x2 + 0x1));
        if (_0x1dc0a3 < 0x0 || _0x3b52a2 < 0x0)
            return null;
        _0x15075b[_0x363f8e] = _0x1dc0a3 << 0x4 | _0x3b52a2;
    }
    if (UUID字节缓存[_0x642285(0x469)] >= 0x20)
        UUID字节缓存['clear']();
    return UUID字节缓存['set'](_0x2bd0a3, _0x15075b), _0x15075b;
}
function UUID字节匹配(_0x59b824, _0x518972, _0x3bfb8c) {
    const _0x459e40 = a0_0x43d2af, _0x32b1e2 = 获取UUID字节(_0x3bfb8c);
    if (!_0x32b1e2 || _0x59b824[_0x459e40(0x574)] < _0x518972 + 0x10)
        return ![];
    for (let _0x4493c5 = 0x0; _0x4493c5 < 0x10; _0x4493c5++) {
        if (_0x59b824[_0x518972 + _0x4493c5] !== _0x32b1e2[_0x4493c5])
            return ![];
    }
    return !![];
}
function 解析魏烈思请求(_0x4b82a1, _0x1e1004) {
    const _0x3c00fe = a0_0x43d2af, _0x5a136c = 数据转Uint8Array(_0x4b82a1), _0x38ef5b = _0x5a136c[_0x3c00fe(0x574)];
    if (_0x38ef5b < 0x18)
        return {
            'hasError': !![],
            'message': _0x3c00fe(0x33d)
        };
    const _0xe65786 = _0x5a136c[0x0];
    if (!UUID字节匹配(_0x5a136c, 0x1, _0x1e1004))
        return {
            'hasError': !![],
            'message': _0x3c00fe(0x667)
        };
    const _0x5f56ee = _0x5a136c[0x11], _0x5703b5 = 0x12 + _0x5f56ee;
    if (_0x38ef5b < _0x5703b5 + 0x4)
        return {
            'hasError': !![],
            'message': _0x3c00fe(0x33d)
        };
    const _0x3d1034 = _0x5a136c[_0x5703b5];
    let _0x45e1c3 = ![];
    if (_0x3d1034 === 0x1) {
    } else {
        if (_0x3d1034 === 0x2)
            _0x45e1c3 = !![];
        else
            return {
                'hasError': !![],
                'message': _0x3c00fe(0x1e5)
            };
    }
    const _0x54a82d = _0x5703b5 + 0x1, _0x10db9e = _0x5a136c[_0x54a82d] << 0x8 | _0x5a136c[_0x54a82d + 0x1];
    let _0x2865fb = _0x54a82d + 0x3, _0x4d815b = 0x0, _0x32154b = '';
    const _0x2448cd = _0x5a136c[_0x54a82d + 0x2];
    switch (_0x2448cd) {
    case 0x1:
        _0x4d815b = 0x4;
        if (_0x38ef5b < _0x2865fb + _0x4d815b)
            return {
                'hasError': !![],
                'message': _0x3c00fe(0x33a)
            };
        _0x32154b = _0x5a136c[_0x2865fb] + '.' + _0x5a136c[_0x2865fb + 0x1] + '.' + _0x5a136c[_0x2865fb + 0x2] + '.' + _0x5a136c[_0x2865fb + 0x3];
        break;
    case 0x2:
        if (_0x38ef5b < _0x2865fb + 0x1)
            return {
                'hasError': !![],
                'message': 'Invalid\x20domain\x20length'
            };
        _0x4d815b = _0x5a136c[_0x2865fb], _0x2865fb += 0x1;
        if (_0x38ef5b < _0x2865fb + _0x4d815b)
            return {
                'hasError': !![],
                'message': _0x3c00fe(0x363)
            };
        _0x32154b = 魏烈思文本解码器[_0x3c00fe(0x49a)](_0x5a136c[_0x3c00fe(0x68d)](_0x2865fb, _0x2865fb + _0x4d815b));
        break;
    case 0x3:
        _0x4d815b = 0x10;
        if (_0x38ef5b < _0x2865fb + _0x4d815b)
            return {
                'hasError': !![],
                'message': _0x3c00fe(0x290)
            };
        const _0x1221e0 = [];
        for (let _0x54e069 = 0x0; _0x54e069 < 0x8; _0x54e069++) {
            const _0x424450 = _0x2865fb + _0x54e069 * 0x2;
            _0x1221e0[_0x3c00fe(0x4a8)]((_0x5a136c[_0x424450] << 0x8 | _0x5a136c[_0x424450 + 0x1])[_0x3c00fe(0x592)](0x10));
        }
        _0x32154b = _0x1221e0[_0x3c00fe(0x4f1)](':');
        break;
    default:
        return {
            'hasError': !![],
            'message': 'Invalid\x20address\x20type:\x20' + _0x2448cd
        };
    }
    if (!_0x32154b)
        return {
            'hasError': !![],
            'message': _0x3c00fe(0x224) + _0x2448cd
        };
    const _0x2d0837 = _0x2865fb + _0x4d815b;
    return {
        'hasError': ![],
        'addressType': _0x2448cd,
        'port': _0x10db9e,
        'hostname': _0x32154b,
        'isUDP': _0x45e1c3,
        'rawClientData': _0x5a136c['subarray'](_0x2d0837),
        'version': _0xe65786
    };
}
const SS支持加密配置 = {
        'aes-128-gcm': {
            'method': a0_0x43d2af(0x1df),
            'keyLen': 0x10,
            'saltLen': 0x10,
            'maxChunk': 0x3fff,
            'aesLength': 0x80
        },
        'aes-256-gcm': {
            'method': 'aes-256-gcm',
            'keyLen': 0x20,
            'saltLen': 0x20,
            'maxChunk': 0x3fff,
            'aesLength': 0x100
        }
    }, SSAEAD标签长度 = 0x10, SSNonce长度 = 0xc, SS子密钥信息 = new TextEncoder()['encode'](a0_0x43d2af(0x1ee)), SS文本编码器 = new TextEncoder(), SS文本解码器 = new TextDecoder(), SS主密钥缓存 = new Map();
function 数据转Uint8Array(_0x148715) {
    const _0x21bec8 = a0_0x43d2af;
    if (_0x148715 instanceof Uint8Array)
        return _0x148715;
    if (_0x148715 instanceof ArrayBuffer)
        return new Uint8Array(_0x148715);
    if (ArrayBuffer[_0x21bec8(0x2b5)](_0x148715))
        return new Uint8Array(_0x148715[_0x21bec8(0x565)], _0x148715['byteOffset'], _0x148715[_0x21bec8(0x574)]);
    return new Uint8Array(_0x148715 || 0x0);
}
function 拼接字节数据(..._0x14bf06) {
    const _0x48ec26 = a0_0x43d2af;
    if (!_0x14bf06 || _0x14bf06[_0x48ec26(0x292)] === 0x0)
        return new Uint8Array(0x0);
    const _0x5551d8 = _0x14bf06[_0x48ec26(0x2a7)](数据转Uint8Array), _0x209064 = _0x5551d8[_0x48ec26(0x394)]((_0x5c82c1, _0x15aca4) => _0x5c82c1 + _0x15aca4[_0x48ec26(0x574)], 0x0), _0x45335c = new Uint8Array(_0x209064);
    let _0x3e23a2 = 0x0;
    for (const _0x254890 of _0x5551d8) {
        _0x45335c[_0x48ec26(0x1f2)](_0x254890, _0x3e23a2), _0x3e23a2 += _0x254890[_0x48ec26(0x574)];
    }
    return _0x45335c;
}
async function 转发木马UDP数据(_0x55c3d0, _0xb141c5, _0x380832, request) {
    const _0x53a45b = a0_0x43d2af, _0x460371 = 数据转Uint8Array(_0x55c3d0);
    if (_0x380832?.[_0x53a45b(0x3a5)])
        return 转发木马UDP反代数据(_0x460371, _0xb141c5, _0x380832, request);
    const _0x2438cd = _0x380832?.['缓存'] instanceof Uint8Array ? _0x380832['缓存'] : new Uint8Array(0x0), _0x547a9b = _0x2438cd[_0x53a45b(0x574)] ? 拼接字节数据(_0x2438cd, _0x460371) : _0x460371;
    let _0x30600f = 0x0;
    while (_0x30600f < _0x547a9b[_0x53a45b(0x574)]) {
        const _0x1930ac = _0x30600f, _0x140970 = _0x547a9b[_0x30600f];
        let _0x22100e = _0x30600f + 0x1, _0x4547bc = 0x0;
        if (_0x140970 === 0x1)
            _0x4547bc = 0x4;
        else {
            if (_0x140970 === 0x4)
                _0x4547bc = 0x10;
            else {
                if (_0x140970 === 0x3) {
                    if (_0x547a9b[_0x53a45b(0x574)] < _0x22100e + 0x1)
                        break;
                    _0x4547bc = 0x1 + _0x547a9b[_0x22100e];
                } else
                    throw new Error(_0x53a45b(0x628) + _0x140970);
            }
        }
        const _0x1f6e2a = _0x22100e + _0x4547bc;
        if (_0x547a9b[_0x53a45b(0x574)] < _0x1f6e2a + 0x6)
            break;
        const _0x371526 = _0x547a9b[_0x1f6e2a] << 0x8 | _0x547a9b[_0x1f6e2a + 0x1], _0x58ec58 = _0x547a9b[_0x1f6e2a + 0x2] << 0x8 | _0x547a9b[_0x1f6e2a + 0x3];
        if (_0x547a9b[_0x1f6e2a + 0x4] !== 0xd || _0x547a9b[_0x1f6e2a + 0x5] !== 0xa)
            throw new Error(_0x53a45b(0x6a5));
        const _0x30dd42 = _0x1f6e2a + 0x6, _0x3df4af = _0x30dd42 + _0x58ec58;
        if (_0x547a9b[_0x53a45b(0x574)] < _0x3df4af)
            break;
        const _0x2c164e = _0x547a9b['slice'](_0x1930ac, _0x1f6e2a + 0x2), _0x2bc53c = _0x547a9b[_0x53a45b(0x548)](_0x30dd42, _0x3df4af);
        _0x30600f = _0x3df4af;
        if (_0x371526 !== 0x35)
            throw new Error(_0x53a45b(0x3c1));
        if (!_0x2bc53c[_0x53a45b(0x574)])
            continue;
        let _0xd2c292 = _0x2bc53c;
        (_0x2bc53c[_0x53a45b(0x574)] < 0x2 || (_0x2bc53c[0x0] << 0x8 | _0x2bc53c[0x1]) !== _0x2bc53c[_0x53a45b(0x574)] - 0x2) && (_0xd2c292 = new Uint8Array(_0x2bc53c[_0x53a45b(0x574)] + 0x2), _0xd2c292[0x0] = _0x2bc53c[_0x53a45b(0x574)] >>> 0x8 & 0xff, _0xd2c292[0x1] = _0x2bc53c[_0x53a45b(0x574)] & 0xff, _0xd2c292[_0x53a45b(0x1f2)](_0x2bc53c, 0x2));
        const _0x4978ac = { '缓存': new Uint8Array(0x0) };
        await forwardataudp(_0xd2c292, _0xb141c5, null, request, _0x10a7e7 => {
            const _0x4b932d = _0x53a45b, _0x6f439 = 数据转Uint8Array(_0x10a7e7), _0x197ba8 = _0x4978ac['缓存'][_0x4b932d(0x574)] ? 拼接字节数据(_0x4978ac['缓存'], _0x6f439) : _0x6f439, _0x49d0af = [];
            let _0xe02532 = 0x0;
            while (_0xe02532 + 0x2 <= _0x197ba8[_0x4b932d(0x574)]) {
                const _0x3cb284 = _0x197ba8[_0xe02532] << 0x8 | _0x197ba8[_0xe02532 + 0x1], _0x11ec2d = _0xe02532 + 0x2, _0x1f5792 = _0x11ec2d + _0x3cb284;
                if (_0x1f5792 > _0x197ba8[_0x4b932d(0x574)])
                    break;
                const _0x412f61 = _0x197ba8['slice'](_0x11ec2d, _0x1f5792), _0xf341cd = new Uint8Array(_0x2c164e[_0x4b932d(0x574)] + 0x4 + _0x412f61[_0x4b932d(0x574)]);
                _0xf341cd['set'](_0x2c164e, 0x0), _0xf341cd[_0x2c164e['byteLength']] = _0x412f61[_0x4b932d(0x574)] >>> 0x8 & 0xff, _0xf341cd[_0x2c164e['byteLength'] + 0x1] = _0x412f61[_0x4b932d(0x574)] & 0xff, _0xf341cd[_0x2c164e[_0x4b932d(0x574)] + 0x2] = 0xd, _0xf341cd[_0x2c164e[_0x4b932d(0x574)] + 0x3] = 0xa, _0xf341cd[_0x4b932d(0x1f2)](_0x412f61, _0x2c164e['byteLength'] + 0x4), _0x49d0af[_0x4b932d(0x4a8)](_0xf341cd), _0xe02532 = _0x1f5792;
            }
            return _0x4978ac['缓存'] = _0x197ba8['slice'](_0xe02532), _0x49d0af[_0x4b932d(0x292)] ? _0x49d0af : new Uint8Array(0x0);
        });
    }
    if (_0x380832)
        _0x380832['缓存'] = _0x547a9b[_0x53a45b(0x548)](_0x30600f);
}
function SS递增Nonce计数器(_0x465a0a) {
    const _0x468634 = a0_0x43d2af;
    for (let _0x1dd54a = 0x0; _0x1dd54a < _0x465a0a[_0x468634(0x292)]; _0x1dd54a++) {
        _0x465a0a[_0x1dd54a] = _0x465a0a[_0x1dd54a] + 0x1 & 0xff;
        if (_0x465a0a[_0x1dd54a] !== 0x0)
            return;
    }
}
async function SS派生主密钥(_0x44b085, _0x2b907a) {
    const _0x3e844a = a0_0x43d2af, _0x33746d = _0x2b907a + ':' + _0x44b085;
    if (SS主密钥缓存[_0x3e844a(0x53a)](_0x33746d))
        return SS主密钥缓存[_0x3e844a(0x257)](_0x33746d);
    const _0x43723c = ((async () => {
        const _0x2a0705 = _0x3e844a, _0x14688f = SS文本编码器[_0x2a0705(0x564)](_0x44b085 || '');
        let _0x42d3ac = new Uint8Array(0x0), _0x5e4b41 = new Uint8Array(0x0);
        while (_0x5e4b41[_0x2a0705(0x574)] < _0x2b907a) {
            const _0x162a1f = new Uint8Array(_0x42d3ac[_0x2a0705(0x574)] + _0x14688f['byteLength']);
            _0x162a1f[_0x2a0705(0x1f2)](_0x42d3ac, 0x0), _0x162a1f['set'](_0x14688f, _0x42d3ac[_0x2a0705(0x574)]), _0x42d3ac = new Uint8Array(await crypto['subtle'][_0x2a0705(0x39a)](_0x2a0705(0x451), _0x162a1f)), _0x5e4b41 = 拼接字节数据(_0x5e4b41, _0x42d3ac);
        }
        return _0x5e4b41[_0x2a0705(0x548)](0x0, _0x2b907a);
    })());
    SS主密钥缓存[_0x3e844a(0x1f2)](_0x33746d, _0x43723c);
    try {
        return await _0x43723c;
    } catch (_0xf455a6) {
        SS主密钥缓存['delete'](_0x33746d);
        throw _0xf455a6;
    }
}
async function SS派生会话密钥(_0x4c399b, _0xdddefd, _0x3958d5, _0x304af2) {
    const _0x2e8517 = a0_0x43d2af, _0x3d2777 = {
            'name': 'HMAC',
            'hash': 'SHA-1'
        }, _0x35ca7c = await crypto[_0x2e8517(0x5be)][_0x2e8517(0x50e)](_0x2e8517(0x1b9), _0x3958d5, _0x3d2777, ![], [_0x2e8517(0x48c)]), _0x40d4a5 = new Uint8Array(await crypto[_0x2e8517(0x5be)][_0x2e8517(0x48c)](_0x2e8517(0x1b2), _0x35ca7c, _0xdddefd)), _0x2c57ae = await crypto['subtle'][_0x2e8517(0x50e)](_0x2e8517(0x1b9), _0x40d4a5, _0x3d2777, ![], [_0x2e8517(0x48c)]), _0x331d09 = new Uint8Array(_0x4c399b[_0x2e8517(0x300)]);
    let _0x513b46 = new Uint8Array(0x0), _0x16d5df = 0x0, _0x1937ce = 0x1;
    while (_0x16d5df < _0x4c399b[_0x2e8517(0x300)]) {
        const _0x1c93de = 拼接字节数据(_0x513b46, SS子密钥信息, new Uint8Array([_0x1937ce]));
        _0x513b46 = new Uint8Array(await crypto[_0x2e8517(0x5be)][_0x2e8517(0x48c)](_0x2e8517(0x1b2), _0x2c57ae, _0x1c93de));
        const _0x1ac0bf = Math[_0x2e8517(0x572)](_0x513b46[_0x2e8517(0x574)], _0x4c399b[_0x2e8517(0x300)] - _0x16d5df);
        _0x331d09['set'](_0x513b46['subarray'](0x0, _0x1ac0bf), _0x16d5df), _0x16d5df += _0x1ac0bf, _0x1937ce += 0x1;
    }
    return crypto[_0x2e8517(0x5be)][_0x2e8517(0x50e)](_0x2e8517(0x1b9), _0x331d09, {
        'name': 'AES-GCM',
        'length': _0x4c399b[_0x2e8517(0x282)]
    }, ![], _0x304af2);
}
async function SSAEAD加密(_0x12500c, _0x47d2cc, _0x1837d8) {
    const _0x27e2c7 = a0_0x43d2af, _0x3e40f6 = _0x47d2cc[_0x27e2c7(0x548)](), _0xb4929e = await crypto[_0x27e2c7(0x5be)][_0x27e2c7(0x5df)]({
            'name': _0x27e2c7(0x625),
            'iv': _0x3e40f6,
            'tagLength': 0x80
        }, _0x12500c, _0x1837d8);
    return SS递增Nonce计数器(_0x47d2cc), new Uint8Array(_0xb4929e);
}
async function SSAEAD解密(_0x26186d, _0x4ccb2e, _0x45e18f) {
    const _0x35db9b = a0_0x43d2af, _0x33db6c = _0x4ccb2e[_0x35db9b(0x548)](), _0x432b0c = await crypto[_0x35db9b(0x5be)]['decrypt']({
            'name': _0x35db9b(0x625),
            'iv': _0x33db6c,
            'tagLength': 0x80
        }, _0x26186d, _0x45e18f);
    return SS递增Nonce计数器(_0x4ccb2e), new Uint8Array(_0x432b0c);
}
async function forwardataTCP(_0x2053c4, _0x3e3d34, _0x3af4b4, _0x5e8c58, _0x12f4c6, _0x1b94a3, _0x52a184, request = null, _0x39645a = {}, _0x1ca659 = ![], _0x536466 = null, _0x112fd2 = ![]) {
    const _0x5bbb59 = a0_0x43d2af, _0x25c3db = _0x39645a[_0x5bbb59(0x408)] || '', _0x3d7432 = _0x39645a[_0x5bbb59(0x2af)] !== undefined ? _0x39645a['代理类型'] : null, _0x536842 = _0x39645a[_0x5bbb59(0x602)] !== undefined ? _0x39645a['代理全局'] : ![], _0x31a259 = _0x39645a[_0x5bbb59(0x2e5)] || {}, _0x30e2c4 = _0x39645a['反代兜底'] !== undefined ? _0x39645a[_0x5bbb59(0x426)] : !![];
    let _0x4693f1 = 0x0;
    log(_0x5bbb59(0x62d) + _0x2053c4 + ':' + _0x3e3d34 + _0x5bbb59(0x39e) + _0x25c3db + _0x5bbb59(0x536) + (_0x30e2c4 ? '是' : '否') + '\x20|\x20反代类型:\x20' + (_0x3d7432 || _0x5bbb59(0x48b)) + _0x5bbb59(0x43d) + (_0x536842 ? '是' : '否'));
    const _0x40ea37 = 0x3e8;
    let _0x472822 = ![];
    const _0x535515 = 创建请求TCP连接器(request), _0x333722 = _0x1ca659 && (_0x39645a[_0x5bbb59(0x3a2)] || null), _0x2eaaa7 = _0x333722 ? _0x39645a[_0x5bbb59(0x3a2)] : null, _0x506db8 = _0x333722 ? 提取木马反代握手数据(_0x536466, _0x3af4b4) : null;
    let _0x5099b6 = _0x12f4c6;
    const _0x14d2f6 = () => {
        const _0x5b6cbe = _0x5099b6;
        return _0x5099b6 = null, _0x5b6cbe;
    };
    if (!Number[_0x5bbb59(0x32d)](_0x1b94a3['generation']))
        _0x1b94a3[_0x5bbb59(0x3b7)] = 0x0;
    const _0x26e0bb = async (_0x29228e, _0x4198e1, _0x3857db, _0x14ab53 = null) => {
        const _0x4c4a47 = _0x5bbb59;
        try {
            await _0x3857db;
        } catch (_0x2e018e) {
            if (_0x1b94a3[_0x4c4a47(0x5f1)] === _0x3857db)
                _0x1b94a3[_0x4c4a47(0x5f1)] = Promise['resolve']();
            try {
                _0x29228e?.[_0x4c4a47(0x418)]?.();
            } catch (_0x31cd47) {
            }
            if (_0x1b94a3['generation'] === _0x4198e1)
                closeSocketQuietly(_0x5e8c58);
            throw _0x2e018e;
        }
        if (_0x1b94a3['downlinkDrain'] === _0x3857db)
            _0x1b94a3[_0x4c4a47(0x5f1)] = Promise[_0x4c4a47(0x58b)]();
        const _0x103254 = () => _0x1b94a3['generation'] === _0x4198e1 && _0x1b94a3[_0x4c4a47(0x67b)] === _0x29228e;
        if (_0x1b94a3[_0x4c4a47(0x3b7)] !== _0x4198e1 || _0x5e8c58[_0x4c4a47(0x1f7)] !== WebSocket[_0x4c4a47(0x63f)]) {
            try {
                _0x29228e?.[_0x4c4a47(0x418)]?.();
            } catch (_0x1edeb2) {
            }
            if (_0x1b94a3[_0x4c4a47(0x3b7)] === _0x4198e1)
                _0x1b94a3[_0x4c4a47(0x67b)] = null;
            throw new Error(_0x4c4a47(0x537));
        }
        _0x1b94a3[_0x4c4a47(0x67b)] = _0x29228e;
        if (_0x112fd2)
            return _0x29228e;
        return connectStreams(_0x29228e, _0x5e8c58, _0x14d2f6, _0x14ab53, _0x103254, _0x1b94a3)[_0x4c4a47(0x5ec)](_0x56163a => {
            const _0x9b9f80 = _0x4c4a47;
            if (!_0x103254())
                return;
            log(_0x9b9f80(0x405) + (_0x56163a?.[_0x9b9f80(0x385)] || _0x56163a));
            try {
                _0x29228e?.[_0x9b9f80(0x418)]?.();
            } catch (_0x4dd9a1) {
            }
            closeSocketQuietly(_0x5e8c58);
        }), !![];
    };
    async function _0x3e79b7(_0x358013, _0x51424f = _0x40ea37) {
        const _0x25a9e5 = _0x5bbb59;
        await Promise[_0x25a9e5(0x5f2)]([
            _0x358013[_0x25a9e5(0x272)],
            new Promise((_0x146449, _0x37372d) => setTimeout(() => _0x37372d(new Error(_0x25a9e5(0x3a8))), _0x51424f))
        ]);
    }
    async function _0x50e2d4(_0x399901, _0x309e9a) {
        const _0x4b449b = _0x5bbb59, _0x4c1108 = _0x535515({
                'hostname': _0x399901,
                'port': _0x309e9a
            });
        try {
            return await _0x3e79b7(_0x4c1108), _0x4c1108;
        } catch (_0x3cc11e) {
            try {
                _0x4c1108?.[_0x4b449b(0x418)]?.();
            } catch (_0x2d632b) {
            }
            throw _0x3cc11e;
        }
    }
    async function _0x43d343(_0x4b62d2, _0x95336d) {
        const _0x16c49c = _0x5bbb59;
        if (有效数据长度(_0x95336d) <= 0x0)
            return;
        const _0x272bd7 = _0x4b62d2[_0x16c49c(0x5ab)][_0x16c49c(0x50b)]();
        try {
            await _0x272bd7['write'](数据转Uint8Array(_0x95336d));
        } finally {
            try {
                _0x272bd7[_0x16c49c(0x1d5)]();
            } catch (_0x2b6006) {
            }
        }
    }
    async function _0xe5ecd4(_0x32e170) {
        const _0x1ef1e9 = _0x5bbb59;
        if (_0x32e170[_0x1ef1e9(0x292)] === 0x1) {
            const _0x561727 = _0x32e170[0x0];
            return {
                'socket': await _0x50e2d4(_0x561727[_0x1ef1e9(0x5ac)], _0x561727['port']),
                'candidate': _0x561727
            };
        }
        const _0x21fa4f = _0x32e170['map'](_0x4bb523 => _0x50e2d4(_0x4bb523[_0x1ef1e9(0x5ac)], _0x4bb523[_0x1ef1e9(0x4bb)])[_0x1ef1e9(0x56e)](_0x1a9ee3 => ({
            'socket': _0x1a9ee3,
            'candidate': _0x4bb523
        })));
        let _0x13df88 = null;
        try {
            return _0x13df88 = await Promise[_0x1ef1e9(0x289)](_0x21fa4f), _0x13df88;
        } finally {
            if (_0x13df88)
                for (const _0x56a66 of _0x21fa4f) {
                    _0x56a66[_0x1ef1e9(0x56e)](({socket: _0x11c728}) => {
                        const _0x507c99 = _0x1ef1e9;
                        if (_0x11c728 !== _0x13df88[_0x507c99(0x67b)])
                            try {
                                _0x11c728?.[_0x507c99(0x418)]?.();
                            } catch (_0x42d718) {
                            }
                    })[_0x1ef1e9(0x5ec)](() => {
                    });
                }
        }
    }
    async function _0x5e5779(_0x1e2168, _0x57f465) {
        const _0x11fc15 = _0x5bbb59;
        if (!预加载竞速拨号 || isIPHostname(_0x1e2168))
            return null;
        log('[TCP直连]\x20预加载竞速拨号开启，开始并发查询\x20' + _0x1e2168 + _0x11fc15(0x4c2));
        const [_0x3a8d7d, _0x212a7c] = await Promise[_0x11fc15(0x369)]([
                DoH查询(_0x1e2168, 'A'),
                DoH查询(_0x1e2168, _0x11fc15(0x243))
            ]), _0x31acd9 = [...new Set(_0x3a8d7d[_0x11fc15(0x1fd)](_0x546dfa => {
                    const _0x40acbd = _0x11fc15, _0x2e0bb8 = _0x546dfa[_0x40acbd(0x25c)];
                    return _0x546dfa[_0x40acbd(0x3c6)] === 0x1 && typeof _0x2e0bb8 === _0x40acbd(0x615) && isIPv4(_0x2e0bb8) ? [_0x2e0bb8] : [];
                }))], _0x4a4f27 = [...new Set(_0x212a7c[_0x11fc15(0x1fd)](_0x31fb45 => {
                    const _0x4f13dc = _0x11fc15, _0x2ec395 = _0x31fb45[_0x4f13dc(0x25c)];
                    return _0x31fb45['type'] === 0x1c && typeof _0x2ec395 === _0x4f13dc(0x615) && isIPHostname(_0x2ec395) ? [_0x2ec395] : [];
                }))], _0x1a27b6 = Math[_0x11fc15(0x209)](0x1, TCP并发拨号数 | 0x0), _0x4800a6 = _0x31acd9[_0x11fc15(0x292)] >= _0x1a27b6 ? _0x31acd9[_0x11fc15(0x548)](0x0, _0x1a27b6) : _0x31acd9[_0x11fc15(0x283)](_0x4a4f27['slice'](0x0, _0x1a27b6 - _0x31acd9[_0x11fc15(0x292)])), _0x5025fe = _0x31acd9[_0x11fc15(0x292)] > 0x0 ? _0x4800a6[_0x11fc15(0x292)] > _0x31acd9[_0x11fc15(0x292)] ? 'A+AAAA' : 'A' : _0x11fc15(0x243);
        if (_0x4800a6[_0x11fc15(0x292)] === 0x0)
            return log('[TCP直连]\x20' + _0x1e2168 + _0x11fc15(0x41d)), null;
        const _0xf74499 = _0x4800a6;
        return log(_0x11fc15(0x640) + _0x1e2168 + _0x11fc15(0x3fb) + _0x31acd9[_0x11fc15(0x292)] + _0x11fc15(0x212) + _0x4a4f27[_0x11fc15(0x292)] + _0x11fc15(0x575) + _0x5025fe + _0x11fc15(0x43f) + _0xf74499[_0x11fc15(0x292)] + '/' + _0x1a27b6 + ':\x20' + _0xf74499[_0x11fc15(0x4f1)](',\x20')), _0xf74499[_0x11fc15(0x2a7)]((_0x6d3858, _0x48b38a) => ({
            'hostname': _0x6d3858,
            'port': _0x57f465,
            'attempt': _0x48b38a,
            'resolvedFrom': _0x1e2168
        }));
    }
    async function _0x211464(_0x5136e2, _0x4a4675, _0x1d1d30 = null, _0x50ea7b = ![]) {
        const _0x388878 = _0x5bbb59, _0x5a81ec = _0x50ea7b ? await _0x5e5779(_0x5136e2, _0x4a4675) : null, _0x1ab06d = _0x5a81ec || Array['from']({ 'length': TCP并发拨号数 }, (_0xf67aac, _0x4bd659) => ({
                'hostname': _0x5136e2,
                'port': _0x4a4675,
                'attempt': _0x4bd659
            }));
        log(_0x5a81ec ? _0x388878(0x228) + _0x1ab06d[_0x388878(0x292)] + '\x20路:\x20' + _0x1ab06d[_0x388878(0x2a7)](_0x507f60 => _0x507f60[_0x388878(0x5ac)] + ':' + _0x507f60[_0x388878(0x4bb)])[_0x388878(0x4f1)](',\x20') : _0x388878(0x228) + _0x1ab06d[_0x388878(0x292)] + _0x388878(0x297) + _0x5136e2 + ':' + _0x4a4675);
        let _0x4cf51b = null;
        try {
            const _0x4077fb = await _0xe5ecd4(_0x1ab06d);
            _0x4cf51b = _0x4077fb[_0x388878(0x67b)];
            if (_0x5a81ec) {
                const _0x21cd8c = _0x4077fb[_0x388878(0x5e0)];
                log(_0x388878(0x579) + _0x21cd8c[_0x388878(0x5ac)] + ':' + _0x21cd8c[_0x388878(0x4bb)] + _0x388878(0x5b8) + (_0x21cd8c[_0x388878(0x493)] || _0x5136e2));
            }
            return await _0x43d343(_0x4cf51b, _0x1d1d30), _0x4cf51b;
        } catch (_0x2cf457) {
            try {
                _0x4cf51b?.[_0x388878(0x418)]?.();
            } catch (_0x4c6c51) {
            }
            if (_0x5a81ec)
                log('[TCP直连]\x20预加载竞速失败:\x20' + (_0x2cf457[_0x388878(0x385)] || _0x2cf457));
            throw _0x2cf457;
        }
    }
    async function _0x235df5(_0x1a7713, _0x2efbbc, _0x3862bd = null, _0x1a0850 = null, _0x4940ad = !![]) {
        const _0xaea36c = _0x5bbb59;
        if (_0x1a0850 && _0x1a0850[_0xaea36c(0x292)] > 0x0) {
            const _0x12673a = Math['max'](0x1, Math['floor'](Number(反代并发拨号数) || 0x1));
            for (let _0x31cf4f = 0x0; _0x31cf4f < _0x1a0850['length']; _0x31cf4f += _0x12673a) {
                const _0x1fbff4 = [];
                for (let _0x2f2f51 = 0x0; _0x2f2f51 < _0x12673a && _0x31cf4f + _0x2f2f51 < _0x1a0850[_0xaea36c(0x292)]; _0x2f2f51++) {
                    const _0x14cd40 = (_0x4693f1 + _0x31cf4f + _0x2f2f51) % _0x1a0850[_0xaea36c(0x292)], [_0x209793, _0x41e8ad] = _0x1a0850[_0x14cd40];
                    _0x1fbff4['push']({
                        'hostname': _0x209793,
                        'port': _0x41e8ad,
                        'index': _0x14cd40
                    });
                }
                let _0x39df94 = null, _0x4411f9 = null;
                try {
                    log(_0xaea36c(0x481) + _0x1fbff4[_0xaea36c(0x292)] + _0xaea36c(0x297) + _0x1fbff4[_0xaea36c(0x2a7)](_0x1f9d17 => _0x1f9d17[_0xaea36c(0x5ac)] + ':' + _0x1f9d17[_0xaea36c(0x4bb)])[_0xaea36c(0x4f1)](',\x20'));
                    const _0x36011d = await _0xe5ecd4(_0x1fbff4);
                    return _0x39df94 = _0x36011d['socket'], _0x4411f9 = _0x36011d[_0xaea36c(0x5e0)], await _0x43d343(_0x39df94, _0x3862bd), log(_0xaea36c(0x64a) + _0x4411f9[_0xaea36c(0x5ac)] + ':' + _0x4411f9['port'] + _0xaea36c(0x3e4) + _0x4411f9[_0xaea36c(0x2ef)] + ')'), _0x4693f1 = _0x4411f9[_0xaea36c(0x2ef)], _0x39df94;
                } catch (_0x58b3f7) {
                    try {
                        _0x39df94?.[_0xaea36c(0x418)]?.();
                    } catch (_0x4295e3) {
                    }
                    log(_0xaea36c(0x47e) + (_0x58b3f7['message'] || _0x58b3f7));
                }
            }
        }
        if (_0x4940ad)
            return _0x211464(_0x1a7713, _0x2efbbc, _0x3862bd, ![]);
        else
            throw new Error(_0xaea36c(0x587));
    }
    async function _0x4ac6f7(_0x5dfd70 = !![]) {
        const _0x57d3ac = _0x5bbb59;
        if (_0x1b94a3[_0x57d3ac(0x5bc)]) {
            await _0x1b94a3[_0x57d3ac(0x5bc)];
            return;
        }
        const {
            generation: _0x44b449,
            downlinkDrain: _0x5331d7
        } = 开始TCP连接世代(_0x1b94a3);
        let _0x4d1cd7 = ![], _0x3f10c7 = null;
        _0x333722 ? _0x5dfd70 && !_0x472822 && 有效数据长度(_0x536466) > 0x0 ? (_0x3f10c7 = _0x536466, _0x4d1cd7 = 有效数据长度(_0x3af4b4) > 0x0) : _0x3f10c7 = _0x506db8 : (_0x4d1cd7 = _0x5dfd70 && !_0x472822 && 有效数据长度(_0x3af4b4) > 0x0, _0x3f10c7 = _0x4d1cd7 ? _0x3af4b4 : null);
        const _0x5af946 = ((async () => {
            const _0x2fa8df = _0x57d3ac;
            let _0x1511af = null;
            try {
                if (_0x333722)
                    log(_0x2fa8df(0x3ae) + _0x2053c4 + ':' + _0x3e3d34), _0x1511af = await 连接木马反代(_0x3f10c7, _0x535515, _0x2eaaa7);
                else {
                    if (_0x3d7432 === _0x2fa8df(0x626))
                        log(_0x2fa8df(0x3e0) + _0x2053c4 + ':' + _0x3e3d34), _0x1511af = await socks5Connect(_0x2053c4, _0x3e3d34, _0x3f10c7, _0x535515, _0x31a259);
                    else {
                        if (_0x3d7432 === _0x2fa8df(0x543))
                            log(_0x2fa8df(0x20e) + _0x2053c4 + ':' + _0x3e3d34), _0x1511af = await httpConnect(_0x2053c4, _0x3e3d34, _0x3f10c7, ![], _0x535515, _0x31a259);
                        else {
                            if (_0x3d7432 === _0x2fa8df(0x2d6))
                                log(_0x2fa8df(0x1c3) + _0x2053c4 + ':' + _0x3e3d34), _0x1511af = isIPHostname(_0x31a259[_0x2fa8df(0x5ac)]) ? await httpsConnect(_0x2053c4, _0x3e3d34, _0x3f10c7, _0x535515, _0x31a259) : await httpConnect(_0x2053c4, _0x3e3d34, _0x3f10c7, !![], _0x535515, _0x31a259);
                            else {
                                if (_0x3d7432 === 'turn') {
                                    log(_0x2fa8df(0x33c) + _0x2053c4 + ':' + _0x3e3d34), _0x1511af = await turnConnect(_0x31a259, _0x2053c4, _0x3e3d34, _0x535515);
                                    if (有效数据长度(_0x3f10c7) > 0x0) {
                                        const _0x29da42 = _0x1511af['writable'][_0x2fa8df(0x50b)]();
                                        try {
                                            await _0x29da42[_0x2fa8df(0x668)](数据转Uint8Array(_0x3f10c7));
                                        } finally {
                                            try {
                                                _0x29da42[_0x2fa8df(0x1d5)]();
                                            } catch (_0x5c37af) {
                                            }
                                        }
                                    }
                                } else {
                                    if (_0x3d7432 === 'sstp') {
                                        log('[SSTP代理]\x20代理到:\x20' + _0x2053c4 + ':' + _0x3e3d34), _0x1511af = await sstpConnect(_0x31a259, _0x2053c4, _0x3e3d34, _0x535515);
                                        if (有效数据长度(_0x3f10c7) > 0x0) {
                                            const _0x18880e = _0x1511af[_0x2fa8df(0x5ab)][_0x2fa8df(0x50b)]();
                                            try {
                                                await _0x18880e[_0x2fa8df(0x668)](数据转Uint8Array(_0x3f10c7));
                                            } finally {
                                                try {
                                                    _0x18880e['releaseLock']();
                                                } catch (_0x23ec04) {
                                                }
                                            }
                                        }
                                    } else {
                                        log(_0x2fa8df(0x61e) + _0x2053c4 + ':' + _0x3e3d34);
                                        const _0x20e134 = await 解析地址端口(_0x25c3db, _0x2053c4, _0x52a184);
                                        _0x1511af = await _0x235df5(特征码字典[0x0] + _0x2fa8df(0x67c) + 特征码字典[0x2] + _0x2fa8df(0x302), 0x1, _0x3f10c7, _0x20e134, _0x30e2c4);
                                    }
                                }
                            }
                        }
                    }
                }
                await _0x26e0bb(_0x1511af, _0x44b449, _0x5331d7);
                if (_0x4d1cd7)
                    _0x472822 = !![];
            } catch (_0x39156e) {
                try {
                    _0x1511af?.['close']?.();
                } catch (_0x5d0568) {
                }
                if (_0x1b94a3[_0x2fa8df(0x3b7)] === _0x44b449) {
                    _0x1b94a3[_0x2fa8df(0x67b)] = null, closeSocketQuietly(_0x5e8c58);
                    throw _0x39156e;
                }
            }
        })());
        _0x1b94a3[_0x57d3ac(0x5bc)] = _0x5af946;
        try {
            await _0x5af946;
        } finally {
            _0x1b94a3[_0x57d3ac(0x5bc)] === _0x5af946 && (_0x1b94a3[_0x57d3ac(0x5bc)] = null);
        }
    }
    _0x1b94a3['retryConnect'] = async () => _0x4ac6f7(!_0x472822);
    if (_0x3d7432 && (_0x536842 || SOCKS5白名单[_0x5bbb59(0x507)](_0x588ef3 => new RegExp('^' + _0x588ef3[_0x5bbb59(0x680)](/\*/g, '.*') + '$', 'i')[_0x5bbb59(0x247)](_0x2053c4)))) {
        log(_0x5bbb59(0x644));
        try {
            await _0x4ac6f7();
            if (_0x112fd2)
                return _0x1b94a3[_0x5bbb59(0x67b)];
        } catch (_0x2057b0) {
            log('[TCP转发]\x20SOCKS5/HTTP/HTTPS/TURN/SSTP\x20代理连接失败:\x20' + _0x2057b0[_0x5bbb59(0x385)]);
            throw _0x2057b0;
        }
    } else {
        let _0x2b2f44 = _0x1b94a3[_0x5bbb59(0x3b7)];
        try {
            log(_0x5bbb59(0x431) + _0x2053c4 + ':' + _0x3e3d34);
            const _0xe8066a = 开始TCP连接世代(_0x1b94a3);
            _0x2b2f44 = _0xe8066a[_0x5bbb59(0x3b7)];
            const _0x424a00 = await _0x211464(_0x2053c4, _0x3e3d34, _0x3af4b4, !![]);
            await _0x26e0bb(_0x424a00, _0x2b2f44, _0xe8066a['downlinkDrain'], async () => {
                const _0x34d05f = _0x5bbb59;
                if (_0x1b94a3[_0x34d05f(0x3b7)] !== _0x2b2f44 || _0x1b94a3['socket'] !== _0x424a00)
                    return;
                await _0x4ac6f7();
            });
            if (_0x112fd2)
                return _0x424a00;
        } catch (_0x58f864) {
            log(_0x5bbb59(0x3c3) + _0x2053c4 + ':' + _0x3e3d34 + _0x5bbb59(0x249) + _0x58f864[_0x5bbb59(0x385)]);
            if (_0x1b94a3[_0x5bbb59(0x3b7)] !== _0x2b2f44)
                throw _0x58f864;
            if (_0x58f864 instanceof Error && _0x58f864[_0x5bbb59(0x1b6)] === _0x5bbb59(0x1cb)) {
                closeSocketQuietly(_0x5e8c58);
                throw _0x58f864;
            }
            if (_0x5e8c58[_0x5bbb59(0x1f7)] !== WebSocket['OPEN'])
                throw _0x58f864;
            await _0x4ac6f7();
            if (_0x112fd2)
                return _0x1b94a3[_0x5bbb59(0x67b)];
        }
    }
}
async function forwardataudp(_0x5b993d, _0x12e315, _0x529290, request, _0xd41dae = null) {
    const _0x79d75c = a0_0x43d2af, _0x1251d2 = 数据转Uint8Array(_0x5b993d), _0x4f038d = _0x1251d2[_0x79d75c(0x574)];
    log(_0x79d75c(0x4b8) + _0x4f038d + _0x79d75c(0x370));
    try {
        const _0xb2acb5 = 创建请求TCP连接器(request), _0x4006e6 = _0xb2acb5({
                'hostname': '8.8.4.4',
                'port': 0x35
            });
        let _0x5021e9 = _0x529290;
        const _0x396d50 = _0x4006e6[_0x79d75c(0x5ab)][_0x79d75c(0x50b)]();
        await _0x396d50[_0x79d75c(0x668)](_0x1251d2), log(_0x79d75c(0x527) + _0x4f038d + 'B'), _0x396d50[_0x79d75c(0x1d5)](), await _0x4006e6[_0x79d75c(0x416)][_0x79d75c(0x4c1)](new WritableStream({
            async 'write'(_0xf7c069) {
                const _0x360911 = _0x79d75c, _0x22e704 = 数据转Uint8Array(_0xf7c069);
                log(_0x360911(0x23c) + _0x22e704[_0x360911(0x574)] + 'B');
                const _0x4a3ca4 = _0xd41dae ? await _0xd41dae(_0x22e704) : _0x22e704, _0x4a277f = Array['isArray'](_0x4a3ca4) ? _0x4a3ca4 : [_0x4a3ca4];
                if (!_0x4a277f['length'])
                    return;
                if (_0x12e315[_0x360911(0x1f7)] !== WebSocket[_0x360911(0x63f)])
                    return;
                for (const _0x128f48 of _0x4a277f) {
                    const _0x22c67d = 数据转Uint8Array(_0x128f48);
                    if (!_0x22c67d[_0x360911(0x574)])
                        continue;
                    if (_0x5021e9) {
                        const _0x177993 = new Uint8Array(_0x5021e9[_0x360911(0x292)] + _0x22c67d[_0x360911(0x574)]);
                        _0x177993[_0x360911(0x1f2)](_0x5021e9, 0x0), _0x177993[_0x360911(0x1f2)](_0x22c67d, _0x5021e9[_0x360911(0x292)]), await WebSocket发送并等待(_0x12e315, _0x177993[_0x360911(0x565)]), _0x5021e9 = null;
                    } else
                        await WebSocket发送并等待(_0x12e315, _0x22c67d);
                }
            }
        }));
    } catch (_0x2032b8) {
        log(_0x79d75c(0x475) + (_0x2032b8?.[_0x79d75c(0x385)] || _0x2032b8));
    }
}
function closeSocketQuietly(_0x23d699) {
    const _0x40680d = a0_0x43d2af;
    try {
        (_0x23d699[_0x40680d(0x1f7)] === WebSocket[_0x40680d(0x63f)] || _0x23d699['readyState'] === WebSocket[_0x40680d(0x528)]) && _0x23d699[_0x40680d(0x418)]();
    } catch (_0x440f98) {
    }
}
function formatIdentifier(_0x480a4c, _0x4ca018 = 0x0) {
    const _0x4137db = a0_0x43d2af, _0x4efdbf = [..._0x480a4c[_0x4137db(0x548)](_0x4ca018, _0x4ca018 + 0x10)][_0x4137db(0x2a7)](_0x4b2058 => _0x4b2058[_0x4137db(0x592)](0x10)[_0x4137db(0x218)](0x2, '0'))[_0x4137db(0x4f1)]('');
    return _0x4efdbf[_0x4137db(0x25d)](0x0, 0x8) + '-' + _0x4efdbf[_0x4137db(0x25d)](0x8, 0xc) + '-' + _0x4efdbf[_0x4137db(0x25d)](0xc, 0x10) + '-' + _0x4efdbf[_0x4137db(0x25d)](0x10, 0x14) + '-' + _0x4efdbf[_0x4137db(0x25d)](0x14);
}
function a0_0x2d4e() {
    const _0x41c1b1 = [
        'C2vYDMvYuMfUzg9T',
        'tK9fuLjpuG',
        'CMvHzeHHBMrZAgfRzvvUDgLS',
        'ihWG5y+n5lUJ5ywC5BQvoIa',
        'y29UBMvJDgLVBIbZDxbLCNnLzgvKig9YignSAwvUDcbJBg9Zzwq',
        'w1nt5ywL56UzxsdOP6pLR4BLPlhOTkxVViZOV57MJQxLHBpPL606ia',
        'yM9VA3m',
        'AgfZ',
        'l3n1yJ9OB3n0pwv4yw1WBguUy29TjNv1Awq9mdaWmdaWmdaTmdaWmc00mdaWltGWmdaTmdaWmdaWmdaWmdaW',
        'BgLI',
        'quXmt0nbvevFrvjst1i',
        'zgvYAxzLqML0CW',
        'CMvZ',
        'D2vUA3u',
        'Ahr0Chm9',
        'mdaWmdaW',
        'Ahr0Ca',
        'C2vUza',
        'B25SAw5L',
        'jMXPC3q9',
        'zgvJCNLWDfrSCZeZ',
        'C2XPy2u',
        'y2XPzw50sgfUzhnOywTLq3j5ChrVs2v5',
        'vfvstIbdt05orunuihjLC3bVBNnLihrPBwvKig91Da',
        'Aw52ywXPzcbKyxrH',
        'AxntywzLsw50zwDLCG',
        'u1mGCgf5Bg9HzcbSzw5NDgGGAw52ywXPzdOG',
        'DgfYz2v0s2v5',
        'zMXHz3m',
        '5PEG5Pwi55Qe5PYO6AMS5y+n5lUJ56UV5y+J',
        'veXt5yIg54Mh',
        'veXtideUmYbZzxj2zxiGrMLUAxnOzwqGDMvYAwz5igzHAwXLza',
        'ywrZ',
        'y2vPBa',
        'ksb0Agf0igLZig9UihrOzsa8ysbOCMvMpsjODhrWCZOVl3D3DY5JBg91zgzSyxjLlMnVBs81EhGTzxjYB3iTBgfUzgLUzZ91Dg1FC291CMnLpwvYCM9YxZeWmhGIihrHCMDLDd0Ix2jSyw5RiJ5dBg91zgzSyxjLpc9HpIbUzxr3B3jRlIbbBIb1BMTUB3DUigvYCM9Yig9Jy3vYCMvKihDOAwXLihjLBMrLCMLUzYb0AguGCgfNzs48l3a+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnMlwnVBhvTBIi+cIaGicaGicaGicaGicaGicaGicaGicaGidXOmIbKyxrHlxrYyw5ZBgf0zt0ID2HHDf9Jyw5FAv9KBYi+v2HHDcbJyw4GssbKBZ88l2GYpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpha+phn0CM9UzZ5jzIb5B3uGyxjLihrOzsbVD25LCIbVzIb0AgLZihDLyNnPDgu6pc9ZDhjVBMC+pgjYic8+CMvMzxiGDg8GpgeGAhjLzJ0IAhr0Chm6lY9KzxzLBg9WzxjZlMnSB3vKzMXHCMuUy29Tl3DVCMTLCNmVB2jZzxj2ywjPBgL0Es9LCNjVCNmViIb0yxjNzxq9iL9IBgfUAYi+v29YA2vYCYaTievYCM9YCYbHBMqGrxHJzxb0Aw9UCZWVyt4Gyw5KignOzwnRifDVCMTLCNmGtg9NCYbMB3iG',
        'zMX1C2G',
        'C2vYDMvYsgfUzhnOywTLq3j5ChrVs2v5',
        'yMfZzty0',
        'C3rYzwfT',
        'DhjPBq',
        'yMXVy2S',
        'Aw5LDdrFCM91DgvFywrKCMvZCW',
        'yxbWBgLJyxrPB24Vz3jWyW',
        'y2LWAgvYq29UzMLN',
        'zw5XDwv1zq',
        'vfvstIbHDxrOzw50AwnHDgLVBIbJAgfSBgvUz2uGAxmGBwLZC2LUzYbYzwfSBsbVCIbUB25Jzq',
        'ifzLCNnPB24V',
        'y2XPzw50v3jPDgvlzxK',
        'DxnLCM5HBwu',
        'zw5JB2rL',
        'yNvMzMvY',
        'u1mGAgfUzhnOywTLigrLy3j5ChqGzMfPBgvK',
        '5PYQ55+Lsva',
        'Aw5MBW',
        'Dgv4Dc9WBgfPBJTJAgfYC2v0pxv0zI04',
        'o3bHDgG9',
        'zxbPC29Kzq',
        'C2vYDMvYqxbWs2v5',
        'DhjHBNnJCMLWDa',
        'DgHLBG',
        'u1nuucb1C2vYBMfTzs9WyxnZD29YzcbPCYb0B28GBg9UzW',
        'Dg9vChbLCKnHC2u',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'BwLU',
        'D3mTCgf0Ad0',
        'yNL0zuXLBMD0Aa',
        '77Ym5l2/55sO',
        'DgfZAW',
        '6zQp5PY66lEV5B6e',
        'Dgv4Dc9ODg1SlgfWCgXPy2f0Aw9Ul3HODg1Sk3HTBcXHChbSAwnHDgLVBI94BwW7',
        'w1rduoEBToI/NL0G6Ake5yQG6l2956UE6ycF57Ut5P6CoIa',
        'u2HHzg93CM9JA2v0',
        'w1nt5ywL56UzxsbvuKWGzw5Jpq',
        '5y6F5AEl5PwW5O2U',
        'CMfUAW',
        'CM91DgvFzxHJBhvKzv9HzgrYzxnZ',
        'y29Kzq',
        '8j+tIIa8yJ7OR7FMSylNLkJPH4/VVjO8l2i+',
        '5lUJ55cgienptK5fq1qG5zon5BQu5As06l+h6zw/5OIw5PEG5Pwi',
        'u1nuucbuq1aGqunlihDYAxrLihrPBwvKig91Da',
        'icHdAgfdAgeYmcK',
        'w0rVsoAFPEIVOL0G5P+L6k+I5A6m5OIqia',
        'ywn0',
        'y25jC3bdB2rL',
        'w+wpJEs7O+I/NUAoPv0G5OMa5PYj5y+n5lUJ6l+E5O6L5AsX6lsL77Ym5lIu5PYQ5zcV55sO5y+n5lUJ5ywC5BQv77Ym6l+E5O6L57Ui5Q2I44cc',
        'ywXWBLbYB3rVy29SCW',
        'AMfU',
        '5PwW5O2U5lIT5B+d',
        'CMvZB2X2zq',
        'A2v5u2HHCMu',
        'z3jWyY11C2vYlwfNzw50oIa',
        'Ahr0CdOVlW',
        '5PYQ5OM+5yIW6lsM5OI35PwW5O2U',
        'wc1bChbLBMDPBMuTuMvTB3rLlufKzhi',
        'CMvHzfjLy29YzhnvBNrPBa',
        'Dg9tDhjPBMC',
        'lcbxB3jRzxjZoIa',
        'yYbHCcb0CMfMzMLJ',
        'yxnpCMDHBML6yxrPB24',
        'B3v0lNbOCa',
        'Bg9JywW',
        'C2vHCMnOugfYyw1Z',
        'zg5Z',
        'DhvYBG',
        'Aw52ywXPza',
        'vxnLCI1bz2vUDa',
        'C3vJy2vZCW',
        'D2fPDfbHEwXVywrmzw5NDgG',
        'zMf2B3jPDgu',
        'igLUDgvYDMfSpq',
        'q0yTq29UBMvJDgLUzY1jua',
        'DMfSDwvZ',
        'CgfNzxm',
        'C2vSBgvY',
        '8j+uJsa8yJ7OT6/LVOtVVjO8l2i+pgnVzgu+',
        'oJq0mZ9Zzwn1CML0Et10BhmMDhLWzt0',
        '5A2x6iQckq',
        'sw52ywXPzcbRzxLtAgfYzxm',
        'D2fPDfvUDgLS',
        '5yAz5ywL5BM2562j5B6f',
        'D3jPDgfIBgu',
        'Ag9ZDg5HBwu',
        'yNL0zu9MzNnLDa',
        'zwr1',
        'w1rduoI9RowpKv0G5P6e6ycG5PYS5zYWmJa05zon5BQuoIa',
        'C291CMnLx2DLB2LW',
        'DgfNCW',
        'q29UDgvUDc1mzw5NDgG6idancG',
        'C3n0Ca',
        'zgfZAc5JBg91zgzSyxjLlMnVBq',
        'zxHWzxjPBwvUDgfS',
        'v1pKUiROOyW',
        'iczIDwXSoYa',
        'ioIdNowhUU+8JoA6KowFN+wqJtOG',
        'B3v0lMH0BwW',
        'pc9ZCgfUpGOGicaGicaGidXZCgfUignSyxnZpsjJzI1MB290zxiTC2vWyxjHDg9YihnToMHPzgrLBIi+jMj1BgW7pc9ZCgfUpGOGicaGica8l3nWyw4+cIaGicaGidXZCgfUignSyxnZpsjJzI1MB290zxiTAxrLBsbZBtPIBg9JAYbZBtPTyI0XiJ48C3bHBJ5qzxjMB3jTyw5JzsaMyw1WoYbZzwn1CML0EsbIEtWVC3bHBJ4GpgeGCMvSpsjUB29Wzw5LCIbUB3jLzMvYCMvYiIbOCMvMpsjODhrWCZOVl3D3DY5JBg91zgzSyxjLlMnVBs81EhGTzxjYB3iTBgfUzgLUzYiGAwq9iMjYyw5Kx2XPBMSIihrHCMDLDd0Ix2jSyw5RiJ5dBg91zgzSyxjLpc9HpJWVC3bHBJ4kcIaGica8l3a+cIaGica8C2nYAxb0pIHMDw5JDgLVBIGPE2z1BMn0Aw9UigqOkxT2yxiGyJ1HlMDLDevSzw1LBNrcEuLKkcjJzI1MB290zxiTAxrLBs1PCciPlgm9ys5NzxrfBgvTzw50qNLjzcGIy2yTzM9VDgvYlwLWlxjLDMvHBciPo2iMjIjJBgfZC0XPC3qIAw4GyIyMkgiUy2XHC3nmAxn0lNjLBw92zsGIAgLKzgvUiIKSyY5HzgrfDMvUDeXPC3rLBMvYkcjJBgLJAYiSzNvUy3rPB24OkxTJlMnSyxnZtgLZDc5HzgqOiMHPzgrLBIiPo2eUz2v0rwXLBwvUDej5swqOiMnMlwzVB3rLCI1PCciPlMnSyxnZtgLZDc5Yzw1VDMuOiMHPzgrLBIiPFsKPFxzHCIbHpwrVy3vTzw50o2rVy3vTzw50lMfKzev2zw50tgLZDgvUzxiMjMeUywrKrxzLBNrmAxn0zw5LCIGIre9nq29UDgvUDeXVywrLzciSzcL9ksGPoZWVC2nYAxb0pGOGidWVzgL2pJWHls0GlY5LCNjVCI1MB290zxiGls0+cGOGicaGicaGidWVzgL2pJWHls0GlYnJzI1LCNjVCI1KzxrHAwXZic0TpGOGicaGpc9KAxy+pceTlsaVi2nMlxDYyxbWzxiGls0+cGOGicaGidXZy3jPChq+cIaGicb3Aw5KB3CUx2nMx3rYyw5ZBgf0Aw9Uid0GE307cGOkica8l3nJCMLWDd4kpc9IB2r5pGO8l2H0BwW+',
        'CgXHEwvY',
        'y29UBMvJDgLUz1bYB21PC2u',
        'qvbqru5ex1rzueu',
        'C3vIDgXL',
        'C291CMnLs2v5CW',
        'ywjVDxq',
        '5lYG6l6t5y2p6k6U',
        'q29UBMvJDgLVBIbJBg9ZzwqGD2fPDgLUzYbMB3iGu2vYDMvYsgvSBg8',
        'zxnZ',
        'zMv0y2HLCG',
        'lsbUyw1LoG',
        'y2XPChm',
        'jtjd',
        'ywXIDw0',
        'Aw5LDdrFCM91DgvFzxHJBhvKzv9HzgrYzxnZ',
        'uZuGyxv0AgvUDgLJyxrPB24GzMfPBgvK',
        'Bg9NAwnHBa',
        'yxnR',
        '57Y65Bcr5lUJ55cg5y+c5PwW',
        'p3bSDwDPBJ12mG',
        'ywrKCMvZCW',
        'q29UBMvJDgLVBIbJBg9ZzwqGzhvYAw5NifrmuYaXlJiGAgfUzhnOywTL',
        'ywXSB3DdAgfJAge',
        '6k+75y+wDgCUANnVBUwhUUMuMtOG',
        'qwnJB3vUDeLe',
        'u1mGBgvUz3rOigrLy3j5ChqGzMfPBgvK',
        'u1nuucbjuenqigfKzhjLC3mGCMvXDwvZDcb0Aw1LzcbVDxq',
        'oYbLEhbPCMu9ndeWmJmYotyWma',
        'y2XPzw50u2vXtNvT',
        'DxbSB2fK',
        'ntG2nZq3mK5RuNnvDW',
        'yMfZzty0DxjS',
        'twLZC2LUzYbutfmGms4YignLCNrPzMLJyxrL',
        'B3jPz2LU',
        'BNvSBa',
        'C2vJlxDLyNnVy2TLDc1WCM90B2nVBa',
        'zw5JCNLWDa',
        'y2fUzgLKyxrL',
        'Aw5LDdrFywrKCMvZCW',
        'tMv0D29YAYbJB25Uzwn0Aw9UigXVC3q',
        'u09ds1m1',
        'y29UDgvUDa',
        'vhj1zs1dBgLLBNqTsva',
        'icbNCNbJlxvZzxiTywDLBNq6ia',
        'A2v5',
        'C29JA3m1pq',
        'C29MDa',
        'AhrTBa',
        'z2v0q2LWAgvYq29UzMLN',
        'y2f0y2G',
        'DhjVAMfUigzHBgXIywnRigLZig5VDcbJB25MAwD1CMvK',
        'ywrK',
        'ywn0AxzPDhK',
        'uKvgvvnfra',
        'zg93BMXPBMTeCMfPBG',
        'CMfJzq',
        '5lIl6l296ycF5BQM',
        'vfvstIbKyxrHignVBM5Ly3rPB24GDgLTzwqGB3v0',
        'wdi1nte5',
        'tuiVCW',
        'Bwf0y2G',
        'CgfNzq',
        'q0BOGztPGjRKVjJPGiK',
        'yxbWBgLJyxrPB24VANnVBJTJAgfYC2v0pxv0zI04',
        'y29UDgvUDc10ExbL',
        'CMvNAxn0zxi',
        'DgXZmtm',
        'ywrTAw4Vy2HLy2S',
        'C25Ppq',
        'veXt',
        '5PEL5B+x6k6W5B2v5AsX6lsLoIa',
        '5lUJ55cg5ywO5Bga',
        'zgLZywjSzv9JywnOzq',
        'BgLUA3m',
        'y291BNrYEq',
        'Ag9ZDa',
        'pgGXpMvKz2v0Dw5UzwW6ioACQUE7KEwUMIblvIdLKB3LKi3NQBRPL7q8l2GXpJXWpUIVT+wCQcbdBg91zgzSyxjLioAoP+wiTUwpSoE7KEwUMUwpMoMhJ+wqJEs4UIblvIdNMOtLKB3LKi3NQBRPL7tVViZMIjBNM7tMJQxPHy3NVA4GvvvjrcdLJ5JPH4/JGii8l3a+',
        'C2v0DgLUz3m',
        'Bxm6',
        'z2v0uMfUzg9TvMfSDwvZ',
        'z1jqq+AOOEw8JW',
        'Aw5LDdrFCMfUz2u',
        'qKvtvf9tvui',
        'BwfSBa',
        'C2vJDgLVBG',
        'DMvYC2LVBG',
        'BxvZAwm',
        'Ahr0Chm6lY94lMLUDMfSAwq',
        'mtjuyMvVB1i',
        'z2iYmZeY',
        'C3rYAw5N',
        'Bg9JywXLq29TCgfYzq',
        'BwfZDgvYu2vJCMv0',
        'p2vUyZ0',
        'BwvZC2fNzxm',
        'qU+8Jow3SUIhQUwkQowVUEM9Ka',
        'tw96AwXSys81lJa',
        'ihn0CMLJDd1MywXZzq',
        'zw5JCNLWDfrSCZeZsgfUzhnOywTL',
        'w+wpJEs7O+I/NUAoPv0G5lUJ55cg5yIWoIa',
        'ANvTCgLUzW',
        'ywXIDw1Z',
        'A2v5CW',
        'q29UBMvJDgLVBIbJBg9ZzwqGD2fPDgLUzYbMB3iGveXtideUmIbgAw5PC2HLza',
        'iJOG',
        'sfruuc8XlJeGmJa0ie5VienVBNrLBNqncG',
        'quvtluDdtq',
        'C29JA3m1',
        'Aw5LDdzFCM91DgvFzxHJBhvKzv9HzgrYzxnZ',
        'Aw52ywXPzcb0CM9Qyw4GDwrWigfKzhjLC3nuExbLoIa',
        'B3v0yM91BMq',
        'zxH0CMfeyxrH',
        'BwfNBMv0',
        'ChjVEhLPCd0',
        'w1rduoI9RowpKv0G55UU5QchoIa',
        'yxbW',
        'yM9VAW',
        'idXIpG',
        'igrHDge9',
        'q09otKvdveLptL9csu5ex1nvq0nfu1m',
        'l25Vqurnsu4',
        'D29YA2vYCW',
        'CgHVDg8',
        'zxHWB3j0s2v5',
        '5yQG5A+g5PA55BYp',
        'zg5ZoGOGigvUywjSztOGDhj1zqOGigrLzMf1BhqTBMfTzxnLCNzLCJOkicaGic0GmJiZlJuUns41cIaGicaTideXos4Yos4Yos4YoqOGicaGlsaXmtqUmte0lJeXnc4Xmtqkicb1C2uTAg9ZDhm6ihrYDwukicbUyw1LC2vYDMvYoGOGicaGlsbODhrWCZOVl3nTmI5KB2GUChvIl2rUCY1XDwvYEqOGicaGlsbODhrWCZOVl2rUCY5HBgLKBNmUy29Tl2rUCY1XDwvYEqOGigzHBgXIywnRoGOGicaGlsa4lJGUnc40cIaGicaTidiWoc42nY4YmJaUmJiWcIaGzMfSBgjHy2STzMLSDgvYoGOGicaGz2vVAxa6ihrYDwukicaGigDLB2LWlwnVzgu6ienocIaGicbPCgnPzhi6cIaGicaGic0GmJqWlJaUmc4WlZqkicaGicaGlsaXmJCUmc4WlJeVmZikicaGicaGlsaWlJaUmc4WlZmYcIaGicbKB21HAw46cIaGicaGic0GjYSUz29Vz2XLlMnVBsCkicaGicaGlsaNkY5MywnLyM9VAY5JB20NcIaGicaGic0GjYSUEw91DhvIzs5JB20NcG',
        'C2LUzY1IB3G',
        '5PEG5Pwi5zon5BQu',
        'cUEBRUAGH+ERMEEcUtOG',
        'u1vcteLtva',
        'yxr0ywnOBwvUDdSGzMLSzw5HBwuQpxv0zI04jYC',
        'tI9b',
        't1bftG',
        'w1rduoEBToI/NL0G',
        'vfvstIbZzxj2zxiGy2XVC2vKignVBM5Ly3rPB24',
        'jNn1yJ0',
        'Aw5LDdzFCMfUz2u',
        'w1rduoI9RowpKv0G5zcV55sOifnpq0Ttns9ivfrql0Huvfbtl1rvuK4Vu1nuucdLHAJLSydKU6pNKiy',
        'Aw5LDdzFywrKCMvZCW',
        'C2vYDMLJzu5HBwu',
        'zMLUzeLUzgv4',
        'w2DsuenDioMTJ+EdIoAaNEMMLUwmHtOG',
        'C29JAW',
        'w+wpJEs7O+I/NUAoPv0G5OIq5yQF6l+E5O6L5yIWoIa',
        'zgvJCNLWDfrSCZeZsgfUzhnOywTL',
        'CMvHzg1L',
        'A2v5igv4CgfUC2LVBG',
        'u1nuua',
        'C2vYDMvYv3jPDgvlzxK',
        'yM9VBgvHBG',
        'ywrKCMvZC19YzxnVBhzLCG',
        'sfruufmG5lUJ55cg5zYO6l+u5zUEienptK5fq1qG5zon5BQu5yMn5ywZ6zET6l+E5O6L',
        'ywnN',
        'ANvTCc5WAha',
        'C3n0Cd0',
        'C2v0DgLUzW',
        'se9tva',
        'uZuGCMvXDwLYzxmGyxv0AgvUDgLJyxrPB24',
        'u1nuucbZzxj2zxiGy29UBMvJDgLVBIb0Aw1LzcbVDxq',
        'sw52ywXPzcbuvvjol1nuvu4GCMvZCg9UC2u',
        'w1Dt6l2S5y+rxsdOV57MJQxNU5pMNz86ia',
        'uc0Ynty',
        'y2fUy2vS',
        'u1vcq09orKLh',
        'u1nuucbZB2nRzxqGy2XVC2vK',
        'D2vI',
        'C3rHCNrZv2L0Aa',
        'DMfSDwu',
        'DgvJAa',
        'CgLJDhvYzxm',
        'vw5ZDxbWB3j0zwqGy2LWAgvYihn1AxrLoIaWEa',
        'mteWmq',
        'sw52ywXPzcb1DwLK',
        'D3jPDgu',
        'w1nt5y+r6ycbxsdLIQdLR4BLPlhOTku6ia',
        'AxbFAxnFChjPDMf0zq',
        'runeseu',
        'Dgv4Da',
        'rxHWAxjLCW',
        'DhvUBMvS',
        'veXtiefSzxj0oIa',
        'rw1HAwW',
        '5P+L6k+I6k+35Rgc6yEp5AsX6lsL77Ym5AsX6lsL5y6F5zUG77YA',
        'Ahr0Chm6lY9HCgKUy2XVDwrMBgfYzs5JB20Vy2XPzw50l3y0',
        'zg91AMLU',
        'BgLZDa',
        'ihWG5P2L6iEQoIa',
        'C29JA2v0igLZig51BgW',
        'jMvTB2PPpq',
        'w0rVsoAFPEIVOL0G5Ps25yIW5zon5BQuia',
        'C3rYzwfTCW',
        'ChjPDMf0zuTLEq',
        'C29JA2v0',
        'lNrWms4',
        'yMLUyxj5',
        'z3jWyY1VChrZoIb7',
        'zMLSzq',
        'CMvWBgfJzq',
        'CMvKAxjLy3q',
        '6zo+5BYp5lUJ55cg56UV5y+J5PEG5Pwi',
        'twLZC2LUzYbutfmGms4ZignLCNrPzMLJyxrL',
        'C2vXDwvUy2u',
        'l2fKBwLU',
        'AxnbCNjHEq',
        'Fq0kdqO',
        'kMnKBI1Jzw50yxvYDxmUy29T',
        'BNvTyMvY',
        'DhjHDMvS',
        'uMvMzxjLCG',
        'rMX5lunSAwvUDc1jua',
        'C3vIyxjYyxK',
        'Aw5JBhvKzxm',
        '5PEG5Pwi55Qeifnpq0TtiowCSowDGoAGVow8J++8MKLqDJyG5zYW5z2a5B+f6Ag755sO5PA55OUS5y+35OUS6lw35P2L77Ym5AAcifSYmdaXoMrIodO6mv0',
        'y2HHy2HH',
        'C2vYDMvYu2vXtNvT',
        'w+wpIuHuvfbDiowrVEs4REIVT+AXGJOG',
        'z2v0twLUDxrLCW',
        'C3vIy29UDMvYDgvYlxzLCNnPB24',
        'l21HAw4Vq0yTq0LeuI50Ehq',
        'ywXWBG',
        'qxnPys9tAgfUz2HHAq',
        'ywrTAw4Vy29UzMLNlMPZB24',
        'w+wpIuHuvfaTugLWzv0G6l+E5O6L5AsX6lsLoIa',
        'C2v0vwLUDde2',
        '5lUJ55cg5Qoa5Rwl5zon5BQu5As06l+h6zw/5OIw5PEG5Pwi',
        'Dg9ju09tDhjPBMC',
        '5l+D5A2y6ywn572U5AsX6lsLoIa',
        'rMLUz2vYChjPBNq',
        'u0HbltuXmG',
        '5lUJ55cg6lsM5y+3',
        'CMvKAxjLy3qUAhrTBa',
        'r0vuic9Jzg4Ty2DPl3rYywnLieHuvfaVms4XdqPiB3n0oIa',
        'Dg9Rzw4',
        'C2vYDMvYigzPBMLZAgvK',
        'Aw52ywXPzcb0CM9Qyw4GDwrWigrLBgLTAxrLCG',
        'q29UDgvUDc1eAxnWB3nPDgLVBG',
        '6AAw5yYf5BEY5BU656Ul',
        'se1bqW',
        'w0rVsoAFPEIVOL0G6k+35Rgc5AsX6lsLia',
        'DxvPza',
        'twLZC2LUzYbutfmGms4ZigTLEv9ZAgfYzq',
        'BMfTzq',
        'y2XHC2G',
        'ms4WlJaUmq',
        'CMf3',
        'y29SBgvJDa',
        'vvvjra',
        'y2yUANnVBG',
        'yMXVzW',
        'BMv4Da',
        'kNrHCgvJB250zw50lM5LDa',
        'DgXZmtmG',
        'mJu1otbWD3vcBu8',
        'vfvstIbHDxrOzw50AwnHDgvKiefSBg9JyxrLihjLC3bVBNnLihrPBwvKig91Da',
        'w0Huvfbt5lUJ55cgxsdKU6pNKiBLIla6ia',
        'jMvJAd0',
        'ihzPysa',
        'BgL2zxm',
        'u1nuucbjuenqienVBMzPz3vYzs1by2SGDgLTzwqGB3v0',
        'Bw92Awu',
        'vvjm',
        'Dg9WAwm',
        '6Ake5yQG6l296kEJ5P6q5lI656M6',
        'EMGTy24',
        'l3n1yJ90yxjNzxq9',
        'Dg9YCMvUDa',
        'y29UBMvJDa',
        'pc9JB2rLpGO',
        'zNjVBunOyxjdB2rL',
        'D2f0y2G',
        'BM8TC3rVCMuSig5VlwnHy2HLlcbTDxn0lxjLDMfSAwrHDguSihbYB3H5lxjLDMfSAwrHDgu',
        'ywn0Aw9U',
        'CMvSzwfZzuXVy2S',
        '5PEG5Pwi55QeieLqDJyG5PYO6AMS5y+n5lUJ5zYW5z2a',
        'AgfUzhnOywTLvgXZmti',
        'z3PPCcWGzgvMBgf0zsWGyNi',
        'lcbNCNbJlxvZzxiTywDLBNq6ia',
        'vxbNCMfKzq',
        'EgH0Dha',
        've9lru4',
        'z2v0sg91CNm',
        'CM9IB3rZlNr4Da',
        'ywvZlteYoc1Ny20',
        'BM93',
        'Aw52ywXPzcbWyxnZD29Yza',
        'y29TAwnZ',
        'y29TAwm',
        'mYWXlhrSC2HLBgXV',
        'sw52ywXPzcbJB21Tyw5K',
        'ywrTAw4Vy2yUANnVBG',
        'CMvHza',
        'zwnOlw9WDhm6',
        'mZuXzvn6u25n',
        'qurnsu4',
        'CM91Dgu',
        'zgHJCa',
        'zgvYAxzLza',
        'C3mTC3vIA2v5',
        '6lEV5B6e5QIH5P2/',
        'C2vYDMvYtMfTzq',
        'Ahr0Chm6lY9JBg91zgzSyxjLlwrUCY5JB20Vzg5Zlxf1zxj5',
        'C2v0',
        'AgfZAa',
        'BMvNB3rPyxrLzefSCg4',
        'u1nuucbKAwqGBM90igfZC2LNBIbHBIbjuhy0igfKzhjLC3m',
        'Aw52ywXPzcbZCYbKyxrH',
        'CMvHzhLtDgf0zq',
        'y2XPzw50v3jPDgvjDG',
        'CNvSzxm',
        '5lIQ57Ut5P6C',
        '6zo+5BYp5lUJ55cg5zYW5z2a57Y65BcrigHVC3rUyw1LioAiLIbWB3j0',
        'yxbP',
        'zMXHDe1HCa',
        'vxnHz2vbueK',
        'AgvSCa',
        'vxnHz2u',
        'z3jVDxa',
        'ntyXndC5yxbMuwz6',
        '5zUE5yYfu29JA2v0',
        'zMLUza',
        'yxr0CMLIDxrLCW',
        'Cdi1nG',
        'Fx0Kmq',
        'l21HAw4Vq0yTq0LeuI8',
        'Bwf4',
        'C3r1zgvUDa',
        '5lUJ55cg5Qoa5Rwl6k+35Rgc5AsX6lsLoIa',
        'nJa4odC3y1L2t21o',
        'CMnVzgu',
        'w0HuvfdKU6pNKizDios7O+EqHUwiSdOG',
        'u1vcqvbj',
        'zMf2B3vYAxrLCW',
        'oYbKB3DUBg9Hzd0',
        'iefbquhORRdLVzu6',
        'veXtmtm',
        'q09otKvdveLptL9csu5ex1jfuvvfu1q',
        'zg9TywLUx3jLC29SDMvY',
        'zMLSDgvY',
        '6zQp5PY6sva',
        'CgfKu3rHCNq',
        'rK9stuvsuG',
        'z1jqq1vZzxjbz2vUDa',
        'zgv0ywLSCW',
        'z2v0u2vJB25KCW',
        'Aw1Hz2u',
        'C25PzMy',
        'Dgv4Dc9ODg1So2nOyxjZzxq9DxrMltG',
        'CMf5lxbSDwDPBJTTB2rLpxDLyNnVy2TLDdTOB3n0pwv4yw1WBguUy29To3bHDgG9',
        'CgHVDg9Z',
        'qMfKifjLCxvLC3q',
        'icbUyw1LC2vYDMvYlxbVBgLJEtOk',
        'sw52ywXPzcbHzgrYzxnZoIa',
        'vfvstIbHDxrOzw50AwnHDgvKiefSBg9JyxrLihjLCxvLC3qGDgLTzwqGB3v0',
        '5lIk6kgm6zIF5yIx',
        'ywrKCMvZC19ZDhjHDgvNEq',
        'w1rduoEBToI/NL0G5BM25y+r5BcD6k+via',
        'DwrW',
        'Ahr0Chm6lY8',
        'ifvPzc8WEa',
        'z2v0uMvHzgvY',
        'jtne',
        'vxnLCI1Hz2vUDdOGkGPeAxnHBgXVDZOGlW',
        'Ahr0CdO',
        '6l+h5PYF5PE26zE0',
        'vfvstIbYzxnWB25Zzsb0Aw1LzcbVDxq',
        'z3jWyW',
        'C3rHDgLJ',
        'CMv0CMLLDMu',
        'q09otKvdvca',
        'C3r1zhK',
        'zwnKAeTLEvbHAxi',
        'Axzmzw4',
        'iowtJEw6Los7O+EGGtO',
        'q0BNP7VLIQJKVjJPGiK',
        'ioACQUIoT+wpLUwiSfryvooaGuhLKOXbqufb6k6W5B2v77Ym5l+D55wz5y6F5z+F5zcn',
        'w1veuoI9RowpKv0G5Ps25yIWierouYdLK43LUPq6ia',
        'BMDPBNG',
        'A2v5ugfPCG',
        'quXqtG',
        'w+wpIuHuvfdOVAZLJ5fDiowKHoEqHUwKSEI0PtOG',
        'z2v0vgLTzq',
        'zw5HyMXLza',
        'qufbqq',
        '5P2H55UU5PwW',
        'qvbjvg9Rzw4',
        'pgi+iW',
        'DgvZDa',
        'oI8V',
        'iowKSEI0PtOG',
        'jNnJDJ0',
        'zM9YDw0',
        'r2XVyMfSqvbjs2v5',
        'kfTElh1CBL0Rkq',
        'Aw1Hz2vZ',
        'C3rHy2S',
        'icbLBMfIBgu6ihrYDwu',
        'ios7O+EqHUwCQoI/LowBNIbdt05orunuiowtJEw6LowjJEwfS+MxREI/NUAoPq',
        'ywrTAw4V',
        'q29VA2LL',
        '5yQG5A+g6ywn572U',
        'CMvJB3jKugfYC2vY',
        'BMvLzf9TB3jL',
        'z2v0',
        'BMv3CW',
        'ihWGvue6ia',
        'DxjS',
        'kfTExg5DkYK',
        'zgf0yq',
        'C3vIC3rYAw5N',
        'y2fYDa',
        'zhjHBwe',
        'Ag90',
        '5l+D5A2y6iEQ5A6A5lMjsvdLPlhOTku6ia',
        'yxjJAgL2zq',
        'zgvJCNLWDeTLEq',
        'yNv5',
        'w0rVsoAFPEIVOL0G5BYa5AEl5P+L6k+Iia',
        'Dg9VBhm',
        'zgvJCNLWDa',
        'Bw96AwXSyq',
        'CMf3ugfJA2v0',
        'yxjJAgL2zxm',
        'C2vYDMvYsgfUzhnOywTLs2v5',
        'BwvTyMvYCW',
        'y2f0zwDVCMLLCW',
        'y29UzMLNlMPZB24',
        'oI8VmdaWmdaWmdaTmdaWmc00mdaWltGWmdaTmdaWmdaWmdaWmdaWqa',
        'ueftu1DpuKq',
        'C3vYz2u',
        'B3bLBMvK',
        'BxvSDgK',
        'zxzLCNK',
        'y2XPzw50sgfUzhnOywTLs2v5',
        '5lIn5PsV5OYb55Qeue9tvoIVT+AXGUI3R+w+Ha',
        'y2fJAgvFzMLSzq',
        'l3j1BguTC2v0lW',
        'veXtiefSzxj0oIbSzxzLBd0',
        'icbXDwvYEs1Zzxj2zxiTBMfTztOG',
        '5OYh5A6A56UV5y+J',
        '6ywn572U5BEY6yEn572U5lI66BUy6k6K5yc8',
        'oIbXDwv1zsbJBg9Zzwq',
        'C2f3q2vYDa',
        'CMvWBgfJzufSBa',
        'y2XPzw50qxbWq3j5ChrVs2v5',
        'w1Dt6l2S5y+rxsdLPitNKiBLPlhOTku6ia',
        'ywvZtgvUz3rO',
        'y29Uy2f0',
        '5PYO6AMS5y+n5lUJ5lUf5PsV5OYbigHVC3q6Cg9YDa',
        'xcqX',
        'wc1szwfSluLq',
        'C3vWCg9YDfrSCZeZ',
        'y2XPzw50v3jPDgvdCNLWDg9lzxK',
        'yw55',
        'zg5ZxW',
        'BM90zq',
        'AxnrDwv1zu92zxjMBg93',
        'odbYCxzpyuO',
        'DhjHzgu',
        'y29TCgfUEq',
        'sw52ywXPzcbjuhy2igfKzhjLC3mGBgvUz3rO',
        'AxnuBhmXmW',
        'BgvUz3rO',
        'u3ntCY5Urxq',
        'ChjPDMf0zq',
        'CMfUzg9Tvvvjra',
        'CMvWzwf0',
        'ioI3RZOG',
        'CMv0CNLdB25Uzwn0',
        'BgLUAW',
        'CMvXDwvZDhm',
        'CgXHEq',
        'y29UzMLN',
        'l3zPzgvVlW',
        'svdLNldLNya',
        'sfruufm',
        'u0Hbltm4na',
        'u1nuucbivfrqigHHBMrZAgfRzsbYzxf1zxn0ihrPBwvKig91Da',
        '5lYy6ycj6k6I6zIf55sF5OIq',
        'AgfUzhnOywTLq2H1BMTZ',
        'z2v0rgf0zq',
        'CYbHCcb0CMfMzMLJ',
        'DhjVAMfU',
        'BwfW',
        'ChjVEhLPCd10CNvL',
        'oc44lJGUoa',
        'Aw52ywXPzcbZCYbKB21HAw4Gzgf0yq',
        'Bw9IAwXL',
        'ms4XlJeUmq',
        'lNnYCW',
        'AgfZu2fSDa',
        '5lUJ55cg57g75z6l',
        'Chn3za',
        'reLsrunu',
        'ywrTAw4VAw5PDa',
        '6k6I6zIf6l2S5O2I5zco56UV5BYc5BI477YA',
        'Dgv4Dc9WBgfPBJSGy2HHCNnLDd1vveyToa',
        'AxnwAwv3',
        'Cg9ZDa',
        'Ahr0Cd0',
        'zNjVBujHC2u2na',
        'zxHLyW',
        '5PEG5Pwi55Qeifnpq0TtiowCSowDGoAGVow8J++8MUERR+wpO+wpT+w/HEMHU+AyR+AvSowTLW',
        'C2fSDeXLBG',
        'Edi1nte5',
        'EMLW',
        'jNnUAt0',
        'w0rVsoAFPEIVOL0G5P+L6k+I5AsX6lsLia',
        'vfvstIbbBgXVy2f0zsbMywLSzwq',
        'jMvUy3j5ChrPB249BM9UzszHBhbUpq',
        'z2fTzq',
        'vxnLCI1bz2vUDdOGtw96AwXSys81lJancKnVBM5Ly3rPB246igTLzxaTywXPDMuncG0k',
        'y2HHBM5LBhm',
        'vfvstIbbBgXVy2f0zsbYzxf1zxn0ihrPBwvKig91Da',
        '6lEZ6l+h6k+b5lMM6AQm6k+b',
        'u2f2zv9dB25MAwC',
        '5lYy6ycj6k6I6zIf55sF5OIq5zMO5BYc5BI4oG',
        'CMf3rgf0yq',
        'w2DsuenDioACQoMPRoMMLUwmHtOG',
        'C3vIoI8V',
        'z1jqq+s4IUIHJa',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pvvurI04',
        'p2vKpti1nJa',
        'u1vcru1psKK',
        'sw52ywXPzcdPRy/NG4JMGj0GCMvXDwvZDa',
        'ChjVAMvJDa',
        'ihWGvurqoIa',
        'Bg9NB3v0',
        'yxv0BW',
        'vfvstIbdCMvHDgvqzxjTAxnZAw9UigzHAwXLza',
        'Ahr0Chm',
        'zMfRzwLW',
        'BwLOB21V',
        'Bg9VBG',
        'u1nuuf9evvbmrvHFue9tvcaVC3jHx3Tcqte5ntK4mc1drdq5ltq1ogiTouuYmY1dodrfrtbbrenenZv9lYbivfrqlZeUmq0k',
        'l3n1yJ90yxjNzxq9BwL4zwqMDg9Rzw49',
        'zxjYB3jZ',
        'icaGici',
        'sw5PDf9dB25MAwC',
        'sfruua',
        'zMLUAxnOzwq',
        'C3rVy2S',
        '8j+uLYa8yJ7LN5/LKi3VVjO8l2i+pgnVzgu+',
        'zg9JCW',
        'BwvTyMvY',
        '5lUJ55cg5y+c5PwW',
        'AxrLBxm',
        'lcb3CY1OzwfKzxjZpuHVC3q6iG',
        'u1nuucbqqvaGyxv0AgvUDgLJyxrPB24GzMfPBgvK',
        'u1vc',
        'ywnJzxb0q2vYDgLMAwnHDgu',
        'zMXVB3i',
        'u1nuucbivfrqigHHBMrZAgfRzsbMywLSzwq6ia',
        'uefusa',
        'CNvSzv9ZzxrFAxbFy2LKCL9TyxrJAf9ZB3vYy2u',
        'Aw5KzxG',
        'y2HHBM5LBa',
        '5A2x6iQc5PwW',
        'Cgf5Bg9Hza',
        'u1nuucbWywnRzxqGyM9KEsbYzwfKihrPBwvVDxq',
        'zg9TywLUx3n0CMf0zwD5',
        'z2vVAxa',
        'CgfZC3DVCMq',
        'uZuGDw5ZDxbWB3j0zwqGyxv0AcbTzxrOB2q6ia',
        'CMv0CNKGDw5HDMfPBgfIBgu',
        '5ywL56Uz6kEJ5A+g5zMO',
        'BM9Uy2vdB3vUDgvY',
        'C2vYDMvYqxbWsxy',
        'u1nuucbuq1aGu1LoihDYAxrLihrPBwvKig91Da',
        'yxv0Ag9YAxr5',
        'w2DsuepOVAZLJ5fDiowKHoEqHUwKSEI0PtOG',
        'u1nuucbYzwfKywjSzsbZDhjLyw0GAxmGBM90ihjLywr5',
        'A2v5tgvU',
        'u0Hblte',
        'lNH5EG',
        'w1nt5ywL56UzxsdMO4dMTyVLIldLIy3LR7ZLMARLO7aG',
        'ihWGq2XVDwrMBgfYztWVDgL0Bgu+cJXTzxrHignOyxjZzxq9iLvurI04iIaVpGO8Bwv0ysbODhrWlwvXDwL2psjdB250zw50lvr5CguIignVBNrLBNq9iNrLEhqVAhrTBdSGy2HHCNnLDd1vveyTociGlZ4kpg1LDgeGAhr0Cc1LCxvPDJ0Iwc1vqs1dB21WyxrPyMXLiIbJB250zw50psjjrt1fzgDLiIaVpGO8Bwv0ysbUyw1LpsjYB2jVDhmIignVBNrLBNq9iM5VAw5KzxGSig5VzM9SBg93iIaVpGO8Bwv0ysbUyw1Lpsj2Awv3Cg9YDciGy29UDgvUDd0ID2LKDgG9zgv2AwnLlxDPzhrOlgLUAxrPywWTC2nHBgu9msiGlZ4kpgXPBMSGCMvSpsjZDhLSzxnOzwv0iIbPzd0Iy2zFC3r5BgvZlwnZCYiGAhjLzJ0Il2nKBI1Jz2KVC3r5BgvZl2nMlMvYCM9YCY5JC3mIic8+cJWHls1BAwyGBhqGsuuGov0+pgXPBMSGCMvSpsjZDhLSzxnOzwv0iIbPzd0Ny2zFC3r5BgvZlwLLlwnZCYCGAhjLzJ0Il2nKBI1Jz2KVC3r5BgvZl2nMlMvYCM9YCY5Pzs5JC3mIic8+pcfBzw5KAwzDls0+cJXZDhLSzt5IB2r5E21HCMDPBJOWo3bHzgrPBMC6mh08l3n0EwXLpGOkcJWHls1BAwyGz3rLieLfideWxt48is0TpGO8C2nYAxb0pGOGigLMicGHBMf2AwDHDg9YlMnVB2TPzuvUywjSzwqPihSkicaGihDPBMrVDY5HzgrfDMvUDeXPC3rLBMvYkcDet01dB250zw50tg9HzgvKjYWGzNvUy3rPB24GkcKGEWOGicaGicb2yxiGy29VA2LLrwWGpsbKB2n1BwvUDc5NzxrfBgvTzw50qNLjzcGNy29VA2LLlwfSzxj0jYK7cIaGicaGignVB2TPzuvSlNn0EwXLlMrPC3bSyxKGpsaNyMXVy2SNoWOGicaGFsKkicb9cJWVC2nYAxb0pGO8is0TpcfBzw5KAwzDls0+cGO8l2HLywq+cJXIB2r5pGOGicaGpgrPDIbPzd0Iy2yTD3jHChbLCIi+cIaGicaGicaGpgrPDIbJBgfZCZ0Iy2yTywXLCNqGy2yTywXLCNqTzxjYB3iGy2yTy29VA2LLlwvYCM9YiIbPzd0Iy29VA2LLlwfSzxj0iIbKyxrHlxrYyw5ZBgf0zt0Izw5HyMXLx2nVB2TPzxmIpLbSzwfZzsbLBMfIBguGy29VA2LLCY48l2rPDJ4kicaGicaGica8zgL2igLKpsjJzI1LCNjVCI1KzxrHAwXZiIbJBgfZCZ0Iy2yTzxjYB3iTzgv0ywLSCY13CMfWCgvYiJ4kicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy2yTD3jHChbLCIbJzI1OzwfKzxiGy2yTzxjYB3iTB3zLCNzPzxCIpGOGicaGicaGicaGicaGicaGpgGXpGOGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjJzI1LCNjVCI10ExbLiIbKyxrHlxrYyw5ZBgf0zt0IzxjYB3iIpKvYCM9Ypc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjJzI1LCNjVCI1JB2rLiJ4XmtaXpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZBwfSBcbJBgfZCZ0IAgvHzgLUzY1YyxKTAwqIpLjHEsbjrdOG',
        'AgfZrxjYB3i',
        'BM8TC3rVCMu',
        'D2LRAq',
        'zMLSBq',
        'lcbKzxnJpq',
        'Axnvrfa',
        'zgv0B3vY',
        'C3rYyxrLz3K',
        'vfvstIbdB25Uzwn0Aw9UqMLUzcbYzxnWB25Zzsb0Aw1LzcbVDxq',
        'CMv3CML0zv90DgW',
        'C2vYDMvY',
        'ms4Z',
        'o211Ed0W',
        'y2XVDwrMBgfYzs5JB20',
        'lcb3CZ10CNvLlcb3CY1WyxrOpq',
        '5l+D5A2y6iEQ5A6A5lMjsvdLPlhOTku6',
        'ChvIBgLJs2v5',
        'y2XPzw50uMfUzg9T',
        'Aw5PDa',
        'CMvTB3zLrxzLBNrmAxn0zw5LCG',
        'Cg9ZDhm',
        '6AQm6k+b5lYy6ycjqvbj5AsX6lsL77Ym5AsX6lsL5y6F5zUG77YA',
        'uKvrvuvtvevex1rsqu5tue9sva',
        'q0yTv29YA2vYCY1tvui',
        'runesa',
        'zg93BMXVywrZ',
        'CMvZCeHLywrLCG',
        'ywrTAw4VqurelNr4Da',
        'Cg93',
        'B3v0yM91BMrZ',
        'quXmt0nbvevFu1vdq0vtuW',
        'ywXSB3DszxrYEq',
        'BMfTzwrdDxj2zq',
        'BgfZDeLUzgv4t2y',
        'AMfUla',
        'lcbJyw5KAwrHDgvZpq',
        'yxj0AwnSzxm',
        'DMLLDW',
        'DMLW',
        'u09sva',
        'AxnjBNrLz2vY',
        'Aw52ywXPzcbOzwfKzxiGzM9YBwf0',
        'CgfNzxngDw5JDgLVBNnjBNzVy2f0Aw9UC0fKyxb0AxzLr3jVDxbZ',
        'ANvTCc5ODg1S',
        'ANnVBG',
        'ywrKCMvZCYbPCYbLBxb0EsWGywrKCMvZC1r5CguGAxmG',
        'ywnJB3vUDhm',
        'w1Dt6l2S5y+rxsdLJy/ORQ7NSBVLNOS6ia',
        'zgv0ywLS',
        'zg93BMXVywrFzgv0B3vY',
        '6k6I6zIf6l2S5O2I6ywn572U',
        'CMvJzwL2zvnLCNzLCKHLBgXV',
        'DhvUBMvSksbvAwqVmhG',
        'sw52ywXPzcbjuhy0igfKzhjLC3mGBgvUz3rO',
        'C3vIy29UDMvYDgvY',
        'w1rvuK7KU6pNKizDios7O+EqHUwiSdOG',
        'sw52ywXPzcbKyxrH',
        'icHbrvmTr0nnkq',
        'zMfX',
        '5A2x6iQclca',
        '5PYQ5OM+5yIW6lsM5OI3',
        'v1mGBg9JywWGC3bLzwqTDgvZDcbYzxf1zxn0igjVzhKGAxmGDg9VigXHCMDL',
        'yxbWBgLJyxrPB24VEc15yw1SoYbJAgfYC2v0pxv0zI04',
        '8j+pOIa8yJ5bu07VVjO8l2i+',
        '5PYS5zYWsvdLUPm',
        'u1vctKfnrq',
        'vfvstIbdB25Uzwn0Aw9UqMLUzcbMywLSzwq',
        '6yEn5A6A5zcr5lITlI4U',
        'CMvQzwn0',
        'q291BgqGBM90ihjLC29SDMuG',
        'zw5J',
        'y2XHC3nPzNK',
        'vfvstIbWAxbLBgLUzwqGCMvXDwvZDcb0Aw1LzcbVDxq',
        'C291CMnL',
        'r0vu',
        'BxmG5ywX',
        'zNjVBq',
        '6kEJ5P6q6zo+5BYp5lUJ55cg5y+c5PwW5AsX6lsLoG',
        'jNrSCZeZpq',
        'q1jfqvrfx1bfuK1ju1njt05FuKvrvuvtva',
        'DgvHBq',
        'BNrW',
        'ios9V+EuQfryvoIUSow9LE+8JowfSq',
        '5lUJ55cg5Qoa5Rwl5zon5BQu5PEG5Pwi',
        'AxrLBq',
        'ndqZ',
        'y291CNnL',
        'C2v0vvrdsg91CNm',
        'BgLICMfYEq',
        'u1nuucbmq1aGq29UzMLNDxjLlufJAYb0Aw1LzcbVDxq',
        'zxjYB3i',
        'jNvYBd0',
        'sfruufmG5lUJ55cgienptK5fq1qG5zon5BQu5As06l+h6zw/5OIw5PEG5Pwi',
        'ios4JUwUNUMzHsa',
        'sw52ywXPzcbKB21HAw4Gzgf0yq',
        '6zQp5PY65PwW6yEp',
        'mZq2ntm1mM9XrM1wDW',
        'Aw50CM8',
        'y2XPzw50qxbWsxy',
        'w0Huvfbt5lUJ55cgxsbbrvmTr0nnifrmuYdMJ6hMIyVLPlhOTkxVViZLM57PGiaGq2HHq2HHmJaG5yw85A655QIH5BYpoIa',
        'ywXS',
        'vfvstIbdB25Uzwn0Aw9UqMLUzcbYzxf1zxn0ihrPBwvKig91Da',
        'C2HHCMu',
        'Aw52ywXPzcbtnsbYzxf1zxn0igrHDge',
        'u2v0lunVB2TPzq',
        'veLnrq',
        'zgLZy3vZCW',
        'qIaTpIa4lJGUnc40oJuZ',
        'Dw5ZDxbWB3j0zwqGy29TBwfUzcWGB25SEsbuq1aVvurqigLZigfSBg93zwq',
        'C2nOB2XHCI5NB29NBguUy29T',
        'venqx0nptKnvuLjftLrFreLbta',
        'wc1gB3j3yxjKzwqTrM9Y',
        'y29UDgfJDa',
        'CgrM',
        'AxbqywnRzxq',
        'Ahr0Chm6lY9ZCgvLzc5JBg91zgzSyxjLlMnVBs8',
        'veXtihjLywqGDgLTzw91Da',
        'n2PfDfr1wG',
        '6ywn572U6yEn572U5AsX6lsL77Ym5AsX6lsL5y6F5zUG77YA',
        'kMXVywrZAgfYzs5VCMC',
        'zMLSzxm',
        'Cgf5Bg9Hze9MzNnLDa',
        'jMvUy3j5ChrPB249BM9Uzsm',
        'q09otKvdveLptL9jra',
        'zNjVBuvUDhjPzxm',
        'DgLTzw91Da',
        'lcbXDwvYEs1Zzxj2zxiTBMfTztOG',
        '55UU5Qch5lI75PY6',
        'BwvZC2fNzq',
        'twLZC2LUzYbRzxKGCgfPCIbMB3iGy3vYDMu6idb4',
        'CMnVzgu6lY8',
        'z3jWyYzTB2rLpwD1BG',
        '55U05O6L5y+r6ycb',
        'yxnZAwDU',
        'q0Xpu0ve',
        'ywjVCNq',
        'quXmt0nbvevFuKvrvuvtva',
        'BgvZC29UCW',
        'sw52ywXPzcbtu1rqihbHy2TLDcbSzw5NDgG',
        'y2HHCKf0',
        'q0BLRPJMLRNKVjJPGiK',
        '6ywn572U5lIn5A6m5Pw0',
        'yxjYyxLcDwzMzxi',
        'CMvKDwnL',
        'z28UCgHW',
        '5yQG6l295PE26zE0',
        'ywnJzxb0',
        'CMv2zxjZzq',
        'Chv0',
        'zgLNzxn0',
        'DgfN',
        '5A6m5Pw06iQc54k56lEV5B6e',
        'u1mGAgfUzhnOywTLigrLy3j5ChqGzMfPBgvKicHLBMm9',
        'ihWG5y+n5lUJsva6ia',
        'zw5JCNLWDfrSCZeZ',
        'ChvIBgLJs2v5uMf3',
        'y2XPzw50x3n1yM5LDa',
        '5PYO6AMS5y+n5lUJ5zYW5z2a',
        'C29YDa',
        'qwrTAw5Ftg9NAw4',
        '5y+n5lUJ5zYW5z2a',
        'ANvTCa',
        'C2vYDMvYsgfUzhnOywTLsxy',
        '6l+E5O6L6lAf5PE2',
        'Dg9mB2nHBgvtDhjPBMC',
        'u3vIy29UDMvYDgvYigzVCIa',
        'twLZC2LUzYbutfmGms4YigXLywyGy2vYDgLMAwnHDgu',
        'y29TCgXLDgLVBNm',
        'jNnVCNq9',
        'w+ACQoMPRowpJEs7O10G5lUJ55cg5yIWoIa',
        'Aw52ywXPzcbZCYbPChy2igXLBMD0Aa',
        'l2rUCY1XDwvYEq',
        'yxnU',
        'vfLqrq',
        'mdaWmdaWmdaTmdaWmc00mdaWltGWmdaTmdaWmdaWmdaWmdaW',
        'venqigHHBMrZAgfRzsb0AhjVDwDOifntvfaGDgLTzwqGB3v0',
        'Aw52ywXPzcbHzgrYzxnZvhLWzsbPCYa',
        '5zcV55sOmfjuva',
        'z2vUzxjHDgLVBG',
        'zw5JCNLWDfrSCZeY',
        'AgvHzgvYCW',
        'l2vKz2u',
        'C2vHC29U',
        'y2XPzw50sgfUzhnOywTLsxy',
        'B2jQzwn0',
        'yxv0Ad07ifbHDgG9lZSGtwf4lufNzt0WoYbiDhrWt25SEq',
        'vfHu',
        'AgfUzhnOywTLu2vJCMv0',
        'vurqigLZig5VDcbZDxbWB3j0zwq',
        'C2HVDW',
        'w1rduoI9RowpKv0G55U06l+Eia',
        'ioACQUIoT+wpLUwiSfryvowsJehORRdLVzxVViZKVB/NLkHbqufb6k6W5B2v77Ym5ywX',
        '5PEG5Rov6l+E5O6L5yIW5lUJ55cg5PYn5yQH5zMO',
        'DhLWzq',
        'CxvHBNr1BxvSDa',
        'uhjVEhKTqxv0Ag9YAxPHDgLVBJOGqMfZAwmG',
        'icH0ExbLpq',
        'dqOWdqOncG',
        'C2vYDMvYv3jPDgvjDG',
        'uKvkrunu',
        'lcbZA2LWlwnLCNqTDMvYAwz5pq',
        'q2LWAgvYDgv4Dcb0B28GC2HVCNq',
        'C3vI',
        'q1jfqvrfx1bfuK1ju1njt05Fu1vdq0vtuW',
        'DgnW',
        'zxzLBNq',
        'runi',
        'sw52ywXPzcb0CM9Qyw4GCMvXDwvZDa',
        'zMvLza',
        'DgHYzwfK',
        'C3rHDhvZ',
        'BgfUzW',
        'z3jWyYzTB2rLpw11BhrP',
        'yJy0',
        'l2XVz2LU',
        'yMfKigDHDgv3yxK',
        'Dhj1zq',
        'Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29TlW',
        'CxvHBNG',
        'w1npq0TtnEs7O+EqHL0G5lUJ55cg5yIWoIa',
        'D3m9Dhj1zq',
        'l2fJy291BNrZ',
        'CMvZDwX0',
        'icJNTklLVju6ia',
        'ihrVigfUieLqDJqGywrKCMvZCYbMB3iGvfvstIbdt05orunu',
        'zNjPzw5K',
        'yxv0Ad0',
        'zxzLBNrZ',
        'zMLUywXSEq',
        'y2XVC2vK',
        'CMfUzg9T',
        'u05j',
        'y2HYB21L',
        'Ahr0Chm6lY9ZCgvLzc5JBg91zgzSyxjLlMnVBs9SB2nHDgLVBNm',
        '6ywn572U5BEY5l+D5A2y',
        'C2vHCMnO',
        'odGYmJrLExzLu2e',
        '562j5B6f56M6',
        'DgCUANnVBG',
        'BwfUAhvH',
        'y2f0zwDVCNK',
        'u1nuucbivfrqigHLywrLCIbYzwfKihrPBwvKig91Da',
        'y2H1BMS',
        'wc1dBhvZDgvYlunSAwvUDc1jua',
        'ywrTAw4Vz2v0qureqvbj',
        'wfveua',
        'iehORRdLVzu6',
        'EgH0DhaMBw9Kzt1ZDhjLyw0TB25LjMv4DhjHpq',
        'runiq29UzMLN',
        'r2v0x1nvqG',
        'yM9KEq',
        'jMzYywDTzw50pq',
        'C3vT',
        'Bw9KztOGCNvSzq',
        'zxbPC29Kzxm',
        'C2vYDMvYv3jPDgvdCNLWDg9lzxK',
        'w1rduos4I+IHJf0G5Ase55cg5AsX6lsLoIa',
        'yMjZ',
        'B3jKzxi',
        '5y+n5lUJsva',
        'DxrMltG',
        'CMvJB3jKsgfUzhnOywTL',
        'C2HVCa',
        'we9sx1bfrvjFqureuKvtuW',
        'C2vYDMLJzxm',
        'Cgf0Ag5HBwu',
        'lNr4Da',
        'lJWVCd4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kcIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+pceTlsaVlNnLy3rPB24Gls0+cGOGicaGicaGicaGica8zgL2ignSyxnZpsjJzI1LCNjVCI1MB290zxiGy2yTD3jHChbLCIb3lti0mcbSzZP3lwz1BgWGChKTmtaGC206ChKTncbZBtPWEc04ig14lwf1Dg8GDgv4Dc1Jzw50zxiGC206Dgv4Dc1Szwz0igjVCMrLCI1ZB2XPzcbIB3jKzxiTmcbIB3jKzxiTDcbIB3jKzxiTz3jHEs0ZmdaIpGOGicaGphaGy2XHC3m9iNrLEhqTmtmIpGOGicaGica8C3bHBIbJBgfZCZ0Iy2yTzM9VDgvYlwL0zw0GC206yMXVy2SGC206BwiTmsi+q2XVDwrMBgfYzsbsyxKGsuq6idXZDhjVBMCGy2XHC3m9iMzVBNqTC2vTAwjVBgqIpIa',
        'y2HHCKnVzgvbDa',
        'y2HPBMe',
        'Aw5KzxHpzG',
        'otC4mtuYyLHxr3jV',
        'y2XPzw50qxbWs2v5',
        'CMvHzgfIBgu',
        'C3rHDhvZvgv4Da',
        'y2XVC2u',
        'rw1WDhKGy2vYDgLMAwnHDgu',
        'w0Huvfbt5lUJ55cgxsbutfpNIyJMNkW6ia',
        'D2fYBG',
        'Bg9N',
        'ioEAHcbbl0fbqueG5PYQ6i635B6x5y+V55sO6kEJ5P6q57Ut5P6C77Ym6Ake5yQG6l2956UE6ycF5lIn5y+V55sO77Ym5zUE6yca5yIW5y6F5AEligHVC3rUyw1LioEBToI/NUoaGG',
        'C3rHCNm',
        'q2fJAguTq29UDhjVBa',
        'w0rVsoAFPEIVOL0G5y+r6ycb5P+L6k+I5OQL5PAhia',
        'ChjVzhvJDhm',
        '5PEG5Pwi55Qeifnpq0TtiowCSowDGoAGVow8J++8MUIUPoIVGEMdQowiHUw/HEMHU+AyRYaIDxnLCM5HBwu6CgfZC3DVCMqIioEAHow9OUw8JW',
        'DgfYz2v0',
        'ywPHEa',
        'q09otKvdvf9srvfvrvnu',
        '5y+n5lUJ5ywC5BQv',
        'BMv3',
        'zMLSBa',
        'ifrutd0',
        'Cgf5',
        'BxmG',
        'zM9YDw1Z',
        'AgfUzhnOywTLugfYC2vY',
        'BwfN',
        'zg9Uzq',
        'Ahr0Chm6lY9KBNmUywXPzg5ZlMnVBs9KBNmTCxvLCNK',
        'w1rduoI9RowpKv0G5BcD6k+v55U06l+E5yIWoIa',
        'ywrTAw4VBg9NlMPZB24',
        'u2f2zv9dDxn0B21FsvbZ',
        'cGK8iurpq1rzueuGAhrTBd4kctXODg1SpGOjpgHLywq+cGK8DgL0Bgu+v2vSy29Tzsb0BYbUz2LUEce8l3rPDgXLpGOjphn0EwXLpGOjcwjVzhKGEWOjcqL3Awr0AdOGmZvLBtSkcqKjBwfYz2LUoIaWigf1Dg87cGKjcwzVBNqTzMfTAwX5oIbuywHVBweSifzLCMrHBMeSiefYAwfSlcbZyw5ZlxnLCMLMoWOjcx0kctWVC3r5Bgu+cGK8l2HLywq+cGK8yM9KEt4kctXOmt5xzwXJB21LihrVig5NAw54itWVAde+cGK8Cd5jzIb5B3uGC2vLihrOAxmGCgfNzsWGDgHLig5NAw54ihDLyIbZzxj2zxiGAxmGC3vJy2vZC2z1BgX5igLUC3rHBgXLzcbHBMqkcxDVCMTPBMCUiez1CNrOzxiGy29UzMLNDxjHDgLVBIbPCYbYzxf1AxjLzc48l3a+cGOjpha+rM9Yig9UBgLUzsbKB2n1BwvUDgf0Aw9UigfUzcbZDxbWB3j0ihbSzwfZzsbYzwzLCIb0BWOjpgeGAhjLzJ0IAhr0CdOVl25NAw54lM9YzY8IpM5NAw54lM9YzZWVyt4UpgjYlZ4kcunVBw1LCMnPywWGC3vWCg9YDcbPCYbHDMfPBgfIBguGyxqkctXHigHYzwy9iMH0Dha6lY9Uz2LUEc5JB20ViJ5Uz2LUEc5JB208l2e+lJWVCd4kcGK8Cd48zw0+vgHHBMSGEw91igzVCIb1C2LUzYbUz2LUEc48l2vTpJWVCd4kctWVyM9KEt4kctWVAhrTBd4kcq',
        'veXtideUmIbZzxj2zxiGrMLUAxnOzwqGDMvYAwz5igzHAwXLza',
        'mJaYnI0Xmc0WocaYmJOYmZOYnW',
        'C3nZCY5Uzxq',
        'C2v0qMLNvwLUDdy0',
        'Ag9Tzq',
        'DgvHy2HLCG',
        'vfvstIbdt05orunuigzHAwXLza',
        'C3bLy2LHBa',
        'ihWG5ywO5BgaoIa',
        'uMvHzgfIBgvtDhjLyw0GAxmGy2XVC2vK',
        '6k6W5B2v77Ym56UE6ycF5OUO5y+3ia',
        'w2DsuenDiowrVEs4REIVT+AXGJOG',
        'q29UBMvJDgLVBIbMywLSzwq6ieHuvfaG',
        'q2HHq2HHmJaTug9SEteZmduGyxv0AgvUDgLJyxrPB24GzMfPBgvK',
        'u0vsvKzbsuW',
        'msW0mc02mcWZmc01mcX0BhnOzwXSBW',
        'zgvJCNLWDfrSCZeY',
        'BM8Ty2fJAgu',
        'zgHJCdOVlW',
        'zg9JDw1LBNq',
        '77Yi56M657Ut5P6C77Yj',
        'CMvHzenODw5R',
        'w+wpJEs7O+INO+AEKf0G',
        'y291CNnLCW',
        '5yU/5yQO5Q2K6BUy6k6K5A+g6zkL77Ym5PYj6zYa5Rgc6k+36iEQ6kgm6ycA6l+h5RE75yQG5y+y6yEps0vz6l+B6kgm5l+U5Ps5',
        'iYfnqu5br0velunptKzjrYa',
        'AhjLzG',
        'DhvU',
        'tuq1',
        'DgXZ',
        'AgfUzhnOywTLvgXZmtm',
        'jMnVBMzPzZ0',
        'qxqGBgvHC3qGB25LifrmuYb2zxjZAw9Uig11C3qGyMuGzw5HyMXLza',
        'ioAxPEw/L+MaMUEFPtWVyJ4kcG',
        'ios4JEs4GoIhTo+8Jow3SUIhQUwkQowiH+AnOG',
        'p3bYB3H5Axa9Dhj1zq',
        'zxHHBxbSzs5JB20',
        'y2L0Eq',
        'zw5KC1DPDgG',
        '5ygC5Q2I5BM25yI35PAW',
        'w1Dt5PI+5BYp5lYG6l6txsdPMj/LIjFMUQlLH7O6ia',
        'Dg9Rzw5PC2G',
        'rgvJCNLWDgLVBIbMywLSzwq',
        'zM9YrwfJAa',
        'DxnLCG',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'yNLVyG',
        'BM92zwW',
        'C3n0CdOVlW',
        'z2fTzxm',
        'Dgv4Dc9WBgfPBJSGy2HHCNnLDd11DgyToa',
        'CgfYC2u',
        'C2L6zq',
        'ywXSu2v0DgXLza',
        'twLZC2LUzYbutfmGms4YifnLCNzLCKTLEuv4y2HHBMDL',
        'tK9usu1q',
        'u0Hblti1nG',
        'CxvLCNLjBKHLywrLCG',
        '6A2p54oi5OcD',
        'r08Yu09ds1m1',
        'z2XVyMfSChjVEhK',
        'z3vU',
        'D2vIC29JA2v0',
        'EMGTDhC',
        'w1veuoI9RowpKv0Gre5tioI9RowpKEwKSEI0PtOG',
        'DhvUBMvSicHODhrWCZOVl2DPDgH1yI5JB20V',
        '6kEJ5P6qu09ds1m15zYW5z2a5AsX6lsLoG',
        '8j+mKca8yJ5juo+8MJWVyJ48y29Kzt4',
        'qurelNr4Da',
        'vfvstG',
        'C3vWCg9YDfrSCZeY',
        'CMvN',
        'DhvYBJOVlW',
        'w+wpJEs7O+I/NUAoPv0G5PYS5OM56l+E5O6L5AsX6lsLoIa',
        'DxbSB2fKpq',
        'Bwv0yq',
        'w+wpJEs7O+I/NUAoPv0G5BM25y+r5BcD6k+via',
        'DhvYBJ0',
        'C2v0vwLUDdmY',
        'z2vUzxjHDgvlzxK',
        'CMvKAxjLy3qUCgHW',
        'Dg9mB3DLCKnHC2u',
        'jMv4CgfUzd0',
        'AxndB250CM9S',
        '6k+35Rgciengx0Ptt04UvxnHz2vbueKG5AsX6lsLoIa',
        'u1nuucb1BNn1ChbVCNrLzcbqufaGyxv0AgvUDgLJyxrPB24GChjVDg9JB2W6idb4',
        'ChjVEhLPCa',
        'C2LNBG',
        'w+IUOUMyHEwgHEwUUv0G5lIn6kEe6iYd55QesvdMOlZLVi/LT7lLV73NLAu6ia',
        'ywrTAw4Vz2v0q2XVDwrMBgfYzvvZywDL',
        'sgvSBg9szxrYEvjLCxvLC3qGAxmGBM90ihn1ChbVCNrLzcbIEsbutfndBgLLBNrnAw5P',
        'CgLJDhvYzq',
        'C2fSzq',
        'C3bSAxq',
        'CMvZB2X2zwrgCM9T',
        'zg9JDw1LBNrZ',
        'yxj0AwnSzq',
        'q09otKvdvf9tvundrvnt',
        '5lYy6ycj6k6I6zIf55sF5OIq5zMO5Qc85BYp5yYw5BYc5BI4oG',
        'se9tvfm',
        'ChjVzhvJDa',
        'zgvJB2rL',
        'zg93BMXPBMTdB250CM9SBgvY',
        'lsb7',
        'CxvLCNKGz2v0qMLSBgLUz01LDhjPy3mOjefJy291BNrjrdOGu3rYAw5NisWGjgzPBhrLCJOGqwnJB3vUDfDVCMTLCNnjBNzVy2f0Aw9UC0fKyxb0AxzLrMLSDgvYx0LUChv0t2jQzwn0ksb7cGKjcqKjDMLLD2vYihSGywnJB3vUDhmOzMLSDgvYoIb7ywnJB3vUDfrHzZOGjefJy291BNrjrh0PihSkcqKjcqKjCgfNzxngDw5JDgLVBNnjBNzVy2f0Aw9UC0fKyxb0AxzLr3jVDxbZkgXPBwL0oIaXmdaWlcbMAwX0zxi6icrMAwX0zxiPihSGC3vTihSGCMvXDwvZDhmGFsb9cGKjcqKjcxDVCMTLCNnjBNzVy2f0Aw9UC0fKyxb0AxzLkgXPBwL0oIaXmdaWmcWGzMLSDgvYoIaKzMLSDgvYksb7ihn1Bsb7ihjLCxvLC3rZih0GFqOjcqKjcx0GFqOjcqKjFq',
        'q0BNLlxKV6hKVjJPGiK',
        'CNvSzv9Zzxq',
        'p3nLy3vYAxr5pxrSCYz0ExbLpq',
        '6i635y+w5l2/55sO6yEp6zsz6k+VoG',
        'Aw5IB3vUzhm',
        'pcfet0nuwvbfigH0BwW+cJWHls1BAwyGBhqGsuuGn10+idXODg1SignSyxnZpsjUBY1QCYbPztyGB2XKAwuIigXHBMC9iMvUlvvtiJ4GpcfBzw5KAwzDls0+cJWHls1BAwyGsuuGn10+icaGidXODg1SignSyxnZpsjUBY1QCYbPztCGB2XKAwuIigXHBMC9iMvUlvvtiJ4GpcfBzw5KAwzDls0+cJWHls1BAwyGsuuGof0+icaGidXODg1SignSyxnZpsjUBY1QCYbPztGGB2XKAwuIigXHBMC9iMvUlvvtiJ4GpcfBzw5KAwzDls0+cJWHls1BAwyGz3qGsuuGof0+pceTlt4GpgH0BwWGy2XHC3m9iM5VlwPZiIbSyw5NpsjLBI1vuYi+idWHls08ivTLBMrPzL0Tlt4kpgHLywq+cJX0AxrSzt5xB3jRzxiGDgHYzxCGzxHJzxb0Aw9UihWG',
        'yxbWCW',
        'zNvUy3rPB24',
        '6zo+5BYp5lUJ55cg',
        'ChjVDg9JB2W',
        'ChvZAa',
        'Dg9gAxHLza',
        'C25PzMzFDgLTzw91Da',
        'y2HHDa',
        '5P2H57Ut5P6C',
        'w+wpJEs7O+INO+AEKf0G6kEJ5P6q5A6m5OIqioAaU+AvSdOG',
        'C2L0zq',
        'z2v0vwLUDde2',
        'z2vVC2L0zq',
        'u1nuucbZzxj2zxiGCMvXDwLYzxmGuefqigf1DgHLBNrPy2f0Aw9U',
        't3jPz2LU',
        'jNn1CMDL',
        'tK9oq0u',
        'oYbqyxrOps87ie1HEc1bz2u9ody0mda7ieH0DhbpBMX5oYbtzwn1CMu7ifnHBwvtAxrLpuXHEa',
        'uKvbte0',
        'o3rSCW',
        'w1veuoI9RowpKv0G5Ps25yIWierouYdOR7FMSyi6ia',
        'y2XHC3m',
        'ufjpwfLjua',
        'Cg9YDa',
        'DM9K',
        'C29JA3m1oI8V',
        'u1nuuenpuLjftefusu9osuq6ihS',
        'CgLJCW',
        'u2LUz2jVEoEdREIHPEs4GEAjP+IHJowKSEI0PtO',
        'CgLWzvrV',
        'ioEAHcbbl0fbqueG6k6W5B2v',
        'Bg9NAw4',
        'zMf2CW',
        'C29JA3m',
        'rvHqqu5e',
        'lcdKUiRPMza6ideWmdaWma',
        'yxbWBgLJyxrPB24VANnVBG',
        'ms4Y',
        'mdeYmZq1nJC4oufcq0rfrKDisuPlte1ot1bruLnuvvzxwfLAywjJzgvMz2HPAMTSBw5VChfYC3r1DND4ExO',
        'yw5PBwu',
        'DJjYyxLol2vKz2u',
        'pc9ZDhjVBMC+pc9ZCgfUpGOGicaGica8C3bHBIbJBgfZCZ0Iy2yTzM9VDgvYlxnLCgfYyxrVCIbZBtPOAwrKzw4IpIzIDwXSoZWVC3bHBJ4kicaGicaGphnWyw4GAwq9iMnMlwzVB3rLCI1PDgvTlwLWiIbJBgfZCZ0Iy2yTzM9VDgvYlwL0zw0GAgLKzgvUihnToMjSB2nRihnToM1IlteIpGOGicaGicaGifLVDxiGsva6cIaGicaGicaGpgj1DhrVBIb0ExbLpsjIDxr0B24IigLKpsjJzI1MB290zxiTAxaTCMv2zwfSiIbJBgfZCZ0Iy2yTzM9VDgvYlwLWlxjLDMvHBc1IDg4IpKnSAwnRihrVihjLDMvHBdWVyNv0Dg9UpGOGicaGicaGidXZCgfUignSyxnZpsjOAwrKzw4IigLKpsjJzI1MB290zxiTAxaIpG',
        'oLXZkG',
        'C2LUz2jVEa',
        'CMfUA2LUzW',
        'C2LNBMfS',
        'q2HHDeLe',
        'qvno',
        'Cgf0Aa',
        'jNbHCNnLx21Vzgu9sfrntcz0zxH0pq',
        '5l+D5A2y6ywn572U5AsX6lsLoG',
        'D3mUCMvHzhLtDgf0zsbPCYbUB3qGB3bLBG',
        'C3vYz2uMDMvYptq',
        '8j+tJca8yJ7NSBVLNOVVVjO8l2i+iW',
        'C2vYDMvYCW',
        'BM92zwXZ',
        'zgvMyxvSDf9KB21HAw5FCMvZB2X2zxi',
        'ywrTAw4',
        'Bwf4q2H1BMS',
        'u1nuucbYzwfKihrPBwvVDxq',
        'l2DYyxbOCwW',
        'C3rHCG',
        '6lsM5OI36i635y+w5AsX6lsLoIa',
        'y29SBW',
        'z2v0vwLUDdmY',
        'AgfUzhnOywTLq29TCgXLDgu',
        'Aw52ywXPzcbZCYbKB21HAw4GBgvUz3rO',
        'C2vYDMvYqxbWq3j5ChrVs2v5',
        'w0rVsoAFPEIVOL0G5zg95lIT57Yt5A2yia',
        'C2HPzNq',
        'mti3lJaUmc4XoJeYmZqJ',
        'l3n1yJ90B2TLBJ0',
        'C3bSAwnL',
        'Ahr0Chm6lY9LzhqTCgfNzxmUz2L0AhvIlMLV',
        'BwL4zwq',
        'ieHuvfaVms4XdqPiB3n0oIa',
        'AgfUzhnOywTL',
        'AM9PBG',
        'Dw5KzwzPBMvK',
        'z3jWyY1VChrZoG',
        '5P+L6k+I5AsX6lsLoIa',
        'Aw1N',
        'ue9tva',
        'jNnUAt1LEgfTCgXLlMnVBsy',
        't0zgx0XprW',
        'qM90vg9Rzw4',
        'C3rVCMu',
        'vw5RBM93BG',
        'vurq',
        'yxv0Aa',
        'y2LWAgvYu3vPDgu',
        '5y2p6k6U57g75z6l',
        'Aw52ywXPzcbZCYbHzgrYzxnZvhLWztOG',
        'A25VD2XLzgDL',
        'DhvUBMvSkq',
        'BgL2zq',
        'y3aUy2XVDwrMBgfYzs5JB20',
        'A2v5ugfPCNm',
        'yxbWBgLJyxrPB24Vzg5Zlw1LC3nHz2u',
        'C29Tzq',
        'ios4UKLq5zYW5z2a77Ym55U05O6L5l2/55sO',
        'z2v0rNvSBfLLyxi',
        'Aw52ywXPzcbZCYbPChy0igXLBMD0Aa',
        'z2v0v3jPDgvY',
        'vfvstIbdCMvHDgvqzxjTAxnZAw9UihjLC3bVBNnLihrPBwvKig91Da',
        'dqPvC2vYlufNzw50oIbnB3PPBgXHlZuUma0kq29UBMvJDgLVBJOGy2XVC2uncG0k',
        'Aw1WB3j0s2v5',
        'CgXHEwXPC3q',
        'C3rYAw5NAwz5',
        'lcdMGlVORQe6ia',
        'sg9ZDa',
        'Bg9NlMPZB24',
        'zw50CMLLCW',
        'pwv4yw1WBguUy29TjMzWpq',
        'Dg90ywW',
        '55UU5Qch56UV5y+J',
        'DxrSCW',
        'zwfYBhKGzgf0ysbPCYb0B28GBgfYz2u',
        're5t',
        'y21JyW',
        'l0fdtdrtu1iVCMvMCY9OzwfKCY9TywLUl0nSyxnOl2nVBMzPzY9bq0W0u1nsx09UBgLUzv9nAw5Px011BhrPtw9Kzv9drI5PBMK',
        '6k+75y+wy29UzMLNx0Ptt07LH7RPLjK6ia',
        'jNH1zha9',
        'mta0lJe2lJaUmc8XmW',
        'CMvHC29U',
        'Aw5KzxbLBMrLBNrFy2fJAgu',
        '5y+n5lUJu29JA2v0',
        'zwrNzxr1BM5LBcbYDw50Aw1LigvYCM9YoIa',
        'yxjYyxLIDwzMzxi',
        'u1vcvxbKyxrLvgLTzq',
        'AxngAw5PDgu',
        'w1veuoI9RowpKv0Gre5tioIVT+AXGUw3SUwgMEwfPEs4IUA4UdOG',
        'q0Xpu0LorW',
        'oc44lJqUna',
        'rvjst1jFq09erq',
        'oIb1CgXVywqGCxvLDwuGB3zLCMzSB3CGka',
        'y2XVDwrMBgfYzs1Ly2GUy29T',
        'Bwv0Ag9K',
        '6iEQ5A6A5lMjsvdLT7lKV53LRzG',
        'zgXVywq',
        'yxzHDgfY',
        'zNjHz21LBNq',
        'C2vYAwvZ'
    ];
    a0_0x2d4e = function () {
        return _0x41c1b1;
    };
    return a0_0x2d4e();
}
async function WebSocket发送并等待(_0x122610, _0x1eb515) {
    const _0x1c80c4 = a0_0x43d2af, _0x92da74 = _0x122610[_0x1c80c4(0x544)](_0x1eb515);
    if (_0x92da74 && typeof _0x92da74[_0x1c80c4(0x56e)] === 'function')
        await _0x92da74;
}
function 创建Grain收纳器(_0x17f940, _0x2a7f2e = ![]) {
    const _0x5b26f6 = a0_0x43d2af;
    let _0x2e85b3 = [], _0x1252a9 = 0x0, _0x1bd4c6 = 0x0, _0x58b740 = null;
    const _0x5b2680 = () => _0x1252a9 >= _0x2e85b3[_0x5b26f6(0x292)], _0x17ba94 = () => {
            const _0xb132de = _0x5b26f6;
            _0x1252a9 > 0x20 && _0x1252a9 * 0x2 >= _0x2e85b3[_0xb132de(0x292)] && (_0x2e85b3 = _0x2e85b3[_0xb132de(0x548)](_0x1252a9), _0x1252a9 = 0x0);
        }, _0x459864 = () => {
            const _0x28726e = _0x5b26f6;
            if (_0x5b2680())
                return null;
            const _0x25bc0c = _0x2e85b3[_0x1252a9];
            return _0x2e85b3[_0x1252a9++] = undefined, _0x1bd4c6 -= _0x25bc0c[_0x28726e(0x3f7)][_0x28726e(0x574)], _0x17ba94(), _0x25bc0c;
        };
    return {
        get '字节数'() {
            return _0x1bd4c6;
        },
        get '条目数'() {
            const _0x4baf67 = _0x5b26f6;
            return _0x2e85b3[_0x4baf67(0x292)] - _0x1252a9;
        },
        get '为空'() {
            return _0x5b2680();
        },
        '清空'(_0x2aa241 = null) {
            const _0x4f40e8 = _0x5b26f6;
            if (_0x2aa241)
                for (let _0x587094 = _0x1252a9; _0x587094 < _0x2e85b3[_0x4f40e8(0x292)]; _0x587094++) {
                    if (_0x2e85b3[_0x587094])
                        _0x2aa241(_0x2e85b3[_0x587094]);
                }
            _0x2e85b3 = [], _0x1252a9 = 0x0, _0x1bd4c6 = 0x0;
        },
        '收纳'(_0x2f5146) {
            const _0x1bcd2c = _0x5b26f6;
            if (!_0x2f5146?.['chunk']?.['byteLength'])
                return ![];
            return _0x2e85b3[_0x1bcd2c(0x4a8)](_0x2f5146), _0x1bd4c6 += _0x2f5146['chunk'][_0x1bcd2c(0x574)], !![];
        },
        '合包'() {
            const _0x21acc4 = _0x5b26f6, _0x478b40 = _0x459864();
            if (!_0x478b40)
                return null;
            const _0xa40534 = [_0x478b40];
            if (_0x5b2680() || _0x478b40[_0x21acc4(0x3f7)][_0x21acc4(0x574)] >= _0x17f940)
                return {
                    'chunk': _0x478b40[_0x21acc4(0x3f7)],
                    'items': _0xa40534
                };
            let _0x374521 = _0x478b40[_0x21acc4(0x3f7)][_0x21acc4(0x574)], _0x3e6659 = _0x1252a9;
            while (_0x3e6659 < _0x2e85b3[_0x21acc4(0x292)]) {
                const _0x26fd00 = _0x374521 + _0x2e85b3[_0x3e6659][_0x21acc4(0x3f7)][_0x21acc4(0x574)];
                if (_0x26fd00 > _0x17f940)
                    break;
                _0x374521 = _0x26fd00, _0x3e6659++;
            }
            if (_0x3e6659 === _0x1252a9)
                return {
                    'chunk': _0x478b40[_0x21acc4(0x3f7)],
                    'items': _0xa40534
                };
            const _0x53e59d = _0x58b740 ||= new Uint8Array(_0x17f940);
            _0x53e59d[_0x21acc4(0x1f2)](_0x478b40[_0x21acc4(0x3f7)], 0x0);
            let _0x1c3d40 = _0x478b40[_0x21acc4(0x3f7)][_0x21acc4(0x574)];
            while (_0x1252a9 < _0x3e6659) {
                const _0x455186 = _0x2e85b3[_0x1252a9];
                _0x2e85b3[_0x1252a9++] = undefined, _0x1bd4c6 -= _0x455186[_0x21acc4(0x3f7)][_0x21acc4(0x574)], _0xa40534['push'](_0x455186), _0x53e59d[_0x21acc4(0x1f2)](_0x455186['chunk'], _0x1c3d40), _0x1c3d40 += _0x455186[_0x21acc4(0x3f7)][_0x21acc4(0x574)];
            }
            _0x17ba94();
            const _0x37b6ce = _0x53e59d[_0x21acc4(0x68d)](0x0, _0x374521);
            return {
                'chunk': _0x2a7f2e ? _0x37b6ce[_0x21acc4(0x548)]() : _0x37b6ce,
                'items': _0xa40534
            };
        }
    };
}
function 创建上行Grain合包流(_0x36643a = 上行合包目标字节) {
    const _0x1a639c = a0_0x43d2af, _0x39770c = typeof IdentityTransformStream !== _0x1a639c(0x4f2) ? new IdentityTransformStream() : new TransformStream(), _0x126336 = _0x39770c[_0x1a639c(0x5ab)][_0x1a639c(0x50b)](), _0x19a143 = new Uint8Array(_0x36643a);
    let _0x36b6df = 0x0, _0x2a1ac5 = null, _0x466092 = null, _0x3646ac = Promise[_0x1a639c(0x58b)]();
    const _0x4c881a = () => {
            _0x2a1ac5 && (clearTimeout(_0x2a1ac5), _0x2a1ac5 = null);
        }, _0x252a98 = async _0x34defe => {
            const _0x1b5b77 = _0x1a639c;
            if (_0x466092)
                await _0x466092;
            _0x466092 = _0x126336[_0x1b5b77(0x668)](_0x34defe);
            try {
                await _0x466092;
            } finally {
                _0x466092 = null;
            }
        }, _0x585e68 = async () => {
            const _0x2a94c6 = _0x1a639c;
            if (_0x36b6df) {
                const _0x957320 = _0x19a143[_0x2a94c6(0x548)](0x0, _0x36b6df);
                _0x36b6df = 0x0, await _0x252a98(_0x957320);
            }
        }, _0x13e385 = () => {
            const _0x54214f = _0x1a639c;
            _0x3646ac = _0x3646ac[_0x54214f(0x56e)](() => _0x585e68())[_0x54214f(0x5ec)](() => {
            });
        }, _0x115b89 = () => {
            if (_0x2a1ac5)
                return;
            _0x2a1ac5 = setTimeout(() => {
                _0x2a1ac5 = null, _0x13e385();
            }, 0x1);
        };
    return {
        'readable': _0x39770c[_0x1a639c(0x416)],
        '写入': async _0x566d40 => {
            const _0x4ccf3b = _0x1a639c, _0x16b275 = 数据转Uint8Array(_0x566d40);
            if (!_0x16b275[_0x4ccf3b(0x574)])
                return;
            if (_0x16b275[_0x4ccf3b(0x574)] >= _0x36643a) {
                _0x4c881a();
                if (_0x36b6df)
                    await _0x585e68();
                await _0x252a98(_0x16b275);
                return;
            }
            if (_0x36b6df + _0x16b275[_0x4ccf3b(0x574)] >= _0x36643a) {
                const _0x4b296f = new Uint8Array(_0x36b6df + _0x16b275[_0x4ccf3b(0x574)]);
                _0x4b296f['set'](_0x19a143[_0x4ccf3b(0x68d)](0x0, _0x36b6df), 0x0), _0x4b296f[_0x4ccf3b(0x1f2)](_0x16b275, _0x36b6df), _0x36b6df = 0x0, _0x4c881a(), await _0x252a98(_0x4b296f);
            } else
                _0x19a143[_0x4ccf3b(0x1f2)](_0x16b275, _0x36b6df), _0x36b6df += _0x16b275[_0x4ccf3b(0x574)], _0x115b89();
        },
        '结束': async () => {
            const _0x1ac8fe = _0x1a639c;
            _0x4c881a();
            try {
                await _0x3646ac, await _0x585e68(), await _0x126336[_0x1ac8fe(0x418)]();
            } finally {
                try {
                    _0x126336[_0x1ac8fe(0x1d5)]();
                } catch (_0x14b331) {
                }
            }
        }
    };
}
function 创建上行写入队列({
    获取写入器: _0xc6af2c,
    获取连接任务: 获取连接任务 = null,
    释放写入器: _0xebf795,
    重试连接: _0x43b75,
    关闭连接: _0x414733,
    名称: 名称 = a0_0x43d2af(0x226)
}) {
    const _0x27f502 = 创建Grain收纳器(上行合包目标字节);
    let _0x735225 = ![], _0x42ab31 = ![], _0x32874b = [], _0x44ed7d = null;
    const _0x4aacb6 = (_0x970506, _0x589a81 = null) => {
            const _0x24082c = a0_0x5eca;
            if (!_0x970506)
                return;
            for (const _0x598dba of _0x970506) {
                if (_0x589a81)
                    _0x598dba[_0x24082c(0x349)](_0x589a81);
                else
                    _0x598dba['resolve']();
            }
        }, _0x15b271 = () => {
            const _0x217179 = a0_0x5eca;
            if (_0x27f502[_0x217179(0x2f1)] || _0x735225 || !_0x32874b[_0x217179(0x292)])
                return;
            const _0x124c41 = _0x32874b;
            _0x32874b = [];
            for (const _0x40de5a of _0x124c41)
                _0x40de5a();
        }, _0x357c27 = (_0x49c462 = null) => {
            const _0x1e9d10 = a0_0x5eca, _0x40421a = _0x49c462 || (_0x42ab31 ? new Error(名称 + _0x1e9d10(0x27d)) : null);
            if (_0x40421a)
                _0x27f502['清空'](_0xf95b90 => _0x4aacb6(_0xf95b90[_0x1e9d10(0x3ac)], _0x40421a)), _0x4aacb6(_0x44ed7d, _0x40421a), _0x44ed7d = null;
            else
                _0x27f502['清空']();
            _0x15b271();
        }, _0x2fe027 = () => {
            const _0x9a4bc5 = a0_0x5eca, _0x16f627 = _0x27f502['合包']();
            if (!_0x16f627)
                return null;
            let _0x4e0dec = !![], _0x46cf3f = null;
            for (const _0x48b9c0 of _0x16f627[_0x9a4bc5(0x2e6)]) {
                _0x4e0dec = _0x4e0dec && _0x48b9c0[_0x9a4bc5(0x324)];
                if (_0x48b9c0['completions'])
                    _0x46cf3f = _0x46cf3f ? _0x46cf3f[_0x9a4bc5(0x283)](_0x48b9c0['completions']) : _0x48b9c0[_0x9a4bc5(0x3ac)];
            }
            return {
                'chunk': _0x16f627[_0x9a4bc5(0x3f7)],
                'allowRetry': _0x4e0dec,
                'completions': _0x46cf3f
            };
        }, _0x577789 = async () => {
            let _0x1bb1c2 = _0xc6af2c();
            if (_0x1bb1c2)
                return _0x1bb1c2;
            const _0x463bb1 = 获取连接任务?.();
            if (_0x463bb1)
                await _0x463bb1;
            return _0xc6af2c();
        }, _0x31d709 = async () => {
            const _0x320937 = a0_0x5eca;
            if (_0x735225 || _0x42ab31)
                return;
            _0x735225 = !![];
            try {
                for (;;) {
                    if (_0x42ab31)
                        break;
                    const _0x362916 = _0x2fe027();
                    if (!_0x362916)
                        break;
                    const _0x29fb4e = _0x362916[_0x320937(0x3ac)] || null;
                    _0x44ed7d = _0x29fb4e;
                    try {
                        let _0xcbbe22 = await _0x577789();
                        if (_0x42ab31)
                            break;
                        if (!_0xcbbe22)
                            throw new Error(名称 + ':\x20remote\x20writer\x20unavailable');
                        try {
                            await _0xcbbe22[_0x320937(0x668)](_0x362916[_0x320937(0x3f7)]);
                        } catch (_0x14a349) {
                            _0xebf795?.();
                            if (_0x42ab31)
                                break;
                            if (!_0x362916[_0x320937(0x324)] || typeof _0x43b75 !== _0x320937(0x4a5))
                                throw _0x14a349;
                            await _0x43b75();
                            if (_0x42ab31)
                                break;
                            _0xcbbe22 = _0xc6af2c();
                            if (!_0xcbbe22)
                                throw _0x14a349;
                            await _0xcbbe22['write'](_0x362916[_0x320937(0x3f7)]);
                        }
                        _0x4aacb6(_0x29fb4e);
                    } catch (_0x43cbf6) {
                        _0x4aacb6(_0x29fb4e, _0x43cbf6);
                        throw _0x43cbf6;
                    } finally {
                        if (_0x44ed7d === _0x29fb4e)
                            _0x44ed7d = null;
                    }
                }
            } catch (_0x48c2d9) {
                _0x42ab31 = !![], _0x357c27(_0x48c2d9), log('[' + 名称 + ']\x20写入失败:\x20' + (_0x48c2d9?.[_0x320937(0x385)] || _0x48c2d9));
                try {
                    _0x414733?.(_0x48c2d9);
                } catch (_0x37fd79) {
                }
            } finally {
                _0x735225 = ![];
                if (!_0x42ab31 && !_0x27f502['为空'])
                    _0x31d709();
                else
                    _0x15b271();
            }
        }, _0xa37ad4 = (_0x92cc69, _0x5818f6 = !![], _0x4d2cc6 = ![]) => {
            const _0x4e6d18 = a0_0x5eca;
            if (_0x42ab31)
                return ![];
            if (!_0xc6af2c() && !获取连接任务?.())
                return ![];
            const _0x41e3c6 = 数据转Uint8Array(_0x92cc69);
            if (!_0x41e3c6[_0x4e6d18(0x574)])
                return !![];
            const _0x2254a6 = _0x27f502['字节数'] + _0x41e3c6[_0x4e6d18(0x574)], _0x205a11 = _0x27f502[_0x4e6d18(0x244)] + 0x1;
            if (_0x2254a6 > 上行队列最大字节 || _0x205a11 > 上行队列最大条目) {
                _0x42ab31 = !![];
                const _0x3b6605 = Object[_0x4e6d18(0x38a)](new Error(名称 + _0x4e6d18(0x52b) + _0x2254a6 + 'B/' + _0x205a11 + ')'), { 'isQueueOverflow': !![] });
                _0x357c27(_0x3b6605), log('[' + 名称 + ']\x20队列超限，关闭连接');
                try {
                    _0x414733?.(_0x3b6605);
                } catch (_0x2e198e) {
                }
                throw _0x3b6605;
            }
            let _0x15c9e7 = null, _0x163ad0 = null;
            _0x4d2cc6 && (_0x163ad0 = [], _0x15c9e7 = new Promise((_0x390107, _0x1ddac2) => _0x163ad0['push']({
                'resolve': _0x390107,
                'reject': _0x1ddac2
            })));
            _0x27f502['收纳']({
                'chunk': _0x41e3c6,
                'allowRetry': _0x5818f6,
                'completions': _0x163ad0
            });
            if (!_0x735225)
                _0x31d709();
            return _0x4d2cc6 ? _0x15c9e7[_0x4e6d18(0x56e)](() => !![]) : !![];
        };
    return {
        '写入'(_0xf016ef, _0x1374e3 = !![]) {
            return _0xa37ad4(_0xf016ef, _0x1374e3, ![]);
        },
        '写入并等待'(_0x16cd0d, _0x1a9326 = !![]) {
            return _0xa37ad4(_0x16cd0d, _0x1a9326, !![]);
        },
        async '等待空'() {
            const _0x2513de = a0_0x5eca;
            if (!_0x27f502[_0x2513de(0x2f1)] && !_0x735225)
                return;
            await new Promise(_0x5026b9 => _0x32874b[_0x2513de(0x4a8)](_0x5026b9));
        },
        '清空'() {
            _0x42ab31 = !![], _0x357c27();
        }
    };
}
function 创建下行Grain发送器(_0x3f83ab, _0x2a3cb4 = null, _0x2fa36e = null) {
    const _0x90e37e = a0_0x43d2af, _0x4a7845 = 下行Grain包字节, _0x4cefeb = 下行Grain尾部阈值, _0x5b4b71 = 创建Grain收纳器(_0x4a7845, !![]);
    let _0xbba8ff = typeof _0x2a3cb4 === _0x90e37e(0x4a5) ? null : _0x2a3cb4;
    const _0x52e1fb = typeof _0x2a3cb4 === _0x90e37e(0x4a5) ? _0x2a3cb4 : () => {
        const _0x1acf49 = _0xbba8ff;
        return _0xbba8ff = null, _0x1acf49;
    };
    let _0x696a98 = null, _0x24b086 = 0x0, _0x301813 = 0x0, _0x5092d5 = 0x0, _0x5c7402 = null, _0x525e43 = null, _0x18024d = ![], _0x1b331a = ![], _0x5037cc = 0x0, _0x5b7148 = 0x0, _0x1f6ed9 = null, _0x46db95 = [];
    const _0x180811 = () => {
            const _0x50a2bd = _0x90e37e;
            if (!_0x5037cc && !_0x5b7148)
                return Promise[_0x50a2bd(0x58b)]();
            return new Promise(_0x432881 => _0x46db95[_0x50a2bd(0x4a8)](_0x432881));
        }, _0x4e3737 = () => {
            if (_0x5037cc || _0x5b7148 || !_0x46db95['length'])
                return;
            const _0x4d5e11 = _0x46db95;
            _0x46db95 = [];
            for (const _0x2e4dce of _0x4d5e11)
                _0x2e4dce();
        }, _0x3a467d = () => {
            if (!_0x1f6ed9)
                return;
            const _0x5571ad = _0x1f6ed9;
            _0x5b4b71['清空']();
            throw _0x5571ad;
        }, _0x5445a2 = () => _0x18024d || !_0x2fa36e || _0x2fa36e(), _0x4071e4 = () => {
            if (_0x5445a2())
                closeSocketQuietly(_0x3f83ab);
        }, _0x372ec9 = async _0x326328 => {
            const _0x58ea89 = _0x90e37e;
            if (!_0x5445a2())
                return;
            if (_0x3f83ab[_0x58ea89(0x1f7)] !== WebSocket[_0x58ea89(0x63f)])
                throw new Error(_0x58ea89(0x4d7));
            _0x326328 = _0x4085ae(_0x326328), await WebSocket发送并等待(_0x3f83ab, _0x326328);
        }, _0x5b95af = async _0x4cb55a => {
            while (_0x525e43)
                await _0x525e43;
            const _0x2622f9 = _0x372ec9(_0x4cb55a);
            _0x525e43 = _0x2622f9;
            try {
                await _0x2622f9;
            } finally {
                if (_0x525e43 === _0x2622f9)
                    _0x525e43 = null;
            }
        }, _0x4085ae = _0x285501 => {
            const _0x26f8b6 = _0x90e37e, _0x23106b = _0x52e1fb();
            if (!_0x23106b)
                return _0x285501;
            const _0x1af0ed = new Uint8Array(_0x23106b[_0x26f8b6(0x292)] + _0x285501[_0x26f8b6(0x574)]);
            return _0x1af0ed[_0x26f8b6(0x1f2)](_0x23106b, 0x0), _0x1af0ed[_0x26f8b6(0x1f2)](_0x285501, _0x23106b['length']), _0x1af0ed;
        }, _0x4ef63a = async () => {
            const _0x2038ea = _0x90e37e;
            while (_0x5c7402)
                await _0x5c7402;
            if (_0x696a98)
                clearTimeout(_0x696a98);
            _0x696a98 = null, _0x5092d5 = 0x0;
            if (!_0x5445a2()) {
                _0x5b4b71['清空']();
                return;
            }
            const _0x192c49 = ((async () => {
                const _0x41f2c0 = a0_0x5eca;
                for (;;) {
                    if (!_0x5445a2()) {
                        _0x5b4b71['清空']();
                        break;
                    }
                    const _0x432f01 = _0x5b4b71['合包']();
                    if (!_0x432f01)
                        break;
                    await _0x5b95af(_0x432f01[_0x41f2c0(0x3f7)]);
                }
            })());
            return _0x5c7402 = _0x192c49[_0x2038ea(0x5ec)](_0x350d18 => {
                _0x1f6ed9 ||= _0x350d18;
                throw _0x350d18;
            })[_0x2038ea(0x3e9)](() => {
                _0x5c7402 = null;
            }), _0x5c7402;
        }, _0x22e7c3 = () => {
            const _0x450fec = _0x90e37e;
            if (!_0x5445a2()) {
                _0x5b4b71['清空']();
                return;
            }
            if (_0x5b4b71['为空'] || _0x696a98)
                return;
            if (_0x5b4b71['字节数'] >= _0x4a7845 || _0x4a7845 - _0x5b4b71[_0x450fec(0x2f1)] < _0x4cefeb) {
                _0x4ef63a()[_0x450fec(0x5ec)](_0x4071e4);
                return;
            }
            _0x696a98 = setTimeout(() => {
                const _0x16b1d4 = _0x450fec;
                _0x696a98 = null;
                if (!_0x5445a2()) {
                    _0x5b4b71['清空']();
                    return;
                }
                if (_0x5b4b71['为空'])
                    return;
                if (_0x5b4b71[_0x16b1d4(0x2f1)] >= _0x4a7845 || _0x4a7845 - _0x5b4b71[_0x16b1d4(0x2f1)] < _0x4cefeb) {
                    _0x4ef63a()[_0x16b1d4(0x5ec)](_0x4071e4);
                    return;
                }
                if (_0x5092d5 < 下行Grain最大等待轮次 && (_0x24b086 !== _0x301813 || _0x5b4b71[_0x16b1d4(0x2f1)] < 下行Grain低水位字节)) {
                    _0x5092d5++, _0x301813 = _0x24b086, _0x22e7c3();
                    return;
                }
                _0x4ef63a()['catch'](_0x4071e4);
            }, 0x1);
        };
    return {
        async '直接发送'(_0xe61ffc) {
            const _0x209d7b = _0x90e37e;
            if (_0x1b331a || !_0x5445a2())
                return;
            _0x5b7148++;
            try {
                const _0x47577f = 数据转Uint8Array(_0xe61ffc);
                if (!_0x47577f[_0x209d7b(0x574)])
                    return;
                await _0x5b95af(_0x47577f);
            } catch (_0x325eb1) {
                _0x1f6ed9 ||= _0x325eb1;
                throw _0x325eb1;
            } finally {
                _0x5b7148--, _0x4e3737();
            }
        },
        async '发送'(_0x587d8c) {
            const _0x3a4e64 = _0x90e37e;
            if (_0x1b331a || !_0x5445a2())
                return;
            _0x5037cc++;
            try {
                const _0x2e2d0b = 数据转Uint8Array(_0x587d8c);
                if (!_0x2e2d0b[_0x3a4e64(0x574)])
                    return;
                let _0x28b723 = 0x0;
                const _0x575ef2 = _0x2e2d0b[_0x3a4e64(0x574)];
                while (_0x28b723 < _0x575ef2) {
                    const _0x5a90ca = _0x575ef2 - _0x28b723;
                    if (_0x5b4b71['为空'] && _0x5a90ca >= _0x4a7845) {
                        const _0x5c86d5 = Math[_0x3a4e64(0x572)](_0x4a7845, _0x5a90ca), _0x373e38 = _0x28b723 || _0x5c86d5 !== _0x575ef2 ? _0x2e2d0b[_0x3a4e64(0x68d)](_0x28b723, _0x28b723 + _0x5c86d5) : _0x2e2d0b;
                        await _0x5b95af(_0x373e38), _0x28b723 += _0x5c86d5;
                        continue;
                    }
                    const _0x297a2d = Math[_0x3a4e64(0x572)](_0x4a7845 - _0x5b4b71[_0x3a4e64(0x2f1)], _0x575ef2 - _0x28b723);
                    if (!_0x297a2d) {
                        await _0x4ef63a();
                        continue;
                    }
                    _0x5b4b71['收纳']({ 'chunk': _0x28b723 || _0x297a2d !== _0x575ef2 ? _0x2e2d0b['subarray'](_0x28b723, _0x28b723 + _0x297a2d) : _0x2e2d0b }), _0x28b723 += _0x297a2d, _0x24b086++;
                    if (_0x5b4b71[_0x3a4e64(0x2f1)] >= _0x4a7845 || _0x4a7845 - _0x5b4b71[_0x3a4e64(0x2f1)] < _0x4cefeb)
                        await _0x4ef63a();
                    else
                        _0x22e7c3();
                }
            } catch (_0x22036c) {
                _0x1f6ed9 ||= _0x22036c;
                throw _0x22036c;
            } finally {
                _0x5037cc--, _0x4e3737();
            }
        },
        'flush': _0x4ef63a,
        async '停止并刷新'() {
            if (_0x1b331a) {
                await _0x180811();
                while (_0x525e43)
                    await _0x525e43;
                _0x3a467d(), await _0x4ef63a();
                return;
            }
            _0x1b331a = !![], _0x18024d = !![];
            if (_0x696a98)
                clearTimeout(_0x696a98);
            _0x696a98 = null, await _0x180811();
            while (_0x525e43)
                await _0x525e43;
            _0x3a467d(), await _0x4ef63a();
        }
    };
}
async function connectStreams(_0x4f44b2, _0x1b3e2a, _0x2249ef, _0x4660d7, _0x3035f8 = null, _0x428537 = null) {
    const _0x3bbe77 = a0_0x43d2af;
    let _0x14492c = _0x2249ef, _0x18259d = ![], _0x41e638, _0x5c5ef6 = ![], _0x17d471 = null;
    const _0x39acf5 = 0x40 * 0x400, _0x533f86 = () => !_0x3035f8 || _0x3035f8(), _0x5bc22f = 创建下行Grain发送器(_0x1b3e2a, _0x14492c, _0x533f86);
    _0x14492c = null;
    const _0x2e60ae = { '停止并刷新': () => _0x5bc22f['停止并刷新']() };
    if (_0x428537)
        _0x428537[_0x3bbe77(0x49b)] = _0x2e60ae;
    try {
        _0x4f44b2[_0x3bbe77(0x3ea)]?.[_0x3bbe77(0x5ec)]?.(() => {
        });
    } catch (_0x1f52b3) {
    }
    try {
        _0x41e638 = _0x4f44b2[_0x3bbe77(0x416)][_0x3bbe77(0x22c)]({ 'mode': _0x3bbe77(0x463) }), _0x5c5ef6 = !![];
    } catch (_0x1ac304) {
        _0x41e638 = _0x4f44b2['readable'][_0x3bbe77(0x22c)]();
    }
    try {
        if (!_0x5c5ef6)
            while (!![]) {
                const {
                    done: _0xab8bb3,
                    value: _0x161560
                } = await _0x41e638[_0x3bbe77(0x1e7)]();
                if (!_0x533f86())
                    break;
                if (_0xab8bb3)
                    break;
                if (!_0x161560 || _0x161560['byteLength'] === 0x0)
                    continue;
                _0x18259d = !![], _0x161560[_0x3bbe77(0x574)] >= 下行Grain包字节 ? (await _0x5bc22f[_0x3bbe77(0x556)](), await _0x5bc22f[_0x3bbe77(0x389)](_0x161560)) : await _0x5bc22f['发送'](_0x161560);
            }
        else {
            let _0x30dd27 = new ArrayBuffer(_0x39acf5);
            while (!![]) {
                const {
                    done: _0x2baca5,
                    value: _0x65762f
                } = await _0x41e638[_0x3bbe77(0x1e7)](new Uint8Array(_0x30dd27, 0x0, _0x39acf5));
                if (!_0x533f86())
                    break;
                if (_0x2baca5)
                    break;
                if (!_0x65762f || _0x65762f[_0x3bbe77(0x574)] === 0x0)
                    continue;
                _0x18259d = !![], _0x65762f[_0x3bbe77(0x574)] >= 下行Grain包字节 ? (await _0x5bc22f[_0x3bbe77(0x556)](), await _0x5bc22f[_0x3bbe77(0x389)](_0x65762f), _0x30dd27 = new ArrayBuffer(_0x39acf5)) : (await _0x5bc22f['发送'](_0x65762f[_0x3bbe77(0x548)]()), _0x30dd27 = _0x65762f[_0x3bbe77(0x565)][_0x3bbe77(0x574)] >= _0x39acf5 ? _0x65762f[_0x3bbe77(0x565)] : new ArrayBuffer(_0x39acf5));
            }
        }
        if (_0x533f86())
            await _0x5bc22f['flush']();
    } catch (_0x5e9743) {
        _0x17d471 = _0x5e9743;
    } finally {
        if (_0x533f86() && _0x1b3e2a[_0x3bbe77(0x1f7)] === WebSocket['OPEN'])
            try {
                await _0x5bc22f[_0x3bbe77(0x45c)]();
            } catch (_0x4204f8) {
                _0x17d471 ||= _0x4204f8;
            }
        if (_0x428537?.[_0x3bbe77(0x49b)] === _0x2e60ae)
            _0x428537[_0x3bbe77(0x49b)] = null;
        try {
            await _0x41e638['cancel']();
        } catch (_0x3f372d) {
        }
        try {
            _0x41e638[_0x3bbe77(0x1d5)]();
        } catch (_0x42cd88) {
        }
        try {
            _0x4f44b2[_0x3bbe77(0x418)]();
        } catch (_0x30e3c7) {
        }
    }
    if (!_0x18259d && _0x4660d7 && _0x1b3e2a['readyState'] === WebSocket[_0x3bbe77(0x63f)] && _0x533f86())
        try {
            await _0x4660d7();
            return;
        } catch (_0x3f6797) {
            _0x17d471 ||= _0x3f6797;
        }
    if (!_0x533f86())
        return;
    if (_0x17d471)
        log('[TCP下行]\x20读取失败:\x20' + (_0x17d471?.[_0x3bbe77(0x385)] || _0x17d471));
    closeSocketQuietly(_0x1b3e2a);
}
function isSpeedTestSite(_0x366793) {
    const _0x866c59 = a0_0x43d2af, _0x4629c0 = [
            'speed.cloudflare.com',
            _0x866c59(0x504)
        ];
    return _0x366793 = _0x366793[_0x866c59(0x486)](), _0x4629c0[_0x866c59(0x507)](_0x37ea89 => _0x366793 === _0x37ea89 || _0x366793['endsWith']('.' + _0x37ea89));
}
function 构造本地204响应(_0x3d9588 = null) {
    const _0x3fa2af = a0_0x43d2af, _0x511d1d = new TextEncoder()[_0x3fa2af(0x564)](_0x3fa2af(0x624) + _0x3fa2af(0x5b2) + 'Connection:\x20close\x0d\x0a' + '\x0d\x0a');
    if (有效数据长度(_0x3d9588) === 0x0)
        return _0x511d1d;
    const _0x5d2e86 = 数据转Uint8Array(_0x3d9588), _0x4d8ef9 = new Uint8Array(_0x5d2e86[_0x3fa2af(0x574)] + _0x511d1d['byteLength']);
    return _0x4d8ef9[_0x3fa2af(0x1f2)](_0x5d2e86, 0x0), _0x4d8ef9[_0x3fa2af(0x1f2)](_0x511d1d, _0x5d2e86['byteLength']), log(_0x3fa2af(0x5af) + _0x4d8ef9['byteLength'] + 'B'), _0x4d8ef9;
}
function 构造WS本地204响应(_0x21020d = null) {
    const _0x236b6 = a0_0x43d2af, _0x59872a = new TextEncoder()[_0x236b6(0x564)](_0x236b6(0x624) + _0x236b6(0x5b2) + 'Connection:\x20keep-alive\x0d\x0a' + '\x0d\x0a');
    if (有效数据长度(_0x21020d) === 0x0)
        return _0x59872a;
    const _0x5d532f = 数据转Uint8Array(_0x21020d), _0x18e366 = new Uint8Array(_0x5d532f[_0x236b6(0x574)] + _0x59872a[_0x236b6(0x574)]);
    return _0x18e366[_0x236b6(0x1f2)](_0x5d532f, 0x0), _0x18e366[_0x236b6(0x1f2)](_0x59872a, _0x5d532f[_0x236b6(0x574)]), _0x18e366;
}
async function socks5Connect(_0x26d5d6, _0x21de23, _0x1dfabb, _0x2e4b82, _0x5cfdfc) {
    const _0x1ba635 = a0_0x43d2af, {
            username: _0x421b72,
            password: _0x2759e4,
            hostname: _0x300083,
            port: _0x284bf0
        } = _0x5cfdfc || {}, _0x819ca = _0x2e4b82({
            'hostname': _0x300083,
            'port': _0x284bf0
        }), _0x295515 = _0x819ca[_0x1ba635(0x5ab)]['getWriter'](), _0xfd4649 = _0x819ca[_0x1ba635(0x416)][_0x1ba635(0x22c)]();
    try {
        const _0xefef40 = _0x421b72 && _0x2759e4 ? new Uint8Array([
            0x5,
            0x2,
            0x0,
            0x2
        ]) : new Uint8Array([
            0x5,
            0x1,
            0x0
        ]);
        await _0x295515[_0x1ba635(0x668)](_0xefef40);
        let _0x4ddf7e = await _0xfd4649[_0x1ba635(0x1e7)]();
        if (_0x4ddf7e[_0x1ba635(0x42f)] || _0x4ddf7e[_0x1ba635(0x662)][_0x1ba635(0x574)] < 0x2)
            throw new Error('S5\x20method\x20selection\x20failed');
        const _0x24bec5 = new Uint8Array(_0x4ddf7e[_0x1ba635(0x662)])[0x1];
        if (_0x24bec5 === 0x2) {
            if (!_0x421b72 || !_0x2759e4)
                throw new Error(_0x1ba635(0x658));
            const _0xa7593 = new TextEncoder()['encode'](_0x421b72), _0x45f130 = new TextEncoder()[_0x1ba635(0x564)](_0x2759e4), _0x1ac1b3 = new Uint8Array([
                    0x1,
                    _0xa7593[_0x1ba635(0x292)],
                    ..._0xa7593,
                    _0x45f130[_0x1ba635(0x292)],
                    ..._0x45f130
                ]);
            await _0x295515[_0x1ba635(0x668)](_0x1ac1b3), _0x4ddf7e = await _0xfd4649[_0x1ba635(0x1e7)]();
            if (_0x4ddf7e[_0x1ba635(0x42f)] || new Uint8Array(_0x4ddf7e[_0x1ba635(0x662)])[0x1] !== 0x0)
                throw new Error(_0x1ba635(0x5ca));
        } else {
            if (_0x24bec5 !== 0x0)
                throw new Error(_0x1ba635(0x2f7) + _0x24bec5);
        }
        const _0x42b0a3 = new TextEncoder()['encode'](_0x26d5d6), _0x2a8a69 = new Uint8Array([
                0x5,
                0x1,
                0x0,
                0x3,
                _0x42b0a3[_0x1ba635(0x292)],
                ..._0x42b0a3,
                _0x21de23 >> 0x8,
                _0x21de23 & 0xff
            ]);
        await _0x295515['write'](_0x2a8a69), _0x4ddf7e = await _0xfd4649['read']();
        if (_0x4ddf7e['done'] || new Uint8Array(_0x4ddf7e['value'])[0x1] !== 0x0)
            throw new Error('S5\x20connection\x20failed');
        if (有效数据长度(_0x1dfabb) > 0x0)
            await _0x295515[_0x1ba635(0x668)](_0x1dfabb);
        return _0x295515[_0x1ba635(0x1d5)](), _0xfd4649['releaseLock'](), _0x819ca;
    } catch (_0x1d11f4) {
        try {
            _0x295515['releaseLock']();
        } catch (_0x510626) {
        }
        try {
            _0xfd4649['releaseLock']();
        } catch (_0xbcddd2) {
        }
        try {
            _0x819ca['close']();
        } catch (_0x5f4963) {
        }
        throw _0x1d11f4;
    }
}
async function httpConnect(_0x3b4769, _0x47c44f, _0x235be4, _0x600301 = ![], _0xa47af8, _0x484fb0) {
    const _0x256823 = a0_0x43d2af, {
            username: _0x439411,
            password: _0x5ab1db,
            hostname: _0x3014b4,
            port: _0xf5554e
        } = _0x484fb0 || {}, _0x3ad74f = _0x600301 ? _0xa47af8({
            'hostname': _0x3014b4,
            'port': _0xf5554e
        }, {
            'secureTransport': 'on',
            'allowHalfOpen': ![]
        }) : _0xa47af8({
            'hostname': _0x3014b4,
            'port': _0xf5554e
        }), _0x541174 = _0x3ad74f[_0x256823(0x5ab)][_0x256823(0x50b)](), _0x107f22 = _0x3ad74f[_0x256823(0x416)][_0x256823(0x22c)](), _0x3b6754 = new TextEncoder(), _0x3b598d = new TextDecoder();
    try {
        if (_0x600301)
            await _0x3ad74f['opened'];
        const _0x3e258c = _0x439411 && _0x5ab1db ? _0x256823(0x3c8) + btoa(_0x439411 + ':' + _0x5ab1db) + '\x0d\x0a' : '', request = _0x256823(0x235) + _0x3b4769 + ':' + _0x47c44f + _0x256823(0x4ef) + _0x3b4769 + ':' + _0x47c44f + '\x0d\x0a' + _0x3e258c + 'User-Agent:\x20Mozilla/5.0\x0d\x0aConnection:\x20keep-alive\x0d\x0a\x0d\x0a';
        await _0x541174[_0x256823(0x668)](_0x3b6754[_0x256823(0x564)](request)), _0x541174[_0x256823(0x1d5)]();
        let _0x53a95f = new Uint8Array(0x0), _0x2779d9 = -0x1, _0x396b9f = 0x0;
        while (_0x2779d9 === -0x1 && _0x396b9f < 0x2000) {
            const {
                done: _0x5086f2,
                value: _0x327720
            } = await _0x107f22[_0x256823(0x1e7)]();
            if (_0x5086f2 || !_0x327720)
                throw new Error((_0x600301 ? _0x256823(0x29f) : _0x256823(0x2df)) + _0x256823(0x251));
            _0x53a95f = new Uint8Array([
                ..._0x53a95f,
                ..._0x327720
            ]), _0x396b9f = _0x53a95f['length'];
            const _0x2074eb = _0x53a95f[_0x256823(0x647)]((_0x23b338, _0x431e6e) => _0x431e6e < _0x53a95f[_0x256823(0x292)] - 0x3 && _0x53a95f[_0x431e6e] === 0xd && _0x53a95f[_0x431e6e + 0x1] === 0xa && _0x53a95f[_0x431e6e + 0x2] === 0xd && _0x53a95f[_0x431e6e + 0x3] === 0xa);
            if (_0x2074eb !== -0x1)
                _0x2779d9 = _0x2074eb + 0x4;
        }
        if (_0x2779d9 === -0x1)
            throw new Error(_0x256823(0x581));
        const _0x58c6f5 = _0x3b598d[_0x256823(0x49a)](_0x53a95f[_0x256823(0x548)](0x0, _0x2779d9))[_0x256823(0x492)]('\x0d\x0a')[0x0][_0x256823(0x5f7)](/HTTP\/\d\.\d\s+(\d+)/), _0x4d32d7 = _0x58c6f5 ? parseInt(_0x58c6f5[0x1], 0xa) : NaN;
        if (!Number[_0x256823(0x526)](_0x4d32d7) || _0x4d32d7 < 0xc8 || _0x4d32d7 >= 0x12c)
            throw new Error(_0x256823(0x441) + _0x4d32d7);
        _0x107f22[_0x256823(0x1d5)]();
        if (有效数据长度(_0x235be4) > 0x0) {
            const _0x409d14 = _0x3ad74f[_0x256823(0x5ab)][_0x256823(0x50b)]();
            await _0x409d14[_0x256823(0x668)](_0x235be4), _0x409d14[_0x256823(0x1d5)]();
        }
        if (_0x396b9f > _0x2779d9) {
            const {
                    readable: _0x50efa3,
                    writable: _0x40927a
                } = new TransformStream(), _0x56b60e = _0x40927a[_0x256823(0x50b)]();
            return await _0x56b60e[_0x256823(0x668)](_0x53a95f[_0x256823(0x68d)](_0x2779d9, _0x396b9f)), _0x56b60e[_0x256823(0x1d5)](), _0x3ad74f[_0x256823(0x416)][_0x256823(0x4c1)](_0x40927a)[_0x256823(0x5ec)](() => {
            }), {
                'readable': _0x50efa3,
                'writable': _0x3ad74f[_0x256823(0x5ab)],
                'closed': _0x3ad74f['closed'],
                'close': () => _0x3ad74f['close']()
            };
        }
        return _0x3ad74f;
    } catch (_0x283bdd) {
        try {
            _0x541174[_0x256823(0x1d5)]();
        } catch (_0x34220b) {
        }
        try {
            _0x107f22[_0x256823(0x1d5)]();
        } catch (_0x15425d) {
        }
        try {
            _0x3ad74f[_0x256823(0x418)]();
        } catch (_0x445fd9) {
        }
        throw _0x283bdd;
    }
}
async function httpsConnect(_0x43d671, _0x197c0d, _0x29d89d, _0x497997, _0x5a0ed5) {
    const _0x2a65f8 = a0_0x43d2af, {
            username: _0x32ecd4,
            password: _0x176664,
            hostname: _0x1f4407,
            port: _0x1262a9
        } = _0x5a0ed5 || {}, _0x19d67d = new TextEncoder(), _0xba00ad = new TextDecoder();
    let _0x50b01b = null;
    const _0x151326 = isIPHostname(_0x1f4407) ? '' : stripIPv6Brackets(_0x1f4407), _0x4e6351 = async (_0x56d5ac = ![]) => {
            const _0x9b3c0 = a0_0x5eca, _0x16768b = _0x497997({
                    'hostname': _0x1f4407,
                    'port': _0x1262a9
                });
            try {
                await _0x16768b['opened'];
                const _0x49e914 = new TlsClient(_0x16768b, {
                    'serverName': _0x151326,
                    'insecure': !![],
                    'allowChacha': _0x56d5ac
                });
                return await _0x49e914[_0x9b3c0(0x4f0)](), log(_0x9b3c0(0x41a) + (_0x49e914['isTls13'] ? _0x9b3c0(0x310) : _0x9b3c0(0x4c9)) + '\x20|\x20Cipher:\x200x' + _0x49e914[_0x9b3c0(0x4fe)][_0x9b3c0(0x592)](0x10) + (_0x49e914[_0x9b3c0(0x55e)]?.[_0x9b3c0(0x690)] ? _0x9b3c0(0x583) : _0x9b3c0(0x33e))), _0x49e914;
            } catch (_0x1bfa29) {
                try {
                    _0x16768b[_0x9b3c0(0x418)]();
                } catch (_0x43e1b5) {
                }
                throw _0x1bfa29;
            }
        };
    try {
        try {
            _0x50b01b = await _0x4e6351(![]);
        } catch (_0x498467) {
            if (!/cipher|handshake|TLS Alert|ServerHello|Finished|Unsupported|Missing TLS/i[_0x2a65f8(0x247)](_0x498467?.['message'] || '' + (_0x498467 || '')))
                throw _0x498467;
            log(_0x2a65f8(0x368) + (_0x498467?.['message'] || _0x498467)), _0x50b01b = await _0x4e6351(!![]);
        }
        const _0x28c41e = _0x32ecd4 && _0x176664 ? _0x2a65f8(0x3c8) + btoa(_0x32ecd4 + ':' + _0x176664) + '\x0d\x0a' : '', request = _0x2a65f8(0x235) + _0x43d671 + ':' + _0x197c0d + '\x20HTTP/1.1\x0d\x0aHost:\x20' + _0x43d671 + ':' + _0x197c0d + '\x0d\x0a' + _0x28c41e + _0x2a65f8(0x2c3);
        await _0x50b01b[_0x2a65f8(0x668)](_0x19d67d[_0x2a65f8(0x564)](request));
        let _0xc195db = new Uint8Array(0x0), _0x1aa54a = -0x1, _0x55c2cc = 0x0;
        while (_0x1aa54a === -0x1 && _0x55c2cc < 0x2000) {
            const _0xd4af1d = await _0x50b01b[_0x2a65f8(0x1e7)]();
            if (!_0xd4af1d)
                throw new Error(_0x2a65f8(0x652));
            _0xc195db = 拼接字节数据(_0xc195db, _0xd4af1d), _0x55c2cc = _0xc195db['length'];
            const _0x968c99 = _0xc195db[_0x2a65f8(0x647)]((_0x2792b4, _0x28411e) => _0x28411e < _0xc195db[_0x2a65f8(0x292)] - 0x3 && _0xc195db[_0x28411e] === 0xd && _0xc195db[_0x28411e + 0x1] === 0xa && _0xc195db[_0x28411e + 0x2] === 0xd && _0xc195db[_0x28411e + 0x3] === 0xa);
            if (_0x968c99 !== -0x1)
                _0x1aa54a = _0x968c99 + 0x4;
        }
        if (_0x1aa54a === -0x1)
            throw new Error(_0x2a65f8(0x361));
        const _0x8ad93b = _0xba00ad[_0x2a65f8(0x49a)](_0xc195db['slice'](0x0, _0x1aa54a))[_0x2a65f8(0x492)]('\x0d\x0a')[0x0][_0x2a65f8(0x5f7)](/HTTP\/\d\.\d\s+(\d+)/), _0x33ef0c = _0x8ad93b ? parseInt(_0x8ad93b[0x1], 0xa) : NaN;
        if (!Number[_0x2a65f8(0x526)](_0x33ef0c) || _0x33ef0c < 0xc8 || _0x33ef0c >= 0x12c)
            throw new Error(_0x2a65f8(0x441) + _0x33ef0c);
        if (有效数据长度(_0x29d89d) > 0x0)
            await _0x50b01b[_0x2a65f8(0x668)](数据转Uint8Array(_0x29d89d));
        const _0x24f639 = _0x55c2cc > _0x1aa54a ? _0xc195db[_0x2a65f8(0x68d)](_0x1aa54a, _0x55c2cc) : null;
        let _0x1e41c9 = ![], _0x42328d, _0x3aa551;
        const _0x4d374c = (_0x4cce83, _0x44110f) => {
                !_0x1e41c9 && (_0x1e41c9 = !![], _0x4cce83(_0x44110f));
            }, _0x1a3e44 = new Promise((_0x2e234e, _0x2307dc) => {
                _0x42328d = _0x2e234e, _0x3aa551 = _0x2307dc;
            }), _0x32d93b = () => {
                const _0x544c7b = _0x2a65f8;
                try {
                    _0x50b01b[_0x544c7b(0x418)]();
                } catch (_0x2fe7b5) {
                }
                _0x4d374c(_0x42328d);
            }, _0x1d7d02 = new ReadableStream({
                async 'start'(_0x315a84) {
                    const _0x50b47a = _0x2a65f8;
                    try {
                        if (有效数据长度(_0x24f639) > 0x0)
                            _0x315a84[_0x50b47a(0x55f)](_0x24f639);
                        while (!![]) {
                            const _0x2ce83e = await _0x50b01b[_0x50b47a(0x1e7)]();
                            if (!_0x2ce83e)
                                break;
                            if (_0x2ce83e['byteLength'] > 0x0)
                                _0x315a84[_0x50b47a(0x55f)](_0x2ce83e);
                        }
                        try {
                            _0x315a84[_0x50b47a(0x418)]();
                        } catch (_0x3c250b) {
                        }
                        _0x4d374c(_0x42328d);
                    } catch (_0x581d5d) {
                        try {
                            _0x315a84[_0x50b47a(0x35f)](_0x581d5d);
                        } catch (_0x58d9f6) {
                        }
                        _0x4d374c(_0x3aa551, _0x581d5d);
                    }
                },
                'cancel'() {
                    _0x32d93b();
                }
            }), _0x3728be = new WritableStream({
                async 'write'(_0xec2a79) {
                    const _0x1fd8c3 = _0x2a65f8;
                    await _0x50b01b[_0x1fd8c3(0x668)](数据转Uint8Array(_0xec2a79));
                },
                'close': _0x32d93b,
                'abort'(_0x39694d) {
                    _0x32d93b();
                    if (_0x39694d)
                        _0x4d374c(_0x3aa551, _0x39694d);
                }
            });
        return {
            'readable': _0x1d7d02,
            'writable': _0x3728be,
            'closed': _0x1a3e44,
            'close': _0x32d93b
        };
    } catch (_0x4a2ed1) {
        try {
            _0x50b01b?.[_0x2a65f8(0x418)]();
        } catch (_0x1ac1c7) {
        }
        throw _0x4a2ed1;
    }
}
function 创建请求TCP连接器(request) {
    const _0x5e8ec2 = a0_0x43d2af, _0xc0d7f7 = request, _0x131e2e = _0xc0d7f7?.[_0x5e8ec2(0x5c4)];
    if (!_0x131e2e || typeof _0x131e2e[_0x5e8ec2(0x1cf)] !== _0x5e8ec2(0x4a5))
        throw new Error('request.fetcher.connect\x20unavailable');
    return (_0x16fd96, _0x2e98da) => _0x2e98da === undefined ? _0x131e2e[_0x5e8ec2(0x1cf)](_0x16fd96) : _0x131e2e['connect'](_0x16fd96, _0x2e98da);
}
const TLS_VERSION_10 = 0x301, TLS_VERSION_12 = 0x303, TLS_VERSION_13 = 0x304, CONTENT_TYPE_CHANGE_CIPHER_SPEC = 0x14, CONTENT_TYPE_ALERT = 0x15, CONTENT_TYPE_HANDSHAKE = 0x16, CONTENT_TYPE_APPLICATION_DATA = 0x17, HANDSHAKE_TYPE_CLIENT_HELLO = 0x1, HANDSHAKE_TYPE_SERVER_HELLO = 0x2, HANDSHAKE_TYPE_NEW_SESSION_TICKET = 0x4, HANDSHAKE_TYPE_ENCRYPTED_EXTENSIONS = 0x8, HANDSHAKE_TYPE_CERTIFICATE = 0xb, HANDSHAKE_TYPE_SERVER_KEY_EXCHANGE = 0xc, HANDSHAKE_TYPE_CERTIFICATE_REQUEST = 0xd, HANDSHAKE_TYPE_SERVER_HELLO_DONE = 0xe, HANDSHAKE_TYPE_CERTIFICATE_VERIFY = 0xf, HANDSHAKE_TYPE_CLIENT_KEY_EXCHANGE = 0x10, HANDSHAKE_TYPE_FINISHED = 0x14, HANDSHAKE_TYPE_KEY_UPDATE = 0x18, EXT_SERVER_NAME = 0x0, EXT_SUPPORTED_GROUPS = 0xa, EXT_EC_POINT_FORMATS = 0xb, EXT_SIGNATURE_ALGORITHMS = 0xd, EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION = 0x10, EXT_SUPPORTED_VERSIONS = 0x2b, EXT_PSK_KEY_EXCHANGE_MODES = 0x2d, EXT_KEY_SHARE = 0x33, ALERT_CLOSE_NOTIFY = 0x0, ALERT_LEVEL_WARNING = 0x1, ALERT_UNRECOGNIZED_NAME = 0x70, shouldIgnoreTlsAlert = _0x36cc86 => _0x36cc86?.[0x0] === ALERT_LEVEL_WARNING && _0x36cc86?.[0x1] === ALERT_UNRECOGNIZED_NAME, textEncoder = new TextEncoder(), textDecoder = new TextDecoder(), EMPTY_BYTES = new Uint8Array(0x0), CIPHER_SUITES_BY_ID = new Map([
        [
            0x1301,
            {
                'id': 0x1301,
                'keyLen': 0x10,
                'ivLen': 0xc,
                'hash': a0_0x43d2af(0x46d),
                'tls13': !0x0
            }
        ],
        [
            0x1302,
            {
                'id': 0x1302,
                'keyLen': 0x20,
                'ivLen': 0xc,
                'hash': a0_0x43d2af(0x2a0),
                'tls13': !0x0
            }
        ],
        [
            0x1303,
            {
                'id': 0x1303,
                'keyLen': 0x20,
                'ivLen': 0xc,
                'hash': a0_0x43d2af(0x46d),
                'tls13': !0x0,
                'chacha': !0x0
            }
        ],
        [
            0xc02f,
            {
                'id': 0xc02f,
                'keyLen': 0x10,
                'ivLen': 0x4,
                'hash': 'SHA-256',
                'kex': a0_0x43d2af(0x66b)
            }
        ],
        [
            0xc030,
            {
                'id': 0xc030,
                'keyLen': 0x20,
                'ivLen': 0x4,
                'hash': 'SHA-384',
                'kex': a0_0x43d2af(0x66b)
            }
        ],
        [
            0xcca8,
            {
                'id': 0xcca8,
                'keyLen': 0x20,
                'ivLen': 0xc,
                'hash': a0_0x43d2af(0x46d),
                'kex': a0_0x43d2af(0x66b),
                'chacha': !0x0
            }
        ],
        [
            0xc02b,
            {
                'id': 0xc02b,
                'keyLen': 0x10,
                'ivLen': 0x4,
                'hash': a0_0x43d2af(0x46d),
                'kex': a0_0x43d2af(0x66b)
            }
        ],
        [
            0xc02c,
            {
                'id': 0xc02c,
                'keyLen': 0x20,
                'ivLen': 0x4,
                'hash': a0_0x43d2af(0x2a0),
                'kex': a0_0x43d2af(0x66b)
            }
        ],
        [
            0xcca9,
            {
                'id': 0xcca9,
                'keyLen': 0x20,
                'ivLen': 0xc,
                'hash': 'SHA-256',
                'kex': a0_0x43d2af(0x66b),
                'chacha': !0x0
            }
        ]
    ]), GROUPS_BY_ID = new Map([
        [
            0x1d,
            'X25519'
        ],
        [
            0x17,
            a0_0x43d2af(0x65c)
        ]
    ]), SUPPORTED_SIGNATURE_ALGORITHMS = [
        0x804,
        0x805,
        0x806,
        0x401,
        0x501,
        0x601,
        0x403,
        0x503,
        0x603
    ], tlsBytes = (..._0x1c2ea7) => {
        const _0x27db88 = a0_0x43d2af, _0x46ad8d = _0x376c91 => _0x376c91['flatMap'](_0x20f32e => _0x20f32e instanceof Uint8Array ? [..._0x20f32e] : Array[_0x27db88(0x686)](_0x20f32e) ? _0x46ad8d(_0x20f32e) : _0x27db88(0x689) == typeof _0x20f32e ? [_0x20f32e] : []);
        return new Uint8Array(_0x46ad8d(_0x1c2ea7));
    }, uint16be = _0x400289 => [
        _0x400289 >> 0x8 & 0xff,
        0xff & _0x400289
    ], readUint16 = (_0x211c2a, _0x3da737) => _0x211c2a[_0x3da737] << 0x8 | _0x211c2a[_0x3da737 + 0x1], readUint24 = (_0x8dcfd1, _0x4b0e58) => _0x8dcfd1[_0x4b0e58] << 0x10 | _0x8dcfd1[_0x4b0e58 + 0x1] << 0x8 | _0x8dcfd1[_0x4b0e58 + 0x2], concatBytes = (..._0x1653ce) => {
        const _0x3bc6fb = a0_0x43d2af, _0x27a901 = _0x1653ce[_0x3bc6fb(0x216)](_0x2b1f6b => _0x2b1f6b && _0x2b1f6b[_0x3bc6fb(0x292)] > 0x0), _0x140b08 = _0x27a901[_0x3bc6fb(0x394)]((_0x135167, _0x4bcb74) => _0x135167 + _0x4bcb74[_0x3bc6fb(0x292)], 0x0), _0x25c4ab = new Uint8Array(_0x140b08);
        let _0x372e66 = 0x0;
        for (const _0x1037a7 of _0x27a901)
            _0x25c4ab['set'](_0x1037a7, _0x372e66), _0x372e66 += _0x1037a7[_0x3bc6fb(0x292)];
        return _0x25c4ab;
    }, randomBytes = _0x38dc4b => crypto[a0_0x43d2af(0x60a)](new Uint8Array(_0x38dc4b)), constantTimeEqual = (_0x54e985, _0x2aaa98) => {
        const _0x32d0ed = a0_0x43d2af;
        if (!_0x54e985 || !_0x2aaa98 || _0x54e985[_0x32d0ed(0x292)] !== _0x2aaa98[_0x32d0ed(0x292)])
            return !0x1;
        let _0x2c4c82 = 0x0;
        for (let _0x3beec1 = 0x0; _0x3beec1 < _0x54e985[_0x32d0ed(0x292)]; _0x3beec1++)
            _0x2c4c82 |= _0x54e985[_0x3beec1] ^ _0x2aaa98[_0x3beec1];
        return 0x0 === _0x2c4c82;
    }, hashByteLength = _0x3cca20 => a0_0x43d2af(0x69f) === _0x3cca20 ? 0x40 : 'SHA-384' === _0x3cca20 ? 0x30 : 0x20;
async function hmac(_0x38a349, _0x10640d, _0x3359c1) {
    const _0x3c52b8 = a0_0x43d2af, _0x47516f = await crypto['subtle'][_0x3c52b8(0x50e)]('raw', _0x10640d, {
            'name': _0x3c52b8(0x1b2),
            'hash': _0x38a349
        }, !0x1, [_0x3c52b8(0x48c)]);
    return new Uint8Array(await crypto[_0x3c52b8(0x5be)][_0x3c52b8(0x48c)](_0x3c52b8(0x1b2), _0x47516f, _0x3359c1));
}
async function digestBytes(_0x43d26c, _0x4009b1) {
    const _0x73100d = a0_0x43d2af;
    return new Uint8Array(await crypto[_0x73100d(0x5be)]['digest'](_0x43d26c, _0x4009b1));
}
async function tls12Prf(_0x2b4591, _0xc9a9a3, _0x1ce2f7, _0x2193c2, _0x29f889 = a0_0x43d2af(0x46d)) {
    const _0x15d8bc = a0_0x43d2af, _0x43b0c5 = concatBytes(textEncoder[_0x15d8bc(0x564)](_0xc9a9a3), _0x1ce2f7);
    let _0x1d32fc = new Uint8Array(0x0), _0x4ed891 = _0x43b0c5;
    for (; _0x1d32fc[_0x15d8bc(0x292)] < _0x2193c2;) {
        _0x4ed891 = await hmac(_0x29f889, _0x2b4591, _0x4ed891);
        const _0x347d25 = await hmac(_0x29f889, _0x2b4591, concatBytes(_0x4ed891, _0x43b0c5));
        _0x1d32fc = concatBytes(_0x1d32fc, _0x347d25);
    }
    return _0x1d32fc[_0x15d8bc(0x548)](0x0, _0x2193c2);
}
async function hkdfExtract(_0x4e8d17, _0x2b5123, _0x1d8375) {
    const _0x4b3a24 = a0_0x43d2af;
    return _0x2b5123 && _0x2b5123[_0x4b3a24(0x292)] || (_0x2b5123 = new Uint8Array(hashByteLength(_0x4e8d17))), hmac(_0x4e8d17, _0x2b5123, _0x1d8375);
}
async function hkdfExpandLabel(_0x3fb6c5, _0x56dd9f, _0x5c2aaf, _0x23fe40, _0x154d24) {
    const _0x54606c = a0_0x43d2af, _0x2a30da = textEncoder[_0x54606c(0x564)](_0x54606c(0x1c0) + _0x5c2aaf);
    return async function (_0x4ff14f, _0xe9de6c, _0x57ab43, _0x459657) {
        const _0x7fc99c = _0x54606c, _0x5b666a = hashByteLength(_0x4ff14f), _0x3aef2e = Math[_0x7fc99c(0x554)](_0x459657 / _0x5b666a);
        let _0x599dbd = new Uint8Array(0x0), _0xb2a1eb = new Uint8Array(0x0);
        for (let _0xa60bb5 = 0x1; _0xa60bb5 <= _0x3aef2e; _0xa60bb5++)
            _0xb2a1eb = await hmac(_0x4ff14f, _0xe9de6c, concatBytes(_0xb2a1eb, _0x57ab43, [_0xa60bb5])), _0x599dbd = concatBytes(_0x599dbd, _0xb2a1eb);
        return _0x599dbd[_0x7fc99c(0x548)](0x0, _0x459657);
    }(_0x3fb6c5, _0x56dd9f, tlsBytes(uint16be(_0x154d24), _0x2a30da[_0x54606c(0x292)], _0x2a30da, _0x23fe40['length'], _0x23fe40), _0x154d24);
}
async function generateKeyShare(_0x1eec21 = a0_0x43d2af(0x65c)) {
    const _0x3f628f = a0_0x43d2af, _0x5ccd98 = 'X25519' === _0x1eec21 ? { 'name': _0x3f628f(0x5f5) } : {
            'name': _0x3f628f(0x31d),
            'namedCurve': _0x1eec21
        }, _0x242e95 = await crypto[_0x3f628f(0x5be)][_0x3f628f(0x484)](_0x5ccd98, !0x0, [_0x3f628f(0x53e)]), _0x27fa75 = await crypto[_0x3f628f(0x5be)][_0x3f628f(0x636)](_0x3f628f(0x1b9), _0x242e95[_0x3f628f(0x315)]);
    return {
        'keyPair': _0x242e95,
        'publicKeyRaw': new Uint8Array(_0x27fa75)
    };
}
async function deriveSharedSecret(_0x386231, _0x3ad3d1, _0x513fab = a0_0x43d2af(0x65c)) {
    const _0x68c63c = a0_0x43d2af, _0x5ce603 = _0x68c63c(0x5f5) === _0x513fab ? { 'name': _0x68c63c(0x5f5) } : {
            'name': 'ECDH',
            'namedCurve': _0x513fab
        }, _0x65e4d7 = await crypto[_0x68c63c(0x5be)][_0x68c63c(0x50e)]('raw', _0x3ad3d1, _0x5ce603, !0x1, []), _0xe2b098 = 'P-384' === _0x513fab ? 0x180 : 'P-521' === _0x513fab ? 0x210 : 0x100;
    return new Uint8Array(await crypto['subtle']['deriveBits']({
        'name': _0x5ce603['name'],
        'public': _0x65e4d7
    }, _0x386231, _0xe2b098));
}
async function importAesGcmKey(_0x4dba8d, _0x28993c) {
    const _0x52d414 = a0_0x43d2af;
    return crypto[_0x52d414(0x5be)][_0x52d414(0x50e)](_0x52d414(0x1b9), _0x4dba8d, { 'name': 'AES-GCM' }, !0x1, _0x28993c);
}
async function aesGcmEncryptWithKey(_0x553cae, _0x3e5042, _0x2bdfc7, _0x5009e9) {
    const _0x3be130 = a0_0x43d2af;
    return new Uint8Array(await crypto['subtle'][_0x3be130(0x5df)]({
        'name': _0x3be130(0x625),
        'iv': _0x3e5042,
        'additionalData': _0x5009e9,
        'tagLength': 0x80
    }, _0x553cae, _0x2bdfc7));
}
async function aesGcmDecryptWithKey(_0x190e6d, _0x33452d, _0x3d044f, _0x18e230) {
    const _0x574cfd = a0_0x43d2af;
    return new Uint8Array(await crypto[_0x574cfd(0x5be)][_0x574cfd(0x267)]({
        'name': _0x574cfd(0x625),
        'iv': _0x33452d,
        'additionalData': _0x18e230,
        'tagLength': 0x80
    }, _0x190e6d, _0x3d044f));
}
function rotateLeft32(_0x59f414, _0x4dc8d4) {
    return (_0x59f414 << _0x4dc8d4 | _0x59f414 >>> 0x20 - _0x4dc8d4) >>> 0x0;
}
function chachaQuarterRound(_0x237c35, _0x4fd5f0, _0xbc1855, _0x5e41b4, _0x4d1c06) {
    _0x237c35[_0x4fd5f0] = _0x237c35[_0x4fd5f0] + _0x237c35[_0xbc1855] >>> 0x0, _0x237c35[_0x4d1c06] = rotateLeft32(_0x237c35[_0x4d1c06] ^ _0x237c35[_0x4fd5f0], 0x10), _0x237c35[_0x5e41b4] = _0x237c35[_0x5e41b4] + _0x237c35[_0x4d1c06] >>> 0x0, _0x237c35[_0xbc1855] = rotateLeft32(_0x237c35[_0xbc1855] ^ _0x237c35[_0x5e41b4], 0xc), _0x237c35[_0x4fd5f0] = _0x237c35[_0x4fd5f0] + _0x237c35[_0xbc1855] >>> 0x0, _0x237c35[_0x4d1c06] = rotateLeft32(_0x237c35[_0x4d1c06] ^ _0x237c35[_0x4fd5f0], 0x8), _0x237c35[_0x5e41b4] = _0x237c35[_0x5e41b4] + _0x237c35[_0x4d1c06] >>> 0x0, _0x237c35[_0xbc1855] = rotateLeft32(_0x237c35[_0xbc1855] ^ _0x237c35[_0x5e41b4], 0x7);
}
function chacha20Block(_0x1bb4ca, _0x17f3dc, _0x49f58c) {
    const _0x410ecb = a0_0x43d2af, _0x76d172 = new Uint32Array(0x10);
    _0x76d172[0x0] = 0x61707865, _0x76d172[0x1] = 0x3320646e, _0x76d172[0x2] = 0x79622d32, _0x76d172[0x3] = 0x6b206574;
    const _0x509046 = new DataView(_0x1bb4ca['buffer'], _0x1bb4ca[_0x410ecb(0x5ad)], _0x1bb4ca[_0x410ecb(0x574)]);
    for (let _0x509c0c = 0x0; _0x509c0c < 0x8; _0x509c0c++)
        _0x76d172[0x4 + _0x509c0c] = _0x509046[_0x410ecb(0x4e4)](0x4 * _0x509c0c, !0x0);
    _0x76d172[0xc] = _0x17f3dc;
    const _0x3ad92c = new DataView(_0x49f58c[_0x410ecb(0x565)], _0x49f58c[_0x410ecb(0x5ad)], _0x49f58c[_0x410ecb(0x574)]);
    _0x76d172[0xd] = _0x3ad92c[_0x410ecb(0x4e4)](0x0, !0x0), _0x76d172[0xe] = _0x3ad92c[_0x410ecb(0x4e4)](0x4, !0x0), _0x76d172[0xf] = _0x3ad92c['getUint32'](0x8, !0x0);
    const _0x4e91c2 = new Uint32Array(_0x76d172);
    for (let _0x5b63aa = 0x0; _0x5b63aa < 0xa; _0x5b63aa++)
        chachaQuarterRound(_0x4e91c2, 0x0, 0x4, 0x8, 0xc), chachaQuarterRound(_0x4e91c2, 0x1, 0x5, 0x9, 0xd), chachaQuarterRound(_0x4e91c2, 0x2, 0x6, 0xa, 0xe), chachaQuarterRound(_0x4e91c2, 0x3, 0x7, 0xb, 0xf), chachaQuarterRound(_0x4e91c2, 0x0, 0x5, 0xa, 0xf), chachaQuarterRound(_0x4e91c2, 0x1, 0x6, 0xb, 0xc), chachaQuarterRound(_0x4e91c2, 0x2, 0x7, 0x8, 0xd), chachaQuarterRound(_0x4e91c2, 0x3, 0x4, 0x9, 0xe);
    for (let _0x2edf75 = 0x0; _0x2edf75 < 0x10; _0x2edf75++)
        _0x4e91c2[_0x2edf75] = _0x4e91c2[_0x2edf75] + _0x76d172[_0x2edf75] >>> 0x0;
    return new Uint8Array(_0x4e91c2[_0x410ecb(0x565)][_0x410ecb(0x548)](0x0));
}
function chacha20Xor(_0x5cc826, _0x57096b, _0x5bdb88) {
    const _0x24df66 = a0_0x43d2af, _0x26995d = new Uint8Array(_0x5bdb88['length']);
    let _0xf0caf0 = 0x1;
    for (let _0x2c0a50 = 0x0; _0x2c0a50 < _0x5bdb88[_0x24df66(0x292)]; _0x2c0a50 += 0x40) {
        const _0x2ea4e7 = chacha20Block(_0x5cc826, _0xf0caf0++, _0x57096b), _0x2b7fbf = Math[_0x24df66(0x572)](0x40, _0x5bdb88[_0x24df66(0x292)] - _0x2c0a50);
        for (let _0x1bc7ec = 0x0; _0x1bc7ec < _0x2b7fbf; _0x1bc7ec++)
            _0x26995d[_0x2c0a50 + _0x1bc7ec] = _0x5bdb88[_0x2c0a50 + _0x1bc7ec] ^ _0x2ea4e7[_0x1bc7ec];
    }
    return _0x26995d;
}
function poly1305Mac(_0x22182d, _0x4ec4a2) {
    const _0x559a7c = a0_0x43d2af, _0x2e47cf = function (_0x1e5e6b) {
            const _0x4a7856 = new Uint8Array(_0x1e5e6b);
            return _0x4a7856[0x3] &= 0xf, _0x4a7856[0x7] &= 0xf, _0x4a7856[0xb] &= 0xf, _0x4a7856[0xf] &= 0xf, _0x4a7856[0x4] &= 0xfc, _0x4a7856[0x8] &= 0xfc, _0x4a7856[0xc] &= 0xfc, _0x4a7856;
        }(_0x22182d[_0x559a7c(0x548)](0x0, 0x10)), _0x77486c = _0x22182d[_0x559a7c(0x548)](0x10, 0x20);
    let _0x428d8b = [
        0x0n,
        0x0n,
        0x0n,
        0x0n,
        0x0n
    ];
    const _0x40c1b8 = [
        0x3ffffffn & BigInt(_0x2e47cf[0x0] | _0x2e47cf[0x1] << 0x8 | _0x2e47cf[0x2] << 0x10 | _0x2e47cf[0x3] << 0x18),
        0x3ffffffn & BigInt(_0x2e47cf[0x3] >> 0x2 | _0x2e47cf[0x4] << 0x6 | _0x2e47cf[0x5] << 0xe | _0x2e47cf[0x6] << 0x16),
        0x3ffffffn & BigInt(_0x2e47cf[0x6] >> 0x4 | _0x2e47cf[0x7] << 0x4 | _0x2e47cf[0x8] << 0xc | _0x2e47cf[0x9] << 0x14),
        0x3ffffffn & BigInt(_0x2e47cf[0x9] >> 0x6 | _0x2e47cf[0xa] << 0x2 | _0x2e47cf[0xb] << 0xa | _0x2e47cf[0xc] << 0x12),
        0x3ffffffn & BigInt(_0x2e47cf[0xd] | _0x2e47cf[0xe] << 0x8 | _0x2e47cf[0xf] << 0x10)
    ];
    for (let _0x4010a4 = 0x0; _0x4010a4 < _0x4ec4a2[_0x559a7c(0x292)]; _0x4010a4 += 0x10) {
        const _0x2116db = _0x4ec4a2[_0x559a7c(0x548)](_0x4010a4, _0x4010a4 + 0x10), _0x523da6 = new Uint8Array(0x11);
        _0x523da6[_0x559a7c(0x1f2)](_0x2116db), _0x523da6[_0x2116db[_0x559a7c(0x292)]] = 0x1, _0x428d8b[0x0] += BigInt(_0x523da6[0x0] | _0x523da6[0x1] << 0x8 | _0x523da6[0x2] << 0x10 | (0x3 & _0x523da6[0x3]) << 0x18), _0x428d8b[0x1] += BigInt(_0x523da6[0x3] >> 0x2 | _0x523da6[0x4] << 0x6 | _0x523da6[0x5] << 0xe | (0xf & _0x523da6[0x6]) << 0x16), _0x428d8b[0x2] += BigInt(_0x523da6[0x6] >> 0x4 | _0x523da6[0x7] << 0x4 | _0x523da6[0x8] << 0xc | (0x3f & _0x523da6[0x9]) << 0x14), _0x428d8b[0x3] += BigInt(_0x523da6[0x9] >> 0x6 | _0x523da6[0xa] << 0x2 | _0x523da6[0xb] << 0xa | _0x523da6[0xc] << 0x12), _0x428d8b[0x4] += BigInt(_0x523da6[0xd] | _0x523da6[0xe] << 0x8 | _0x523da6[0xf] << 0x10 | _0x523da6[0x10] << 0x18);
        const _0x3a5307 = [
            0x0n,
            0x0n,
            0x0n,
            0x0n,
            0x0n
        ];
        for (let _0xca851a = 0x0; _0xca851a < 0x5; _0xca851a++)
            for (let _0x510b27 = 0x0; _0x510b27 < 0x5; _0x510b27++) {
                const _0x18a8e1 = _0xca851a + _0x510b27;
                _0x18a8e1 < 0x5 ? _0x3a5307[_0x18a8e1] += _0x428d8b[_0xca851a] * _0x40c1b8[_0x510b27] : _0x3a5307[_0x18a8e1 - 0x5] += _0x428d8b[_0xca851a] * _0x40c1b8[_0x510b27] * 0x5n;
            }
        let _0x2f40bb = 0x0n;
        for (let _0x5f401e = 0x0; _0x5f401e < 0x5; _0x5f401e++)
            _0x3a5307[_0x5f401e] += _0x2f40bb, _0x428d8b[_0x5f401e] = 0x3ffffffn & _0x3a5307[_0x5f401e], _0x2f40bb = _0x3a5307[_0x5f401e] >> 0x1an;
        _0x428d8b[0x0] += 0x5n * _0x2f40bb, _0x2f40bb = _0x428d8b[0x0] >> 0x1an, _0x428d8b[0x0] &= 0x3ffffffn, _0x428d8b[0x1] += _0x2f40bb;
    }
    let _0x1475c8 = _0x428d8b[0x0] | _0x428d8b[0x1] << 0x1an | _0x428d8b[0x2] << 0x34n | _0x428d8b[0x3] << 0x4en | _0x428d8b[0x4] << 0x68n;
    _0x1475c8 = _0x1475c8 + _0x77486c[_0x559a7c(0x394)]((_0xb72e16, _0x4b66e5, _0x317421) => _0xb72e16 + (BigInt(_0x4b66e5) << BigInt(0x8 * _0x317421)), 0x0n) & (0x1n << 0x80n) - 0x1n;
    const _0x2bd714 = new Uint8Array(0x10);
    for (let _0x209300 = 0x0; _0x209300 < 0x10; _0x209300++)
        _0x2bd714[_0x209300] = Number(_0x1475c8 >> BigInt(0x8 * _0x209300) & 0xffn);
    return _0x2bd714;
}
function chacha20Poly1305Encrypt(_0x97abbd, _0x3a4dca, _0x4c373d, _0x269adc) {
    const _0x24821d = a0_0x43d2af, _0x2abb4b = chacha20Block(_0x97abbd, 0x0, _0x3a4dca)[_0x24821d(0x548)](0x0, 0x20), _0x2d867f = chacha20Xor(_0x97abbd, _0x3a4dca, _0x4c373d), _0x1e20bd = (0x10 - _0x269adc[_0x24821d(0x292)] % 0x10) % 0x10, _0x4e4e35 = (0x10 - _0x2d867f[_0x24821d(0x292)] % 0x10) % 0x10, _0x506dd0 = new Uint8Array(_0x269adc['length'] + _0x1e20bd + _0x2d867f['length'] + _0x4e4e35 + 0x10);
    _0x506dd0[_0x24821d(0x1f2)](_0x269adc, 0x0), _0x506dd0[_0x24821d(0x1f2)](_0x2d867f, _0x269adc[_0x24821d(0x292)] + _0x1e20bd);
    const _0x5a384e = new DataView(_0x506dd0[_0x24821d(0x565)], _0x269adc['length'] + _0x1e20bd + _0x2d867f[_0x24821d(0x292)] + _0x4e4e35);
    _0x5a384e[_0x24821d(0x438)](0x0, BigInt(_0x269adc['length']), !0x0), _0x5a384e[_0x24821d(0x438)](0x8, BigInt(_0x2d867f['length']), !0x0);
    const _0x5d23e2 = poly1305Mac(_0x2abb4b, _0x506dd0);
    return concatBytes(_0x2d867f, _0x5d23e2);
}
function chacha20Poly1305Decrypt(_0x1ec306, _0x1c51c4, _0x12c158, _0x51266f) {
    const _0x1e6282 = a0_0x43d2af;
    if (_0x12c158[_0x1e6282(0x292)] < 0x10)
        throw new Error(_0x1e6282(0x3ce));
    const _0x37cc1f = _0x12c158[_0x1e6282(0x548)](-0x10), _0x4fbd39 = _0x12c158[_0x1e6282(0x548)](0x0, -0x10), _0x57e40c = chacha20Block(_0x1ec306, 0x0, _0x1c51c4)[_0x1e6282(0x548)](0x0, 0x20), _0x2f8f94 = (0x10 - _0x51266f[_0x1e6282(0x292)] % 0x10) % 0x10, _0x2354ca = (0x10 - _0x4fbd39[_0x1e6282(0x292)] % 0x10) % 0x10, _0xaed2af = new Uint8Array(_0x51266f[_0x1e6282(0x292)] + _0x2f8f94 + _0x4fbd39[_0x1e6282(0x292)] + _0x2354ca + 0x10);
    _0xaed2af[_0x1e6282(0x1f2)](_0x51266f, 0x0), _0xaed2af[_0x1e6282(0x1f2)](_0x4fbd39, _0x51266f[_0x1e6282(0x292)] + _0x2f8f94);
    const _0x9efda1 = new DataView(_0xaed2af['buffer'], _0x51266f[_0x1e6282(0x292)] + _0x2f8f94 + _0x4fbd39[_0x1e6282(0x292)] + _0x2354ca);
    _0x9efda1[_0x1e6282(0x438)](0x0, BigInt(_0x51266f[_0x1e6282(0x292)]), !0x0), _0x9efda1[_0x1e6282(0x438)](0x8, BigInt(_0x4fbd39[_0x1e6282(0x292)]), !0x0);
    const _0x119b5f = poly1305Mac(_0x57e40c, _0xaed2af);
    let _0x327f2b = 0x0;
    for (let _0x345066 = 0x0; _0x345066 < 0x10; _0x345066++)
        _0x327f2b |= _0x37cc1f[_0x345066] ^ _0x119b5f[_0x345066];
    if (0x0 !== _0x327f2b)
        throw new Error(_0x1e6282(0x442));
    return chacha20Xor(_0x1ec306, _0x1c51c4, _0x4fbd39);
}
const TLS_MAX_PLAINTEXT_FRAGMENT = 0x10 * 0x400;
function buildTlsRecord(_0x1788f1, _0x3939f7, _0x3f86ec = TLS_VERSION_12) {
    const _0x27931e = a0_0x43d2af, _0x1e2cab = 数据转Uint8Array(_0x3939f7), _0x1a9823 = new Uint8Array(0x5 + _0x1e2cab[_0x27931e(0x574)]);
    return _0x1a9823[0x0] = _0x1788f1, _0x1a9823[0x1] = _0x3f86ec >> 0x8 & 0xff, _0x1a9823[0x2] = _0x3f86ec & 0xff, _0x1a9823[0x3] = _0x1e2cab[_0x27931e(0x574)] >> 0x8 & 0xff, _0x1a9823[0x4] = _0x1e2cab['byteLength'] & 0xff, _0x1a9823[_0x27931e(0x1f2)](_0x1e2cab, 0x5), _0x1a9823;
}
function buildHandshakeMessage(_0x24fe76, _0x311d82) {
    const _0x3ed1b0 = a0_0x43d2af;
    return tlsBytes(_0x24fe76, (_0x3b352a => [
        _0x3b352a >> 0x10 & 0xff,
        _0x3b352a >> 0x8 & 0xff,
        0xff & _0x3b352a
    ])(_0x311d82[_0x3ed1b0(0x292)]), _0x311d82);
}
class TlsRecordParser {
    constructor() {
        const _0x2b33ea = a0_0x43d2af;
        this[_0x2b33ea(0x565)] = new Uint8Array(0x0);
    }
    [a0_0x43d2af(0x3d5)](_0x52c2c5) {
        const _0x19f7f0 = a0_0x43d2af, _0x142575 = 数据转Uint8Array(_0x52c2c5);
        this['buffer'] = this[_0x19f7f0(0x565)][_0x19f7f0(0x292)] ? concatBytes(this[_0x19f7f0(0x565)], _0x142575) : _0x142575;
    }
    [a0_0x43d2af(0x1be)]() {
        const _0x33bc0b = a0_0x43d2af;
        if (this[_0x33bc0b(0x565)][_0x33bc0b(0x292)] < 0x5)
            return null;
        const _0x10612f = this[_0x33bc0b(0x565)][0x0], _0x4273dd = readUint16(this[_0x33bc0b(0x565)], 0x1), _0x10e104 = readUint16(this[_0x33bc0b(0x565)], 0x3);
        if (this[_0x33bc0b(0x565)][_0x33bc0b(0x292)] < 0x5 + _0x10e104)
            return null;
        const _0x361bbd = this[_0x33bc0b(0x565)][_0x33bc0b(0x68d)](0x5, 0x5 + _0x10e104);
        return this['buffer'] = this[_0x33bc0b(0x565)]['subarray'](0x5 + _0x10e104), {
            'type': _0x10612f,
            'version': _0x4273dd,
            'length': _0x10e104,
            'fragment': _0x361bbd
        };
    }
}
class TlsHandshakeParser {
    constructor() {
        const _0xea0a7 = a0_0x43d2af;
        this[_0xea0a7(0x565)] = new Uint8Array(0x0);
    }
    [a0_0x43d2af(0x3d5)](_0xcb6e25) {
        const _0x25b49c = a0_0x43d2af, _0x9d872e = 数据转Uint8Array(_0xcb6e25);
        this[_0x25b49c(0x565)] = this['buffer']['length'] ? concatBytes(this[_0x25b49c(0x565)], _0x9d872e) : _0x9d872e;
    }
    [a0_0x43d2af(0x1be)]() {
        const _0x150ba8 = a0_0x43d2af;
        if (this['buffer'][_0x150ba8(0x292)] < 0x4)
            return null;
        const _0x4e7b34 = this[_0x150ba8(0x565)][0x0], _0x2af70d = readUint24(this[_0x150ba8(0x565)], 0x1);
        if (this[_0x150ba8(0x565)][_0x150ba8(0x292)] < 0x4 + _0x2af70d)
            return null;
        const _0x57e331 = this[_0x150ba8(0x565)][_0x150ba8(0x68d)](0x4, 0x4 + _0x2af70d), _0x1c7b21 = this['buffer'][_0x150ba8(0x68d)](0x0, 0x4 + _0x2af70d);
        return this[_0x150ba8(0x565)] = this[_0x150ba8(0x565)]['subarray'](0x4 + _0x2af70d), {
            'type': _0x4e7b34,
            'length': _0x2af70d,
            'body': _0x57e331,
            'raw': _0x1c7b21
        };
    }
}
function parseServerHello(_0x2da305) {
    const _0x4303cf = a0_0x43d2af;
    let _0x378244 = 0x0;
    const _0x52ba96 = readUint16(_0x2da305, _0x378244);
    _0x378244 += 0x2;
    const _0x555626 = _0x2da305['slice'](_0x378244, _0x378244 + 0x20);
    _0x378244 += 0x20;
    const _0x241fed = _0x2da305[_0x378244++], _0x1991c6 = _0x2da305[_0x4303cf(0x548)](_0x378244, _0x378244 + _0x241fed);
    _0x378244 += _0x241fed;
    const _0x483af1 = readUint16(_0x2da305, _0x378244);
    _0x378244 += 0x2;
    const _0x2ae121 = _0x2da305[_0x378244++];
    let _0x2b07bc = _0x52ba96, _0x29c3b1 = null, _0x2a68eb = null;
    if (_0x378244 < _0x2da305[_0x4303cf(0x292)]) {
        const _0x7e1273 = readUint16(_0x2da305, _0x378244);
        _0x378244 += 0x2;
        const _0x515853 = _0x378244 + _0x7e1273;
        for (; _0x378244 + 0x4 <= _0x515853;) {
            const _0x17b29e = readUint16(_0x2da305, _0x378244);
            _0x378244 += 0x2;
            const _0x24ba99 = readUint16(_0x2da305, _0x378244);
            _0x378244 += 0x2;
            const _0x4a1418 = _0x2da305['slice'](_0x378244, _0x378244 + _0x24ba99);
            if (_0x378244 += _0x24ba99, _0x17b29e === EXT_SUPPORTED_VERSIONS && _0x24ba99 >= 0x2)
                _0x2b07bc = readUint16(_0x4a1418, 0x0);
            else {
                if (_0x17b29e === EXT_KEY_SHARE && _0x24ba99 >= 0x4) {
                    const _0x3ccacf = readUint16(_0x4a1418, 0x0), _0xe3948d = readUint16(_0x4a1418, 0x2);
                    _0x29c3b1 = {
                        'group': _0x3ccacf,
                        'key': _0x4a1418[_0x4303cf(0x548)](0x4, 0x4 + _0xe3948d)
                    };
                } else
                    _0x17b29e === EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION && _0x24ba99 >= 0x3 && (_0x2a68eb = textDecoder['decode'](_0x4a1418[_0x4303cf(0x548)](0x3, 0x3 + _0x4a1418[0x2])));
            }
        }
    }
    const _0x4ff849 = new Uint8Array([
        0xcf,
        0x21,
        0xad,
        0x74,
        0xe5,
        0x9a,
        0x61,
        0x11,
        0xbe,
        0x1d,
        0x8c,
        0x2,
        0x1e,
        0x65,
        0xb8,
        0x91,
        0xc2,
        0xa2,
        0x11,
        0x16,
        0x7a,
        0xbb,
        0x8c,
        0x5e,
        0x7,
        0x9e,
        0x9,
        0xe2,
        0xc8,
        0xa8,
        0x33,
        0x9c
    ]);
    return {
        'version': _0x52ba96,
        'serverRandom': _0x555626,
        'sessionId': _0x1991c6,
        'cipherSuite': _0x483af1,
        'compression': _0x2ae121,
        'selectedVersion': _0x2b07bc,
        'keyShare': _0x29c3b1,
        'alpn': _0x2a68eb,
        'isHRR': constantTimeEqual(_0x555626, _0x4ff849),
        'isTls13': _0x2b07bc === TLS_VERSION_13
    };
}
function parseServerKeyExchange(_0x66a846) {
    const _0x430f7f = a0_0x43d2af;
    let _0x538455 = 0x1;
    const _0x175b5d = readUint16(_0x66a846, _0x538455);
    _0x538455 += 0x2;
    const _0xef7309 = _0x66a846[_0x538455++];
    return {
        'namedCurve': _0x175b5d,
        'serverPublicKey': _0x66a846[_0x430f7f(0x548)](_0x538455, _0x538455 + _0xef7309)
    };
}
function extractLeafCertificate(_0x456a56, _0x25016d = 0x0) {
    const _0x2a435f = a0_0x43d2af;
    let _0x12e3f5 = 0x0;
    if (_0x25016d) {
        const _0x26f472 = _0x456a56[_0x12e3f5++];
        _0x12e3f5 += _0x26f472;
    }
    if (_0x12e3f5 + 0x3 > _0x456a56[_0x2a435f(0x292)])
        return null;
    const _0x125a15 = readUint24(_0x456a56, _0x12e3f5);
    if (_0x12e3f5 += 0x3, !_0x125a15 || _0x12e3f5 + 0x3 > _0x456a56[_0x2a435f(0x292)])
        return null;
    const _0x28d85b = readUint24(_0x456a56, _0x12e3f5);
    return _0x12e3f5 += 0x3, _0x28d85b ? _0x456a56['slice'](_0x12e3f5, _0x12e3f5 + _0x28d85b) : null;
}
function parseEncryptedExtensions(_0x1809eb) {
    const _0x73a4d8 = a0_0x43d2af, _0xd634cc = { 'alpn': null };
    let _0x49d9ba = 0x2;
    const _0x7c2c56 = 0x2 + readUint16(_0x1809eb, 0x0);
    for (; _0x49d9ba + 0x4 <= _0x7c2c56;) {
        const _0x50769c = readUint16(_0x1809eb, _0x49d9ba);
        _0x49d9ba += 0x2;
        const _0x501d04 = readUint16(_0x1809eb, _0x49d9ba);
        if (_0x49d9ba += 0x2, _0x50769c === EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION && _0x501d04 >= 0x3) {
            const _0x42257a = _0x1809eb[_0x49d9ba + 0x2];
            _0x42257a > 0x0 && _0x49d9ba + 0x3 + _0x42257a <= _0x49d9ba + _0x501d04 && (_0xd634cc[_0x73a4d8(0x696)] = textDecoder[_0x73a4d8(0x49a)](_0x1809eb[_0x73a4d8(0x548)](_0x49d9ba + 0x3, _0x49d9ba + 0x3 + _0x42257a)));
        }
        _0x49d9ba += _0x501d04;
    }
    return _0xd634cc;
}
function buildClientHello(_0x56d7a4, _0x710c75, _0x5ea10a, {
    tls13: _0xd2d137 = !0x0,
    tls12: _0x2a1a3f = !0x0,
    alpn: alpn = null,
    chacha: chacha = !0x0
} = {}) {
    const _0x259c36 = a0_0x43d2af, _0x36bbeb = [];
    _0xd2d137 && _0x36bbeb['push'](0x1301, 0x1302, ...chacha ? [0x1303] : []), _0x2a1a3f && _0x36bbeb[_0x259c36(0x4a8)](0xc02f, 0xc030, 0xc02b, 0xc02c, ...chacha ? [
        0xcca8,
        0xcca9
    ] : []);
    const _0x539b8e = tlsBytes(..._0x36bbeb[_0x259c36(0x1fd)](uint16be)), _0x1c8b46 = [tlsBytes(0xff, 0x1, 0x0, 0x1, 0x0)];
    if (_0x710c75) {
        const _0x318911 = textEncoder[_0x259c36(0x564)](_0x710c75), _0x2ecd92 = tlsBytes(0x0, uint16be(_0x318911['length']), _0x318911);
        _0x1c8b46[_0x259c36(0x4a8)](tlsBytes(uint16be(EXT_SERVER_NAME), uint16be(_0x2ecd92[_0x259c36(0x292)] + 0x2), uint16be(_0x2ecd92['length']), _0x2ecd92));
    }
    _0x1c8b46[_0x259c36(0x4a8)](tlsBytes(uint16be(EXT_EC_POINT_FORMATS), 0x0, 0x2, 0x1, 0x0)), _0x1c8b46[_0x259c36(0x4a8)](tlsBytes(uint16be(EXT_SUPPORTED_GROUPS), 0x0, 0x6, 0x0, 0x4, 0x0, 0x1d, 0x0, 0x17));
    const _0x4d94bf = tlsBytes(...SUPPORTED_SIGNATURE_ALGORITHMS['flatMap'](uint16be));
    _0x1c8b46[_0x259c36(0x4a8)](tlsBytes(uint16be(EXT_SIGNATURE_ALGORITHMS), uint16be(_0x4d94bf['length'] + 0x2), uint16be(_0x4d94bf[_0x259c36(0x292)]), _0x4d94bf));
    const _0x24dc69 = Array[_0x259c36(0x686)](alpn) ? alpn['filter'](Boolean) : alpn ? [alpn] : [];
    if (_0x24dc69[_0x259c36(0x292)]) {
        const _0x256a26 = concatBytes(..._0x24dc69['map'](_0x122931 => {
            const _0xca4f1e = _0x259c36, _0x1bb132 = textEncoder[_0xca4f1e(0x564)](_0x122931);
            return tlsBytes(_0x1bb132['length'], _0x1bb132);
        }));
        _0x1c8b46[_0x259c36(0x4a8)](tlsBytes(uint16be(EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION), uint16be(_0x256a26[_0x259c36(0x292)] + 0x2), uint16be(_0x256a26[_0x259c36(0x292)]), _0x256a26));
    }
    if (_0xd2d137 && _0x5ea10a) {
        let _0x77edba;
        if (_0x1c8b46[_0x259c36(0x4a8)](_0x2a1a3f ? tlsBytes(uint16be(EXT_SUPPORTED_VERSIONS), 0x0, 0x5, 0x4, 0x3, 0x4, 0x3, 0x3) : tlsBytes(uint16be(EXT_SUPPORTED_VERSIONS), 0x0, 0x3, 0x2, 0x3, 0x4)), _0x1c8b46[_0x259c36(0x4a8)](tlsBytes(uint16be(EXT_PSK_KEY_EXCHANGE_MODES), 0x0, 0x2, 0x1, 0x1)), _0x5ea10a?.[_0x259c36(0x2bc)] && _0x5ea10a?.['p256'])
            _0x77edba = concatBytes(tlsBytes(0x0, 0x1d, uint16be(_0x5ea10a['x25519'][_0x259c36(0x292)]), _0x5ea10a[_0x259c36(0x2bc)]), tlsBytes(0x0, 0x17, uint16be(_0x5ea10a[_0x259c36(0x206)]['length']), _0x5ea10a['p256']));
        else {
            if (_0x5ea10a?.['x25519'])
                _0x77edba = tlsBytes(0x0, 0x1d, uint16be(_0x5ea10a[_0x259c36(0x2bc)][_0x259c36(0x292)]), _0x5ea10a[_0x259c36(0x2bc)]);
            else {
                if (_0x5ea10a?.[_0x259c36(0x206)])
                    _0x77edba = tlsBytes(0x0, 0x17, uint16be(_0x5ea10a[_0x259c36(0x206)]['length']), _0x5ea10a[_0x259c36(0x206)]);
                else {
                    if (!(_0x5ea10a instanceof Uint8Array))
                        throw new Error(_0x259c36(0x5a8));
                    _0x77edba = tlsBytes(0x0, 0x17, uint16be(_0x5ea10a[_0x259c36(0x292)]), _0x5ea10a);
                }
            }
        }
        _0x1c8b46[_0x259c36(0x4a8)](tlsBytes(uint16be(EXT_KEY_SHARE), uint16be(_0x77edba[_0x259c36(0x292)] + 0x2), uint16be(_0x77edba[_0x259c36(0x292)]), _0x77edba));
    }
    const _0x1e5157 = concatBytes(..._0x1c8b46);
    return buildHandshakeMessage(HANDSHAKE_TYPE_CLIENT_HELLO, tlsBytes(uint16be(TLS_VERSION_12), _0x56d7a4, 0x0, uint16be(_0x539b8e[_0x259c36(0x292)]), _0x539b8e, 0x1, 0x0, uint16be(_0x1e5157[_0x259c36(0x292)]), _0x1e5157));
}
const uint64be = _0xe52cf2 => {
        const _0x5e416b = a0_0x43d2af, _0x47f9fd = new Uint8Array(0x8);
        return new DataView(_0x47f9fd['buffer'])[_0x5e416b(0x438)](0x0, _0xe52cf2, !0x1), _0x47f9fd;
    }, xorSequenceIntoIv = (_0x20c45d, _0x4b18e0) => {
        const _0x59849d = a0_0x43d2af, _0x4425cd = _0x20c45d[_0x59849d(0x548)](), _0x4d5c27 = uint64be(_0x4b18e0);
        for (let _0x426467 = 0x0; _0x426467 < 0x8; _0x426467++)
            _0x4425cd[_0x4425cd[_0x59849d(0x292)] - 0x8 + _0x426467] ^= _0x4d5c27[_0x426467];
        return _0x4425cd;
    }, deriveTrafficKeys = (_0x218e70, _0x5261ea, _0x7c7b5e, _0x32bd6f) => Promise[a0_0x43d2af(0x369)]([
        hkdfExpandLabel(_0x218e70, _0x5261ea, a0_0x43d2af(0x5e7), EMPTY_BYTES, _0x7c7b5e),
        hkdfExpandLabel(_0x218e70, _0x5261ea, 'iv', EMPTY_BYTES, _0x32bd6f)
    ]);
function a0_0x5eca(_0x4592c5, _0x1c51b9) {
    _0x4592c5 = _0x4592c5 - 0x1b2;
    const _0x2d4e41 = a0_0x2d4e();
    let _0x5eca78 = _0x2d4e41[_0x4592c5];
    if (a0_0x5eca['jcLpGH'] === undefined) {
        var _0x3953b0 = function (_0x513f44) {
            const _0x2abece = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x38feea = '', _0x4dcc53 = '';
            for (let _0x37ab0c = 0x0, _0x556b32, _0x13c990, _0x28aff8 = 0x0; _0x13c990 = _0x513f44['charAt'](_0x28aff8++); ~_0x13c990 && (_0x556b32 = _0x37ab0c % 0x4 ? _0x556b32 * 0x40 + _0x13c990 : _0x13c990, _0x37ab0c++ % 0x4) ? _0x38feea += String['fromCharCode'](0xff & _0x556b32 >> (-0x2 * _0x37ab0c & 0x6)) : 0x0) {
                _0x13c990 = _0x2abece['indexOf'](_0x13c990);
            }
            for (let _0xa9de77 = 0x0, _0x493fce = _0x38feea['length']; _0xa9de77 < _0x493fce; _0xa9de77++) {
                _0x4dcc53 += '%' + ('00' + _0x38feea['charCodeAt'](_0xa9de77)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x4dcc53);
        };
        a0_0x5eca['PuHvHs'] = _0x3953b0, a0_0x5eca['ZQzhSj'] = {}, a0_0x5eca['jcLpGH'] = !![];
    }
    const _0x265117 = _0x2d4e41[0x0];
    a0_0x5eca['MDoEyr'] !== _0x265117 && (a0_0x5eca['ZQzhSj'] = {}, a0_0x5eca['MDoEyr'] = _0x265117);
    const _0x15f199 = a0_0x5eca['ZQzhSj'][_0x4592c5];
    return _0x15f199 === undefined ? (_0x5eca78 = a0_0x5eca['PuHvHs'](_0x5eca78), a0_0x5eca['ZQzhSj'][_0x4592c5] = _0x5eca78) : _0x5eca78 = _0x15f199, _0x5eca78;
}
class TlsClient {
    constructor(_0x3fade1, _0x7b149f = {}) {
        const _0x2d7683 = a0_0x43d2af;
        if (this['socket'] = _0x3fade1, this[_0x2d7683(0x1f0)] = _0x7b149f[_0x2d7683(0x1f0)] || '', this[_0x2d7683(0x287)] = !0x1 !== _0x7b149f[_0x2d7683(0x5fd)], this[_0x2d7683(0x47b)] = !0x1 !== _0x7b149f['tls12'], !this['supportTls13'] && !this[_0x2d7683(0x47b)])
            throw new Error(_0x2d7683(0x455));
        this[_0x2d7683(0x588)] = Array[_0x2d7683(0x686)](_0x7b149f[_0x2d7683(0x696)]) ? _0x7b149f[_0x2d7683(0x696)] : _0x7b149f[_0x2d7683(0x696)] ? [_0x7b149f[_0x2d7683(0x696)]] : null, this['allowChacha'] = _0x7b149f[_0x2d7683(0x5d1)] !== ![], this['timeout'] = _0x7b149f['timeout'] ?? 0x7530, this[_0x2d7683(0x316)] = randomBytes(0x20), this[_0x2d7683(0x533)] = null, this[_0x2d7683(0x2a3)] = [], this[_0x2d7683(0x4e5)] = !0x1, this[_0x2d7683(0x1f4)] = null, this['cipherSuite'] = null, this[_0x2d7683(0x55e)] = null, this[_0x2d7683(0x291)] = !0x1, this[_0x2d7683(0x617)] = null, this[_0x2d7683(0x3c0)] = null, this[_0x2d7683(0x562)] = null, this[_0x2d7683(0x64f)] = null, this[_0x2d7683(0x1f8)] = null, this[_0x2d7683(0x3cb)] = null, this[_0x2d7683(0x275)] = null, this[_0x2d7683(0x26b)] = null, this[_0x2d7683(0x3bc)] = null, this[_0x2d7683(0x3a7)] = null, this[_0x2d7683(0x415)] = null, this[_0x2d7683(0x56c)] = null, this[_0x2d7683(0x367)] = null, this['serverAppIv'] = null, this[_0x2d7683(0x288)] = null, this[_0x2d7683(0x404)] = null, this[_0x2d7683(0x549)] = null, this['serverHandshakeCryptoKey'] = null, this[_0x2d7683(0x280)] = null, this[_0x2d7683(0x4e7)] = null, this[_0x2d7683(0x5d7)] = 0x0n, this['serverSeqNum'] = 0x0n, this['recordParser'] = new TlsRecordParser(), this[_0x2d7683(0x42d)] = new TlsHandshakeParser(), this['keyPairs'] = new Map(), this[_0x2d7683(0x237)] = null, this['sawCert'] = !0x1;
    }
    [a0_0x43d2af(0x40a)](_0x4297eb) {
        const _0x38ad89 = a0_0x43d2af;
        this[_0x38ad89(0x2a3)][_0x38ad89(0x4a8)](_0x4297eb);
    }
    [a0_0x43d2af(0x56d)]() {
        const _0x1124dd = a0_0x43d2af;
        return 0x1 === this['handshakeChunks'][_0x1124dd(0x292)] ? this[_0x1124dd(0x2a3)][0x0] : concatBytes(...this[_0x1124dd(0x2a3)]);
    }
    [a0_0x43d2af(0x5eb)](_0x55459e) {
        const _0x44ed95 = a0_0x43d2af;
        return CIPHER_SUITES_BY_ID[_0x44ed95(0x257)](_0x55459e) || null;
    }
    async ['readChunk'](_0x476500) {
        const _0x4be687 = a0_0x43d2af;
        return this[_0x4be687(0x382)] ? Promise[_0x4be687(0x5f2)]([
            _0x476500[_0x4be687(0x1e7)](),
            new Promise((_0x360f1f, _0x47e9e7) => setTimeout(() => _0x47e9e7(new Error(_0x4be687(0x379))), this[_0x4be687(0x382)]))
        ]) : _0x476500[_0x4be687(0x1e7)]();
    }
    async [a0_0x43d2af(0x591)](_0x51c0b8, _0x49e9fb, _0x19a3f5) {
        const _0x59d22d = a0_0x43d2af;
        for (;;) {
            let _0x1fb4cd;
            for (; _0x1fb4cd = this[_0x59d22d(0x255)]['next']();)
                if (await _0x49e9fb(_0x1fb4cd))
                    return;
            const {
                value: _0x36a0ff,
                done: _0xa06e84
            } = await this[_0x59d22d(0x44a)](_0x51c0b8);
            if (_0xa06e84)
                throw new Error(_0x19a3f5);
            this['recordParser'][_0x59d22d(0x3d5)](_0x36a0ff);
        }
    }
    async [a0_0x43d2af(0x535)](_0x5c2f91, _0x341803, _0x4e2655) {
        const _0x1d0cad = a0_0x43d2af;
        for (let _0x404869; _0x404869 = this[_0x1d0cad(0x42d)][_0x1d0cad(0x1be)]();)
            if (await _0x341803(_0x404869))
                return;
        return this[_0x1d0cad(0x591)](_0x5c2f91, async _0x4c8b06 => {
            const _0x1b66f2 = _0x1d0cad;
            if (_0x4c8b06[_0x1b66f2(0x3c6)] === CONTENT_TYPE_ALERT) {
                if (shouldIgnoreTlsAlert(_0x4c8b06[_0x1b66f2(0x531)]))
                    return;
                throw new Error(_0x1b66f2(0x66f) + _0x4c8b06[_0x1b66f2(0x531)][0x1]);
            }
            if (_0x4c8b06[_0x1b66f2(0x3c6)] === CONTENT_TYPE_HANDSHAKE) {
                this[_0x1b66f2(0x42d)]['feed'](_0x4c8b06[_0x1b66f2(0x531)]);
                for (let _0x3426cb; _0x3426cb = this[_0x1b66f2(0x42d)][_0x1b66f2(0x1be)]();)
                    if (await _0x341803(_0x3426cb))
                        return 0x1;
            }
        }, _0x4e2655);
    }
    async [a0_0x43d2af(0x2ea)](_0x2d8a0e) {
        const _0x5d1ad0 = a0_0x43d2af;
        if (!_0x2d8a0e?.[_0x5d1ad0(0x292)])
            throw new Error(_0x5d1ad0(0x419));
        this[_0x5d1ad0(0x27e)] = !0x0;
    }
    async ['handshake']() {
        const _0x4f0bdd = a0_0x43d2af, [_0x47d347, _0x263136] = await Promise[_0x4f0bdd(0x369)]([
                generateKeyShare('P-256'),
                generateKeyShare(_0x4f0bdd(0x5f5))
            ]);
        this[_0x4f0bdd(0x505)] = new Map([
            [
                0x17,
                _0x47d347
            ],
            [
                0x1d,
                _0x263136
            ]
        ]), this[_0x4f0bdd(0x237)] = _0x47d347['keyPair'];
        const _0x3ca1f2 = this[_0x4f0bdd(0x67b)][_0x4f0bdd(0x416)][_0x4f0bdd(0x22c)](), _0x1e71eb = this[_0x4f0bdd(0x67b)][_0x4f0bdd(0x5ab)][_0x4f0bdd(0x50b)]();
        try {
            const _0x50fe1b = buildClientHello(this[_0x4f0bdd(0x316)], this[_0x4f0bdd(0x1f0)], {
                'x25519': _0x263136[_0x4f0bdd(0x3a0)],
                'p256': _0x47d347['publicKeyRaw']
            }, {
                'tls13': this[_0x4f0bdd(0x287)],
                'tls12': this[_0x4f0bdd(0x47b)],
                'alpn': this[_0x4f0bdd(0x588)],
                'chacha': this[_0x4f0bdd(0x5d1)]
            });
            this[_0x4f0bdd(0x40a)](_0x50fe1b), await _0x1e71eb[_0x4f0bdd(0x668)](buildTlsRecord(CONTENT_TYPE_HANDSHAKE, _0x50fe1b, TLS_VERSION_10));
            const _0x2461ee = await this[_0x4f0bdd(0x338)](_0x3ca1f2);
            if (_0x2461ee['isHRR'])
                throw new Error(_0x4f0bdd(0x48f));
            if (_0x2461ee['keyShare']?.[_0x4f0bdd(0x201)] && this[_0x4f0bdd(0x505)][_0x4f0bdd(0x53a)](_0x2461ee[_0x4f0bdd(0x58c)][_0x4f0bdd(0x201)])) {
                const _0x246c4b = this['keyPairs'][_0x4f0bdd(0x257)](_0x2461ee[_0x4f0bdd(0x58c)][_0x4f0bdd(0x201)]);
                this['ecdhKeyPair'] = _0x246c4b[_0x4f0bdd(0x23e)];
            }
            _0x2461ee[_0x4f0bdd(0x291)] ? await this[_0x4f0bdd(0x453)](_0x3ca1f2, _0x1e71eb, _0x2461ee) : await this[_0x4f0bdd(0x1d7)](_0x3ca1f2, _0x1e71eb), this['handshakeComplete'] = !0x0;
        } finally {
            _0x3ca1f2[_0x4f0bdd(0x1d5)](), _0x1e71eb[_0x4f0bdd(0x1d5)]();
        }
    }
    async [a0_0x43d2af(0x338)](_0x3a4aee) {
        const _0x1bebac = a0_0x43d2af;
        for (;;) {
            const {
                value: _0x1c7b3b,
                done: _0x11033b
            } = await this[_0x1bebac(0x44a)](_0x3a4aee);
            if (_0x11033b)
                throw new Error(_0x1bebac(0x5c2));
            let _0xa1054;
            for (this[_0x1bebac(0x255)][_0x1bebac(0x3d5)](_0x1c7b3b); _0xa1054 = this[_0x1bebac(0x255)][_0x1bebac(0x1be)]();) {
                if (_0xa1054['type'] === CONTENT_TYPE_ALERT) {
                    if (shouldIgnoreTlsAlert(_0xa1054[_0x1bebac(0x531)]))
                        continue;
                    throw new Error(_0x1bebac(0x279) + _0xa1054[_0x1bebac(0x531)][0x0] + _0x1bebac(0x309) + _0xa1054[_0x1bebac(0x531)][0x1]);
                }
                if (_0xa1054[_0x1bebac(0x3c6)] !== CONTENT_TYPE_HANDSHAKE)
                    continue;
                let _0x33f061;
                for (this[_0x1bebac(0x42d)][_0x1bebac(0x3d5)](_0xa1054['fragment']); _0x33f061 = this['handshakeParser']['next']();) {
                    if (_0x33f061[_0x1bebac(0x3c6)] !== HANDSHAKE_TYPE_SERVER_HELLO)
                        continue;
                    this[_0x1bebac(0x40a)](_0x33f061[_0x1bebac(0x1b9)]);
                    const _0x3b2ca7 = parseServerHello(_0x33f061['body']);
                    if (this[_0x1bebac(0x533)] = _0x3b2ca7[_0x1bebac(0x533)], this[_0x1bebac(0x4fe)] = _0x3b2ca7['cipherSuite'], this['cipherConfig'] = this[_0x1bebac(0x5eb)](_0x3b2ca7[_0x1bebac(0x4fe)]), this[_0x1bebac(0x291)] = _0x3b2ca7[_0x1bebac(0x291)], this[_0x1bebac(0x1f4)] = _0x3b2ca7[_0x1bebac(0x696)] || null, !this[_0x1bebac(0x55e)])
                        throw new Error(_0x1bebac(0x665) + _0x3b2ca7[_0x1bebac(0x4fe)][_0x1bebac(0x592)](0x10));
                    return _0x3b2ca7;
                }
            }
        }
    }
    async [a0_0x43d2af(0x1d7)](_0x5a6b34, _0x17681f) {
        const _0x465fa8 = a0_0x43d2af;
        let _0xa32ff7 = null, _0x49fda0 = !0x1, _0x26e1f7 = !0x1;
        if (await this[_0x465fa8(0x535)](_0x5a6b34, async _0x14a311 => {
                const _0x1c0e4f = _0x465fa8;
                switch (_0x14a311[_0x1c0e4f(0x3c6)]) {
                case HANDSHAKE_TYPE_CERTIFICATE: {
                        this[_0x1c0e4f(0x40a)](_0x14a311['raw']);
                        const _0x3047c3 = extractLeafCertificate(_0x14a311[_0x1c0e4f(0x3ff)], 0x1);
                        if (!_0x3047c3)
                            throw new Error(_0x1c0e4f(0x5db));
                        await this['acceptCertificate'](_0x3047c3);
                        break;
                    }
                case HANDSHAKE_TYPE_SERVER_KEY_EXCHANGE:
                    this['recordHandshake'](_0x14a311[_0x1c0e4f(0x1b9)]), _0xa32ff7 = parseServerKeyExchange(_0x14a311['body']);
                    break;
                case HANDSHAKE_TYPE_SERVER_HELLO_DONE:
                    return this[_0x1c0e4f(0x40a)](_0x14a311[_0x1c0e4f(0x1b9)]), _0x49fda0 = !0x0, 0x1;
                case HANDSHAKE_TYPE_CERTIFICATE_REQUEST:
                    this[_0x1c0e4f(0x40a)](_0x14a311['raw']), _0x26e1f7 = !0x0;
                    break;
                default:
                    this[_0x1c0e4f(0x40a)](_0x14a311[_0x1c0e4f(0x1b9)]);
                }
            }, _0x465fa8(0x5d0)), !this[_0x465fa8(0x27e)])
            throw new Error(_0x465fa8(0x3ab));
        const _0x10fb50 = _0xa32ff7;
        if (!_0x10fb50)
            throw new Error(_0x465fa8(0x46b));
        const _0x47cb9c = GROUPS_BY_ID['get'](_0x10fb50[_0x465fa8(0x325)]);
        if (!_0x47cb9c)
            throw new Error('Unsupported\x20named\x20curve:\x200x' + _0x10fb50[_0x465fa8(0x325)]['toString'](0x10));
        const _0x5592e1 = this['keyPairs'][_0x465fa8(0x257)](_0x10fb50[_0x465fa8(0x325)]);
        if (!_0x5592e1)
            throw new Error(_0x465fa8(0x386) + _0x10fb50[_0x465fa8(0x325)][_0x465fa8(0x592)](0x10));
        const _0x46e95c = await deriveSharedSecret(_0x5592e1[_0x465fa8(0x23e)][_0x465fa8(0x67a)], _0x10fb50['serverPublicKey'], _0x47cb9c), _0x1f32fa = buildHandshakeMessage(HANDSHAKE_TYPE_CLIENT_KEY_EXCHANGE, tlsBytes(_0x5592e1['publicKeyRaw'][_0x465fa8(0x292)], _0x5592e1[_0x465fa8(0x3a0)]));
        if (_0x26e1f7) {
            const _0x2fc8ec = buildHandshakeMessage(HANDSHAKE_TYPE_CERTIFICATE, tlsBytes(0x0, 0x0, 0x0));
            this[_0x465fa8(0x40a)](_0x2fc8ec), await _0x17681f[_0x465fa8(0x668)](buildTlsRecord(CONTENT_TYPE_HANDSHAKE, _0x2fc8ec));
        }
        this[_0x465fa8(0x40a)](_0x1f32fa);
        const _0x4446c6 = this['cipherConfig'][_0x465fa8(0x1f3)];
        this[_0x465fa8(0x617)] = await tls12Prf(_0x46e95c, 'master\x20secret', concatBytes(this[_0x465fa8(0x316)], this['serverRandom']), 0x30, _0x4446c6);
        const _0x9da844 = this[_0x465fa8(0x55e)][_0x465fa8(0x300)], _0x5686e9 = this[_0x465fa8(0x55e)][_0x465fa8(0x238)], _0x2f02cb = await tls12Prf(this[_0x465fa8(0x617)], _0x465fa8(0x64d), concatBytes(this[_0x465fa8(0x533)], this[_0x465fa8(0x316)]), 0x2 * _0x9da844 + 0x2 * _0x5686e9, _0x4446c6);
        this[_0x465fa8(0x562)] = _0x2f02cb['slice'](0x0, _0x9da844), this[_0x465fa8(0x64f)] = _0x2f02cb['slice'](_0x9da844, 0x2 * _0x9da844), this[_0x465fa8(0x1f8)] = _0x2f02cb['slice'](0x2 * _0x9da844, 0x2 * _0x9da844 + _0x5686e9), this[_0x465fa8(0x3cb)] = _0x2f02cb[_0x465fa8(0x548)](0x2 * _0x9da844 + _0x5686e9, 0x2 * _0x9da844 + 0x2 * _0x5686e9);
        if (!this[_0x465fa8(0x55e)][_0x465fa8(0x690)])
            [this[_0x465fa8(0x288)], this[_0x465fa8(0x404)]] = await Promise[_0x465fa8(0x369)]([
                importAesGcmKey(this[_0x465fa8(0x562)], [_0x465fa8(0x5df)]),
                importAesGcmKey(this['serverWriteKey'], [_0x465fa8(0x267)])
            ]);
        await _0x17681f[_0x465fa8(0x668)](buildTlsRecord(CONTENT_TYPE_HANDSHAKE, _0x1f32fa)), await _0x17681f['write'](buildTlsRecord(CONTENT_TYPE_CHANGE_CIPHER_SPEC, tlsBytes(0x1)));
        const _0x269f4b = await tls12Prf(this[_0x465fa8(0x617)], 'client\x20finished', await digestBytes(_0x4446c6, this['transcript']()), 0xc, _0x4446c6), _0x1c4856 = buildHandshakeMessage(HANDSHAKE_TYPE_FINISHED, _0x269f4b);
        this[_0x465fa8(0x40a)](_0x1c4856), await _0x17681f['write'](buildTlsRecord(CONTENT_TYPE_HANDSHAKE, await this['encryptTls12'](_0x1c4856, CONTENT_TYPE_HANDSHAKE)));
        let _0x44b44b = !0x1;
        await this[_0x465fa8(0x591)](_0x5a6b34, async _0x440b06 => {
            const _0xb57ac7 = _0x465fa8;
            if (_0x440b06['type'] === CONTENT_TYPE_ALERT) {
                if (shouldIgnoreTlsAlert(_0x440b06[_0xb57ac7(0x531)]))
                    return;
                throw new Error('TLS\x20Alert:\x20' + _0x440b06[_0xb57ac7(0x531)][0x1]);
            }
            if (_0x440b06[_0xb57ac7(0x3c6)] === CONTENT_TYPE_CHANGE_CIPHER_SPEC)
                return void (_0x44b44b = !0x0);
            if (_0x440b06[_0xb57ac7(0x3c6)] !== CONTENT_TYPE_HANDSHAKE || !_0x44b44b)
                return;
            const _0x25992c = await this[_0xb57ac7(0x445)](_0x440b06[_0xb57ac7(0x531)], CONTENT_TYPE_HANDSHAKE);
            if (_0x25992c[0x0] !== HANDSHAKE_TYPE_FINISHED)
                return;
            const _0xefdecb = readUint24(_0x25992c, 0x1), _0x4959e4 = _0x25992c[_0xb57ac7(0x548)](0x4, 0x4 + _0xefdecb), _0x185515 = await tls12Prf(this[_0xb57ac7(0x617)], _0xb57ac7(0x6a4), await digestBytes(_0x4446c6, this[_0xb57ac7(0x56d)]()), 0xc, _0x4446c6);
            if (!constantTimeEqual(_0x4959e4, _0x185515))
                throw new Error(_0xb57ac7(0x435));
            return 0x1;
        }, _0x465fa8(0x622));
    }
    async [a0_0x43d2af(0x453)](_0x2d51cb, _0xdcfc24, _0x2be97c) {
        const _0x10fdf4 = a0_0x43d2af, _0x5e0d99 = GROUPS_BY_ID[_0x10fdf4(0x257)](_0x2be97c['keyShare']?.[_0x10fdf4(0x201)]);
        if (!_0x5e0d99 || !_0x2be97c[_0x10fdf4(0x58c)]?.['key']?.[_0x10fdf4(0x292)])
            throw new Error(_0x10fdf4(0x1b5));
        const _0x387cda = this['cipherConfig'][_0x10fdf4(0x1f3)], _0xb1c29c = hashByteLength(_0x387cda), _0x39d05d = this[_0x10fdf4(0x55e)][_0x10fdf4(0x300)], _0x5ef8a4 = this[_0x10fdf4(0x55e)][_0x10fdf4(0x238)], _0x5b8786 = await deriveSharedSecret(this[_0x10fdf4(0x237)][_0x10fdf4(0x67a)], _0x2be97c[_0x10fdf4(0x58c)][_0x10fdf4(0x5e7)], _0x5e0d99), _0x35a7c5 = await hkdfExtract(_0x387cda, null, new Uint8Array(_0xb1c29c)), _0x422124 = await hkdfExpandLabel(_0x387cda, _0x35a7c5, _0x10fdf4(0x1ed), await digestBytes(_0x387cda, EMPTY_BYTES), _0xb1c29c);
        this[_0x10fdf4(0x3c0)] = await hkdfExtract(_0x387cda, _0x422124, _0x5b8786);
        const _0x6ce9b4 = await digestBytes(_0x387cda, this[_0x10fdf4(0x56d)]()), _0x16ef06 = await hkdfExpandLabel(_0x387cda, this[_0x10fdf4(0x3c0)], 'c\x20hs\x20traffic', _0x6ce9b4, _0xb1c29c), _0x10e4b1 = await hkdfExpandLabel(_0x387cda, this[_0x10fdf4(0x3c0)], 's\x20hs\x20traffic', _0x6ce9b4, _0xb1c29c);
        [this['clientHandshakeKey'], this[_0x10fdf4(0x3bc)]] = await deriveTrafficKeys(_0x387cda, _0x16ef06, _0x39d05d, _0x5ef8a4), [this[_0x10fdf4(0x26b)], this[_0x10fdf4(0x3a7)]] = await deriveTrafficKeys(_0x387cda, _0x10e4b1, _0x39d05d, _0x5ef8a4);
        if (!this[_0x10fdf4(0x55e)][_0x10fdf4(0x690)])
            [this[_0x10fdf4(0x549)], this[_0x10fdf4(0x557)]] = await Promise[_0x10fdf4(0x369)]([
                importAesGcmKey(this[_0x10fdf4(0x275)], [_0x10fdf4(0x5df)]),
                importAesGcmKey(this[_0x10fdf4(0x26b)], [_0x10fdf4(0x267)])
            ]);
        const _0x209764 = await hkdfExpandLabel(_0x387cda, _0x10e4b1, _0x10fdf4(0x2e0), EMPTY_BYTES, _0xb1c29c);
        let _0x504bc8 = !0x1, _0x164e58 = !0x1;
        const _0x27b89f = async _0x1fa9b6 => {
            const _0x465522 = _0x10fdf4;
            switch (_0x1fa9b6[_0x465522(0x3c6)]) {
            case HANDSHAKE_TYPE_ENCRYPTED_EXTENSIONS: {
                    const _0x1ae997 = parseEncryptedExtensions(_0x1fa9b6[_0x465522(0x3ff)]);
                    _0x1ae997[_0x465522(0x696)] && (this[_0x465522(0x1f4)] = _0x1ae997['alpn']), this['recordHandshake'](_0x1fa9b6[_0x465522(0x1b9)]);
                    break;
                }
            case HANDSHAKE_TYPE_CERTIFICATE: {
                    const _0x3e9433 = extractLeafCertificate(_0x1fa9b6[_0x465522(0x3ff)]);
                    if (!_0x3e9433)
                        throw new Error(_0x465522(0x683));
                    await this[_0x465522(0x2ea)](_0x3e9433), this[_0x465522(0x40a)](_0x1fa9b6[_0x465522(0x1b9)]);
                    break;
                }
            case HANDSHAKE_TYPE_CERTIFICATE_REQUEST:
                this[_0x465522(0x40a)](_0x1fa9b6[_0x465522(0x1b9)]), _0x164e58 = !0x0;
                break;
            case HANDSHAKE_TYPE_CERTIFICATE_VERIFY:
                this[_0x465522(0x40a)](_0x1fa9b6[_0x465522(0x1b9)]);
                break;
            case HANDSHAKE_TYPE_FINISHED: {
                    const _0x103500 = await hmac(_0x387cda, _0x209764, await digestBytes(_0x387cda, this[_0x465522(0x56d)]()));
                    if (!constantTimeEqual(_0x103500, _0x1fa9b6[_0x465522(0x3ff)]))
                        throw new Error(_0x465522(0x552));
                    this[_0x465522(0x40a)](_0x1fa9b6[_0x465522(0x1b9)]), _0x504bc8 = !0x0;
                    break;
                }
            default:
                this[_0x465522(0x40a)](_0x1fa9b6[_0x465522(0x1b9)]);
            }
        };
        await this[_0x10fdf4(0x591)](_0x2d51cb, async _0x37cb8c => {
            const _0x4f2ba7 = _0x10fdf4;
            if (_0x37cb8c[_0x4f2ba7(0x3c6)] === CONTENT_TYPE_CHANGE_CIPHER_SPEC || _0x37cb8c['type'] === CONTENT_TYPE_HANDSHAKE)
                return;
            if (_0x37cb8c[_0x4f2ba7(0x3c6)] === CONTENT_TYPE_ALERT) {
                if (shouldIgnoreTlsAlert(_0x37cb8c['fragment']))
                    return;
                throw new Error(_0x4f2ba7(0x66f) + _0x37cb8c[_0x4f2ba7(0x531)][0x1]);
            }
            if (_0x37cb8c[_0x4f2ba7(0x3c6)] !== CONTENT_TYPE_APPLICATION_DATA)
                return;
            const _0x2216c1 = await this[_0x4f2ba7(0x64b)](_0x37cb8c['fragment']), _0x30dfe6 = _0x2216c1[_0x2216c1[_0x4f2ba7(0x292)] - 0x1], _0x3b1613 = _0x2216c1['slice'](0x0, -0x1);
            if (_0x30dfe6 === CONTENT_TYPE_HANDSHAKE) {
                this[_0x4f2ba7(0x42d)][_0x4f2ba7(0x3d5)](_0x3b1613);
                for (let _0x15a392; _0x15a392 = this[_0x4f2ba7(0x42d)][_0x4f2ba7(0x1be)]();)
                    if (await _0x27b89f(_0x15a392), _0x504bc8)
                        return 0x1;
            }
        }, 'Connection\x20closed\x20during\x20TLS\x201.3\x20handshake');
        const _0x3c254d = await digestBytes(_0x387cda, this['transcript']()), _0x8bd5d4 = await hkdfExpandLabel(_0x387cda, this[_0x10fdf4(0x3c0)], _0x10fdf4(0x1ed), await digestBytes(_0x387cda, EMPTY_BYTES), _0xb1c29c), _0x1d12a2 = await hkdfExtract(_0x387cda, _0x8bd5d4, new Uint8Array(_0xb1c29c)), _0x5415b9 = await hkdfExpandLabel(_0x387cda, _0x1d12a2, _0x10fdf4(0x594), _0x3c254d, _0xb1c29c), _0x32878d = await hkdfExpandLabel(_0x387cda, _0x1d12a2, _0x10fdf4(0x2a5), _0x3c254d, _0xb1c29c);
        [this[_0x10fdf4(0x415)], this['clientAppIv']] = await deriveTrafficKeys(_0x387cda, _0x5415b9, _0x39d05d, _0x5ef8a4), [this[_0x10fdf4(0x56c)], this['serverAppIv']] = await deriveTrafficKeys(_0x387cda, _0x32878d, _0x39d05d, _0x5ef8a4);
        if (!this[_0x10fdf4(0x55e)]['chacha'])
            [this[_0x10fdf4(0x280)], this[_0x10fdf4(0x4e7)]] = await Promise[_0x10fdf4(0x369)]([
                importAesGcmKey(this[_0x10fdf4(0x415)], [_0x10fdf4(0x5df)]),
                importAesGcmKey(this[_0x10fdf4(0x56c)], [_0x10fdf4(0x267)])
            ]);
        let _0x362964 = EMPTY_BYTES;
        if (_0x164e58)
            _0x362964 = buildHandshakeMessage(HANDSHAKE_TYPE_CERTIFICATE, tlsBytes(0x0, 0x0, 0x0, 0x0)), this[_0x10fdf4(0x40a)](_0x362964);
        const _0x5498e0 = await hkdfExpandLabel(_0x387cda, _0x16ef06, _0x10fdf4(0x2e0), EMPTY_BYTES, _0xb1c29c), _0x5a4ef0 = await hmac(_0x387cda, _0x5498e0, await digestBytes(_0x387cda, this['transcript']())), _0x10e4e6 = buildHandshakeMessage(HANDSHAKE_TYPE_FINISHED, _0x5a4ef0);
        this[_0x10fdf4(0x40a)](_0x10e4e6), await _0xdcfc24[_0x10fdf4(0x668)](buildTlsRecord(CONTENT_TYPE_APPLICATION_DATA, await this[_0x10fdf4(0x61d)](concatBytes(_0x362964, _0x10e4e6, [CONTENT_TYPE_HANDSHAKE])))), this[_0x10fdf4(0x5d7)] = 0x0n, this[_0x10fdf4(0x691)] = 0x0n;
    }
    async ['encryptTls12'](_0x36a711, _0x218982) {
        const _0x5412a1 = a0_0x43d2af, _0x3b8a9b = this[_0x5412a1(0x5d7)]++, _0x482a79 = uint64be(_0x3b8a9b), _0x5c6277 = concatBytes(_0x482a79, [_0x218982], uint16be(TLS_VERSION_12), uint16be(_0x36a711[_0x5412a1(0x292)]));
        if (this[_0x5412a1(0x55e)][_0x5412a1(0x690)]) {
            const _0x5ee5c7 = xorSequenceIntoIv(this['clientWriteIv'], _0x3b8a9b);
            return chacha20Poly1305Encrypt(this[_0x5412a1(0x562)], _0x5ee5c7, _0x36a711, _0x5c6277);
        }
        const _0x220672 = randomBytes(0x8);
        if (!this['clientWriteCryptoKey'])
            this[_0x5412a1(0x288)] = await importAesGcmKey(this[_0x5412a1(0x562)], ['encrypt']);
        return concatBytes(_0x220672, await aesGcmEncryptWithKey(this[_0x5412a1(0x288)], concatBytes(this[_0x5412a1(0x1f8)], _0x220672), _0x36a711, _0x5c6277));
    }
    async ['decryptTls12'](_0x1caa75, _0x4de7c2) {
        const _0x378226 = a0_0x43d2af, _0x435c61 = this['serverSeqNum']++, _0x32fc72 = uint64be(_0x435c61);
        if (this['cipherConfig'][_0x378226(0x690)]) {
            const _0xf1df5f = xorSequenceIntoIv(this['serverWriteIv'], _0x435c61);
            return chacha20Poly1305Decrypt(this[_0x378226(0x64f)], _0xf1df5f, _0x1caa75, concatBytes(_0x32fc72, [_0x4de7c2], uint16be(TLS_VERSION_12), uint16be(_0x1caa75[_0x378226(0x292)] - 0x10)));
        }
        const _0x5b2b04 = _0x1caa75[_0x378226(0x68d)](0x0, 0x8), _0xe1cf = _0x1caa75[_0x378226(0x68d)](0x8);
        if (!this[_0x378226(0x404)])
            this['serverWriteCryptoKey'] = await importAesGcmKey(this[_0x378226(0x64f)], ['decrypt']);
        return aesGcmDecryptWithKey(this[_0x378226(0x404)], concatBytes(this['serverWriteIv'], _0x5b2b04), _0xe1cf, concatBytes(_0x32fc72, [_0x4de7c2], uint16be(TLS_VERSION_12), uint16be(_0xe1cf[_0x378226(0x292)] - 0x10)));
    }
    async ['encryptTls13Handshake'](_0x35a84f) {
        const _0x2b96ab = a0_0x43d2af, _0x2a0ae9 = xorSequenceIntoIv(this[_0x2b96ab(0x3bc)], this[_0x2b96ab(0x5d7)]++), _0x452ba9 = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 0x3, 0x3, uint16be(_0x35a84f[_0x2b96ab(0x292)] + 0x10));
        if (this[_0x2b96ab(0x55e)]['chacha'])
            return chacha20Poly1305Encrypt(this[_0x2b96ab(0x275)], _0x2a0ae9, _0x35a84f, _0x452ba9);
        if (!this[_0x2b96ab(0x549)])
            this['clientHandshakeCryptoKey'] = await importAesGcmKey(this[_0x2b96ab(0x275)], [_0x2b96ab(0x5df)]);
        return aesGcmEncryptWithKey(this[_0x2b96ab(0x549)], _0x2a0ae9, _0x35a84f, _0x452ba9);
    }
    async [a0_0x43d2af(0x64b)](_0xc370f0) {
        const _0x2f8ee5 = a0_0x43d2af, _0x56a18e = xorSequenceIntoIv(this[_0x2f8ee5(0x3a7)], this[_0x2f8ee5(0x691)]++), _0x20f7b0 = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 0x3, 0x3, uint16be(_0xc370f0[_0x2f8ee5(0x292)])), _0x40ba0e = this['cipherConfig'][_0x2f8ee5(0x690)] ? await chacha20Poly1305Decrypt(this[_0x2f8ee5(0x26b)], _0x56a18e, _0xc370f0, _0x20f7b0) : await aesGcmDecryptWithKey(this[_0x2f8ee5(0x557)] || (this[_0x2f8ee5(0x557)] = await importAesGcmKey(this[_0x2f8ee5(0x26b)], [_0x2f8ee5(0x267)])), _0x56a18e, _0xc370f0, _0x20f7b0);
        let _0x419c9f = _0x40ba0e['length'] - 0x1;
        for (; _0x419c9f >= 0x0 && !_0x40ba0e[_0x419c9f];)
            _0x419c9f--;
        return _0x419c9f < 0x0 ? EMPTY_BYTES : _0x40ba0e[_0x2f8ee5(0x548)](0x0, _0x419c9f + 0x1);
    }
    async ['encryptTls13'](_0x31dd0b) {
        const _0x5d29c0 = a0_0x43d2af, _0x43678e = concatBytes(_0x31dd0b, [CONTENT_TYPE_APPLICATION_DATA]), _0x378957 = xorSequenceIntoIv(this[_0x5d29c0(0x367)], this[_0x5d29c0(0x5d7)]++), _0x5e70a8 = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 0x3, 0x3, uint16be(_0x43678e['length'] + 0x10));
        if (this['cipherConfig'][_0x5d29c0(0x690)])
            return chacha20Poly1305Encrypt(this[_0x5d29c0(0x415)], _0x378957, _0x43678e, _0x5e70a8);
        if (!this[_0x5d29c0(0x280)])
            this[_0x5d29c0(0x280)] = await importAesGcmKey(this[_0x5d29c0(0x415)], [_0x5d29c0(0x5df)]);
        return aesGcmEncryptWithKey(this[_0x5d29c0(0x280)], _0x378957, _0x43678e, _0x5e70a8);
    }
    async [a0_0x43d2af(0x547)](_0x34d6d3) {
        const _0x110fb7 = a0_0x43d2af, _0x1cc7f6 = xorSequenceIntoIv(this[_0x110fb7(0x2fb)], this[_0x110fb7(0x691)]++), _0x5d7243 = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 0x3, 0x3, uint16be(_0x34d6d3['length'])), _0x4d8ce3 = this['cipherConfig']['chacha'] ? await chacha20Poly1305Decrypt(this[_0x110fb7(0x56c)], _0x1cc7f6, _0x34d6d3, _0x5d7243) : await aesGcmDecryptWithKey(this['serverAppCryptoKey'] || (this[_0x110fb7(0x4e7)] = await importAesGcmKey(this[_0x110fb7(0x56c)], ['decrypt'])), _0x1cc7f6, _0x34d6d3, _0x5d7243);
        let _0x50a740 = _0x4d8ce3[_0x110fb7(0x292)] - 0x1;
        for (; _0x50a740 >= 0x0 && !_0x4d8ce3[_0x50a740];)
            _0x50a740--;
        if (_0x50a740 < 0x0)
            return {
                'data': EMPTY_BYTES,
                'type': 0x0
            };
        return {
            'data': _0x4d8ce3[_0x110fb7(0x548)](0x0, _0x50a740),
            'type': _0x4d8ce3[_0x50a740]
        };
    }
    async [a0_0x43d2af(0x668)](_0x474b11) {
        const _0x1ab4a0 = a0_0x43d2af;
        if (!this[_0x1ab4a0(0x4e5)])
            throw new Error('Handshake\x20not\x20complete');
        const _0x289966 = 数据转Uint8Array(_0x474b11);
        if (!_0x289966[_0x1ab4a0(0x574)])
            return;
        const _0x328a42 = this[_0x1ab4a0(0x67b)][_0x1ab4a0(0x5ab)][_0x1ab4a0(0x50b)]();
        try {
            const _0x38c137 = [];
            for (let _0x45758f = 0x0; _0x45758f < _0x289966['byteLength']; _0x45758f += TLS_MAX_PLAINTEXT_FRAGMENT) {
                const _0x426376 = _0x289966['subarray'](_0x45758f, Math['min'](_0x45758f + TLS_MAX_PLAINTEXT_FRAGMENT, _0x289966[_0x1ab4a0(0x574)])), _0x5ea1dd = this['isTls13'] ? await this[_0x1ab4a0(0x39f)](_0x426376) : await this[_0x1ab4a0(0x3b8)](_0x426376, CONTENT_TYPE_APPLICATION_DATA);
                _0x38c137['push'](buildTlsRecord(CONTENT_TYPE_APPLICATION_DATA, _0x5ea1dd));
            }
            await _0x328a42[_0x1ab4a0(0x668)](_0x38c137[_0x1ab4a0(0x292)] === 0x1 ? _0x38c137[0x0] : concatBytes(..._0x38c137));
        } finally {
            _0x328a42[_0x1ab4a0(0x1d5)]();
        }
    }
    async [a0_0x43d2af(0x1e7)]() {
        const _0x2bf5e3 = a0_0x43d2af;
        for (;;) {
            let _0x370c12;
            for (; _0x370c12 = this[_0x2bf5e3(0x255)][_0x2bf5e3(0x1be)]();) {
                if (_0x370c12[_0x2bf5e3(0x3c6)] === CONTENT_TYPE_ALERT) {
                    if (_0x370c12[_0x2bf5e3(0x531)][0x1] === ALERT_CLOSE_NOTIFY)
                        return null;
                    throw new Error(_0x2bf5e3(0x66f) + _0x370c12[_0x2bf5e3(0x531)][0x1]);
                }
                if (_0x370c12[_0x2bf5e3(0x3c6)] !== CONTENT_TYPE_APPLICATION_DATA)
                    continue;
                if (!this[_0x2bf5e3(0x291)])
                    return this[_0x2bf5e3(0x445)](_0x370c12[_0x2bf5e3(0x531)], CONTENT_TYPE_APPLICATION_DATA);
                const {
                    data: _0x1ec3db,
                    type: _0x1f41a4
                } = await this[_0x2bf5e3(0x547)](_0x370c12[_0x2bf5e3(0x531)]);
                if (_0x1f41a4 === CONTENT_TYPE_APPLICATION_DATA)
                    return _0x1ec3db;
                if (_0x1f41a4 === CONTENT_TYPE_ALERT) {
                    if (_0x1ec3db[0x1] === ALERT_CLOSE_NOTIFY)
                        return null;
                    throw new Error(_0x2bf5e3(0x66f) + _0x1ec3db[0x1]);
                }
                if (_0x1f41a4 !== CONTENT_TYPE_HANDSHAKE)
                    continue;
                let _0x307217;
                for (this[_0x2bf5e3(0x42d)][_0x2bf5e3(0x3d5)](_0x1ec3db); _0x307217 = this['handshakeParser']['next']();)
                    if (_0x307217[_0x2bf5e3(0x3c6)] !== HANDSHAKE_TYPE_NEW_SESSION_TICKET && _0x307217[_0x2bf5e3(0x3c6)] === HANDSHAKE_TYPE_KEY_UPDATE)
                        throw new Error('TLS\x201.3\x20KeyUpdate\x20is\x20not\x20supported\x20by\x20TLSClientMini');
            }
            const _0x543345 = this[_0x2bf5e3(0x67b)][_0x2bf5e3(0x416)][_0x2bf5e3(0x22c)]();
            try {
                const {
                    value: _0x298c7c,
                    done: _0x2a317a
                } = await this[_0x2bf5e3(0x44a)](_0x543345);
                if (_0x2a317a)
                    return null;
                this[_0x2bf5e3(0x255)]['feed'](_0x298c7c);
            } finally {
                _0x543345[_0x2bf5e3(0x1d5)]();
            }
        }
    }
    ['close']() {
        const _0x427299 = a0_0x43d2af;
        this[_0x427299(0x67b)]['close']();
    }
}
function stripIPv6Brackets(_0x3238aa = '') {
    const _0x49d9d4 = a0_0x43d2af, _0x366e43 = String(_0x3238aa || '')['trim']();
    return _0x366e43['startsWith']('[') && _0x366e43[_0x49d9d4(0x45b)](']') ? _0x366e43[_0x49d9d4(0x548)](0x1, -0x1) : _0x366e43;
}
function isIPHostname(_0x1283d4 = '') {
    const _0x290fa2 = a0_0x43d2af, _0x563e62 = stripIPv6Brackets(_0x1283d4), _0x3d7a70 = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;
    if (_0x3d7a70['test'](_0x563e62))
        return !![];
    if (!_0x563e62[_0x290fa2(0x68e)](':'))
        return ![];
    try {
        return new URL('http://[' + _0x563e62 + ']/'), !![];
    } catch (_0x2bd640) {
        return ![];
    }
}
const CONNECT_TIMEOUT_MS = 0x270f, TURN_STUN_MAGIC_COOKIE = new Uint8Array([
        0x21,
        0x12,
        0xa4,
        0x42
    ]), TURN_STUN_TYPE = {
        'ALLOCATE_REQUEST': 0x3,
        'ALLOCATE_SUCCESS': 0x103,
        'ALLOCATE_ERROR': 0x113,
        'CREATE_PERMISSION_REQUEST': 0x8,
        'CREATE_PERMISSION_SUCCESS': 0x108,
        'CONNECT_REQUEST': 0xa,
        'CONNECT_SUCCESS': 0x10a,
        'CONNECTION_BIND_REQUEST': 0xb,
        'CONNECTION_BIND_SUCCESS': 0x10b
    }, TURN_STUN_ATTR = {
        'USERNAME': 0x6,
        'MESSAGE_INTEGRITY': 0x8,
        'ERROR_CODE': 0x9,
        'XOR_PEER_ADDRESS': 0x12,
        'REALM': 0x14,
        'NONCE': 0x15,
        'REQUESTED_TRANSPORT': 0x19,
        'CONNECTION_ID': 0x2a
    };
async function withTimeout(_0xe5d251, _0x361821, _0x223be8) {
    const _0x4e08c4 = a0_0x43d2af;
    let _0x3c616f;
    try {
        return await Promise[_0x4e08c4(0x5f2)]([
            _0xe5d251,
            new Promise((_0x1bfc36, _0xc1b335) => {
                _0x3c616f = setTimeout(() => _0xc1b335(new Error(_0x223be8)), _0x361821);
            })
        ]);
    } finally {
        clearTimeout(_0x3c616f);
    }
}
function isIPv4(_0x5643a2) {
    const _0x11208f = a0_0x43d2af, _0x3461e9 = String(_0x5643a2 || '')[_0x11208f(0x492)]('.');
    return _0x3461e9[_0x11208f(0x292)] === 0x4 && _0x3461e9[_0x11208f(0x274)](_0x1ebea6 => /^\d{1,3}$/[_0x11208f(0x247)](_0x1ebea6) && Number(_0x1ebea6) >= 0x0 && Number(_0x1ebea6) <= 0xff);
}
function turnStunPadding(_0x23b8ba) {
    return -_0x23b8ba & 0x3;
}
function createTurnStunAttribute(_0x34bcaa, _0x1cd3f7) {
    const _0x242871 = a0_0x43d2af, _0x144ed8 = 数据转Uint8Array(_0x1cd3f7), _0x5d42c5 = new Uint8Array(0x4 + _0x144ed8[_0x242871(0x574)] + turnStunPadding(_0x144ed8[_0x242871(0x574)])), _0x23e3fd = new DataView(_0x5d42c5[_0x242871(0x565)]);
    return _0x23e3fd[_0x242871(0x69a)](0x0, _0x34bcaa), _0x23e3fd[_0x242871(0x69a)](0x2, _0x144ed8['byteLength']), _0x5d42c5[_0x242871(0x1f2)](_0x144ed8, 0x4), _0x5d42c5;
}
function createTurnStunMessage(_0x15cb60, _0x12fcf4, _0xaa1032) {
    const _0x3ba5c9 = a0_0x43d2af, _0x57bd00 = 拼接字节数据(..._0xaa1032), _0x536b62 = new Uint8Array(0x14), _0x29da75 = new DataView(_0x536b62[_0x3ba5c9(0x565)]);
    return _0x29da75[_0x3ba5c9(0x69a)](0x0, _0x15cb60), _0x29da75[_0x3ba5c9(0x69a)](0x2, _0x57bd00[_0x3ba5c9(0x574)]), _0x536b62[_0x3ba5c9(0x1f2)](TURN_STUN_MAGIC_COOKIE, 0x4), _0x536b62[_0x3ba5c9(0x1f2)](_0x12fcf4, 0x8), 拼接字节数据(_0x536b62, _0x57bd00);
}
function parseTurnErrorCode(_0x23d242) {
    return _0x23d242?.['byteLength'] >= 0x4 ? (_0x23d242[0x2] & 0x7) * 0x64 + _0x23d242[0x3] : 0x0;
}
function randomTurnTransactionId() {
    const _0x4e9acd = a0_0x43d2af;
    return crypto[_0x4e9acd(0x60a)](new Uint8Array(0xc));
}
async function addTurnMessageIntegrity(_0x55ffab, _0xc0db08) {
    const _0x4e73aa = a0_0x43d2af, _0xa1dc37 = new Uint8Array(_0x55ffab), _0x3ece7a = new DataView(_0xa1dc37['buffer']);
    _0x3ece7a[_0x4e73aa(0x69a)](0x2, _0x3ece7a[_0x4e73aa(0x4af)](0x2) + 0x18);
    const _0x5867a5 = await crypto[_0x4e73aa(0x5be)][_0x4e73aa(0x50e)](_0x4e73aa(0x1b9), _0xc0db08, {
            'name': _0x4e73aa(0x1b2),
            'hash': _0x4e73aa(0x301)
        }, ![], ['sign']), _0x21dfc9 = await crypto['subtle']['sign'](_0x4e73aa(0x1b2), _0x5867a5, _0xa1dc37);
    return 拼接字节数据(_0xa1dc37, createTurnStunAttribute(TURN_STUN_ATTR['MESSAGE_INTEGRITY'], new Uint8Array(_0x21dfc9)));
}
async function readTurnStunMessage(_0x44f868, _0xa6bb02 = null, _0x336cc5 = a0_0x43d2af(0x231)) {
    const _0x54f343 = a0_0x43d2af;
    let _0x227a7d = 有效数据长度(_0xa6bb02) ? 数据转Uint8Array(_0xa6bb02) : new Uint8Array(0x0);
    const _0x4e6d35 = async () => {
        const _0x59fd3d = a0_0x5eca, {
                done: _0x45e219,
                value: _0x160136
            } = await withTimeout(_0x44f868[_0x59fd3d(0x1e7)](), CONNECT_TIMEOUT_MS, _0x336cc5);
        if (_0x45e219)
            throw new Error(_0x59fd3d(0x641));
        if (_0x160136?.[_0x59fd3d(0x574)])
            _0x227a7d = 拼接字节数据(_0x227a7d, _0x160136);
    };
    while (_0x227a7d['byteLength'] < 0x14)
        await _0x4e6d35();
    const _0x2a6d2a = 0x14 + (_0x227a7d[0x2] << 0x8 | _0x227a7d[0x3]);
    if (_0x2a6d2a > 0x10013)
        throw new Error('TURN\x20response\x20is\x20too\x20large');
    while (_0x227a7d[_0x54f343(0x574)] < _0x2a6d2a)
        await _0x4e6d35();
    const _0x586b1a = _0x227a7d[_0x54f343(0x68d)](0x0, _0x2a6d2a);
    if (TURN_STUN_MAGIC_COOKIE[_0x54f343(0x507)]((_0x305941, _0x4a5bbf) => _0x586b1a[0x4 + _0x4a5bbf] !== _0x305941))
        throw new Error(_0x54f343(0x65a));
    const _0x1c3515 = new DataView(_0x586b1a['buffer'], _0x586b1a[_0x54f343(0x5ad)], _0x586b1a['byteLength']), _0x289f33 = {};
    for (let _0x4b8413 = 0x14; _0x4b8413 + 0x4 <= _0x2a6d2a;) {
        const _0x54ceb5 = _0x1c3515['getUint16'](_0x4b8413), _0x534e3e = _0x1c3515[_0x54f343(0x4af)](_0x4b8413 + 0x2);
        if (_0x4b8413 + 0x4 + _0x534e3e > _0x586b1a[_0x54f343(0x574)])
            break;
        _0x289f33[_0x54ceb5] = _0x586b1a[_0x54f343(0x548)](_0x4b8413 + 0x4, _0x4b8413 + 0x4 + _0x534e3e), _0x4b8413 += 0x4 + _0x534e3e + turnStunPadding(_0x534e3e);
    }
    return {
        'message': {
            'type': _0x1c3515[_0x54f343(0x4af)](0x0),
            'attributes': _0x289f33
        },
        'extraData': _0x227a7d[_0x54f343(0x574)] > _0x2a6d2a ? _0x227a7d['subarray'](_0x2a6d2a) : null
    };
}
async function writeTurnBytes(_0x44e755, _0x5cd4e0, _0x1c2c7c) {
    const _0x40a39a = a0_0x43d2af;
    await withTimeout(_0x44e755[_0x40a39a(0x668)](_0x5cd4e0), CONNECT_TIMEOUT_MS, _0x1c2c7c);
}
async function turnConnect(_0x4e742c, _0x4278c2, _0x196b50, _0x23540f) {
    const _0x20c1f1 = a0_0x43d2af;
    _0x4e742c = {
        ..._0x4e742c,
        'username': _0x4e742c[_0x20c1f1(0x563)] ?? null,
        'password': _0x4e742c[_0x20c1f1(0x2f6)] ?? null
    };
    const _0x2f98ae = stripIPv6Brackets(_0x4278c2);
    let _0x2c4381 = isIPv4(_0x2f98ae) ? _0x2f98ae : null;
    if (!_0x2c4381) {
        const _0x28b30b = await DoH查询(_0x2f98ae, 'A'), _0x46ae70 = _0x28b30b['find'](_0x2ca049 => _0x2ca049['type'] === 0x1 && isIPv4(_0x2ca049[_0x20c1f1(0x25c)]))?.[_0x20c1f1(0x25c)];
        _0x2c4381 = typeof _0x46ae70 === 'string' ? _0x46ae70 : null;
    }
    if (!_0x2c4381)
        throw new Error(_0x20c1f1(0x34a) + _0x4278c2 + _0x20c1f1(0x3e5));
    const _0x1dbea8 = stripIPv6Brackets(_0x4e742c[_0x20c1f1(0x5ac)]);
    let _0x58163f = null, _0x4c22a0 = null, _0xa00762 = null, _0x4a9abc = null, _0x4f6c08 = null, _0x5f8cb3 = null, _0x1b89c0 = ![];
    const _0x53025e = () => {
            const _0x22cd0b = _0x20c1f1;
            try {
                _0x58163f?.['close']?.();
            } catch (_0x3cb772) {
            }
            try {
                _0x4c22a0?.[_0x22cd0b(0x418)]?.();
            } catch (_0x3abf01) {
            }
        }, _0x102fee = () => {
            const _0x20f679 = _0x20c1f1;
            if (_0x1b89c0)
                return;
            _0x1b89c0 = !![];
            try {
                _0x5f8cb3?.[_0x20f679(0x1d5)]?.();
            } catch (_0x30954f) {
            }
        };
    try {
        _0x58163f = _0x23540f({
            'hostname': _0x1dbea8,
            'port': _0x4e742c['port']
        }), await withTimeout(_0x58163f[_0x20c1f1(0x272)], CONNECT_TIMEOUT_MS, 'TURN\x20server\x20connection\x20timed\x20out'), _0xa00762 = _0x58163f[_0x20c1f1(0x5ab)][_0x20c1f1(0x50b)](), _0x4a9abc = _0x58163f[_0x20c1f1(0x416)][_0x20c1f1(0x22c)]();
        const _0x3343b8 = new Uint8Array(0x8);
        _0x3343b8[0x1] = 0x1, new DataView(_0x3343b8['buffer'])['setUint16'](0x2, _0x196b50 ^ 0x2112), _0x2c4381[_0x20c1f1(0x492)]('.')[_0x20c1f1(0x460)]((_0x932f50, _0x1ac4fe) => {
            _0x3343b8[0x4 + _0x1ac4fe] = Number(_0x932f50) ^ TURN_STUN_MAGIC_COOKIE[_0x1ac4fe];
        });
        const _0x433a12 = createTurnStunAttribute(TURN_STUN_ATTR[_0x20c1f1(0x40c)], _0x3343b8), _0x468bd9 = new Uint8Array([
                0x6,
                0x0,
                0x0,
                0x0
            ]);
        await writeTurnBytes(_0xa00762, createTurnStunMessage(TURN_STUN_TYPE[_0x20c1f1(0x38d)], randomTurnTransactionId(), [createTurnStunAttribute(TURN_STUN_ATTR[_0x20c1f1(0x31b)], _0x468bd9)]), _0x20c1f1(0x2c5));
        let _0x325ddd = await readTurnStunMessage(_0x4a9abc, null, 'TURN\x20Allocate\x20response\x20timed\x20out'), _0x35cff4 = _0x325ddd[_0x20c1f1(0x385)], _0x27d7d5 = _0x325ddd['extraData'], _0x4ae38d = null, _0x37f236 = [];
        const _0xdd3fd2 = _0x201920 => _0x4ae38d ? addTurnMessageIntegrity(_0x201920, _0x4ae38d) : Promise['resolve'](_0x201920);
        if (_0x35cff4[_0x20c1f1(0x3c6)] === TURN_STUN_TYPE[_0x20c1f1(0x53d)] && _0x4e742c[_0x20c1f1(0x563)] !== null && _0x4e742c[_0x20c1f1(0x2f6)] !== null && parseTurnErrorCode(_0x35cff4[_0x20c1f1(0x205)][TURN_STUN_ATTR['ERROR_CODE']]) === 0x191) {
            const _0x494ae1 = _0x35cff4[_0x20c1f1(0x205)][TURN_STUN_ATTR[_0x20c1f1(0x4b6)]], _0x57a001 = _0x35cff4[_0x20c1f1(0x205)][TURN_STUN_ATTR[_0x20c1f1(0x4b4)]];
            if (!_0x494ae1 || !_0x57a001?.[_0x20c1f1(0x574)])
                throw new Error(_0x20c1f1(0x560));
            const _0x388364 = textDecoder[_0x20c1f1(0x49a)](_0x494ae1);
            _0x4ae38d = new Uint8Array(await crypto[_0x20c1f1(0x5be)][_0x20c1f1(0x39a)](_0x20c1f1(0x451), textEncoder['encode'](_0x4e742c[_0x20c1f1(0x563)] + ':' + _0x388364 + ':' + _0x4e742c[_0x20c1f1(0x2f6)]))), _0x37f236 = [
                createTurnStunAttribute(TURN_STUN_ATTR['USERNAME'], textEncoder[_0x20c1f1(0x564)](_0x4e742c['username'])),
                createTurnStunAttribute(TURN_STUN_ATTR[_0x20c1f1(0x4b6)], textEncoder[_0x20c1f1(0x564)](_0x388364)),
                createTurnStunAttribute(TURN_STUN_ATTR[_0x20c1f1(0x4b4)], _0x57a001)
            ];
            const _0x3233a9 = await addTurnMessageIntegrity(createTurnStunMessage(TURN_STUN_TYPE[_0x20c1f1(0x38d)], randomTurnTransactionId(), [
                    createTurnStunAttribute(TURN_STUN_ATTR[_0x20c1f1(0x31b)], _0x468bd9),
                    ..._0x37f236
                ]), _0x4ae38d), _0x48cfd9 = await Promise['all']([
                    _0xdd3fd2(createTurnStunMessage(TURN_STUN_TYPE[_0x20c1f1(0x354)], randomTurnTransactionId(), [
                        _0x433a12,
                        ..._0x37f236
                    ])),
                    _0xdd3fd2(createTurnStunMessage(TURN_STUN_TYPE['CONNECT_REQUEST'], randomTurnTransactionId(), [
                        _0x433a12,
                        ..._0x37f236
                    ]))
                ]);
            await writeTurnBytes(_0xa00762, 拼接字节数据(_0x3233a9, ..._0x48cfd9), _0x20c1f1(0x225)), _0x325ddd = await readTurnStunMessage(_0x4a9abc, _0x27d7d5, _0x20c1f1(0x1c2)), _0x35cff4 = _0x325ddd[_0x20c1f1(0x385)], _0x27d7d5 = _0x325ddd['extraData'];
        } else {
            if (_0x35cff4[_0x20c1f1(0x3c6)] === TURN_STUN_TYPE['ALLOCATE_SUCCESS']) {
                const _0x1c6bc1 = await Promise['all']([
                    _0xdd3fd2(createTurnStunMessage(TURN_STUN_TYPE[_0x20c1f1(0x354)], randomTurnTransactionId(), [
                        _0x433a12,
                        ..._0x37f236
                    ])),
                    _0xdd3fd2(createTurnStunMessage(TURN_STUN_TYPE[_0x20c1f1(0x425)], randomTurnTransactionId(), [
                        _0x433a12,
                        ..._0x37f236
                    ]))
                ]);
                if (_0x1c6bc1['length'])
                    await writeTurnBytes(_0xa00762, 拼接字节数据(..._0x1c6bc1), _0x20c1f1(0x34d));
            }
        }
        if (_0x35cff4['type'] !== TURN_STUN_TYPE[_0x20c1f1(0x323)]) {
            const _0x7a866e = parseTurnErrorCode(_0x35cff4[_0x20c1f1(0x205)][TURN_STUN_ATTR[_0x20c1f1(0x52a)]]);
            throw new Error(_0x7a866e ? 'TURN\x20Allocate\x20failed\x20with\x20' + _0x7a866e : _0x20c1f1(0x2c0));
        }
        _0x4c22a0 = _0x23540f({
            'hostname': _0x1dbea8,
            'port': _0x4e742c[_0x20c1f1(0x4bb)]
        }), _0x325ddd = await readTurnStunMessage(_0x4a9abc, _0x27d7d5, _0x20c1f1(0x50c)), _0x35cff4 = _0x325ddd[_0x20c1f1(0x385)], _0x27d7d5 = _0x325ddd['extraData'];
        if (_0x35cff4[_0x20c1f1(0x3c6)] !== TURN_STUN_TYPE[_0x20c1f1(0x3d0)])
            throw new Error(_0x20c1f1(0x2d5));
        _0x325ddd = await readTurnStunMessage(_0x4a9abc, _0x27d7d5, _0x20c1f1(0x54a)), _0x35cff4 = _0x325ddd[_0x20c1f1(0x385)], _0x27d7d5 = _0x325ddd[_0x20c1f1(0x62a)];
        if (_0x35cff4['type'] !== TURN_STUN_TYPE[_0x20c1f1(0x496)] || !_0x35cff4[_0x20c1f1(0x205)][TURN_STUN_ATTR['CONNECTION_ID']])
            throw new Error(_0x20c1f1(0x43b));
        await withTimeout(_0x4c22a0[_0x20c1f1(0x272)], CONNECT_TIMEOUT_MS, _0x20c1f1(0x5f4)), _0x4f6c08 = _0x4c22a0['writable'][_0x20c1f1(0x50b)](), _0x5f8cb3 = _0x4c22a0[_0x20c1f1(0x416)][_0x20c1f1(0x22c)](), await writeTurnBytes(_0x4f6c08, await _0xdd3fd2(createTurnStunMessage(TURN_STUN_TYPE[_0x20c1f1(0x214)], randomTurnTransactionId(), [
            createTurnStunAttribute(TURN_STUN_ATTR[_0x20c1f1(0x380)], _0x35cff4[_0x20c1f1(0x205)][TURN_STUN_ATTR[_0x20c1f1(0x380)]]),
            ..._0x37f236
        ])), _0x20c1f1(0x36a)), _0x325ddd = await readTurnStunMessage(_0x5f8cb3, null, _0x20c1f1(0x30d)), _0x35cff4 = _0x325ddd[_0x20c1f1(0x385)];
        const _0x53077e = _0x325ddd[_0x20c1f1(0x62a)];
        if (_0x35cff4[_0x20c1f1(0x3c6)] !== TURN_STUN_TYPE[_0x20c1f1(0x632)])
            throw new Error(_0x20c1f1(0x347));
        _0xa00762[_0x20c1f1(0x1d5)](), _0xa00762 = null, _0x4a9abc['releaseLock'](), _0x4a9abc = null, _0x4f6c08[_0x20c1f1(0x1d5)](), _0x4f6c08 = null;
        const _0xed6872 = new ReadableStream({
            'start'(_0x2fd3c4) {
                if (_0x53077e?.['byteLength'])
                    _0x2fd3c4['enqueue'](_0x53077e);
            },
            'pull'(_0x44173b) {
                const _0x22ed28 = _0x20c1f1;
                return _0x5f8cb3[_0x22ed28(0x1e7)]()[_0x22ed28(0x56e)](({
                    done: _0x161b69,
                    value: _0x4bc0d1
                }) => {
                    const _0x146ade = _0x22ed28;
                    if (_0x161b69)
                        _0x102fee(), _0x44173b[_0x146ade(0x418)]();
                    else {
                        if (_0x4bc0d1?.[_0x146ade(0x574)])
                            _0x44173b[_0x146ade(0x55f)](new Uint8Array(_0x4bc0d1));
                    }
                });
            },
            'cancel'() {
                const _0x420e21 = _0x20c1f1;
                try {
                    _0x5f8cb3?.[_0x420e21(0x65d)]?.();
                } catch (_0x52ad15) {
                }
                _0x102fee(), _0x53025e();
            }
        });
        return {
            'readable': _0xed6872,
            'writable': _0x4c22a0[_0x20c1f1(0x5ab)],
            'closed': _0x4c22a0[_0x20c1f1(0x3ea)],
            'close': _0x53025e
        };
    } catch (_0x373979) {
        try {
            _0xa00762?.[_0x20c1f1(0x1d5)]?.();
        } catch (_0x1230ef) {
        }
        try {
            _0x4a9abc?.[_0x20c1f1(0x1d5)]?.();
        } catch (_0xf18495) {
        }
        try {
            _0x4f6c08?.[_0x20c1f1(0x1d5)]?.();
        } catch (_0xadd3cd) {
        }
        _0x102fee(), _0x53025e();
        throw _0x373979;
    }
}
const SSTP_TCP_MSS = 0x578, SSTP_EMPTY_BYTES = new Uint8Array(0x0);
function readSstpUint16(_0x3f5a62, _0x50b08f = 0x0) {
    return _0x3f5a62[_0x50b08f] << 0x8 | _0x3f5a62[_0x50b08f + 0x1];
}
function readSstpUint32(_0x7f126a, _0x5c6688 = 0x0) {
    return (_0x7f126a[_0x5c6688] << 0x18 | _0x7f126a[_0x5c6688 + 0x1] << 0x10 | _0x7f126a[_0x5c6688 + 0x2] << 0x8 | _0x7f126a[_0x5c6688 + 0x3]) >>> 0x0;
}
function randomSstpUint16() {
    const _0x5ca73b = a0_0x43d2af;
    return readSstpUint16(crypto[_0x5ca73b(0x60a)](new Uint8Array(0x2)));
}
function internetChecksum(_0x483f20, _0xd4aedc, _0x1a452d) {
    let _0x35b47a = 0x0;
    for (let _0x398a56 = _0xd4aedc; _0x398a56 < _0xd4aedc + _0x1a452d - 0x1; _0x398a56 += 0x2)
        _0x35b47a += readSstpUint16(_0x483f20, _0x398a56);
    if (_0x1a452d & 0x1)
        _0x35b47a += _0x483f20[_0xd4aedc + _0x1a452d - 0x1] << 0x8;
    while (_0x35b47a >> 0x10)
        _0x35b47a = (_0x35b47a & 0xffff) + (_0x35b47a >> 0x10);
    return ~_0x35b47a & 0xffff;
}
async function sstpConnect(_0x27b24f, _0x1627b7, _0x498eb2, _0x3a7d37) {
    const _0x234acc = a0_0x43d2af;
    _0x27b24f = {
        ..._0x27b24f,
        'username': _0x27b24f[_0x234acc(0x563)] ?? null,
        'password': _0x27b24f['password'] ?? null
    };
    let _0x5c4b16 = SSTP_EMPTY_BYTES, _0x19d6d2 = 0x1, _0x1568cc = null, _0x4fa8ab = null, _0x359f5c = null, _0x34a734 = ![], _0xa32f49, _0x494026;
    const _0x49b19e = new Promise((_0x2fec9c, _0x42ea3a) => {
            _0xa32f49 = _0x2fec9c, _0x494026 = _0x42ea3a;
        }), _0x2c9b5b = (_0x1fd677, _0x29ce5f) => {
            if (_0x34a734)
                return;
            _0x34a734 = !![], _0x1fd677(_0x29ce5f);
        }, _0x376224 = () => {
            const _0xcb715e = _0x234acc;
            try {
                _0x4fa8ab?.[_0xcb715e(0x65d)]?.()['catch']?.(() => {
                });
            } catch (_0x18a52a) {
            }
            try {
                _0x4fa8ab?.['releaseLock']?.();
            } catch (_0x576cd0) {
            }
            try {
                _0x359f5c?.[_0xcb715e(0x418)]?.()[_0xcb715e(0x5ec)]?.(() => {
                });
            } catch (_0x528f69) {
            }
            try {
                _0x359f5c?.['releaseLock']?.();
            } catch (_0x41763e) {
            }
            try {
                _0x1568cc?.[_0xcb715e(0x418)]?.();
            } catch (_0x2ef66e) {
            }
            _0x2c9b5b(_0xa32f49);
        }, _0xd6fe0e = async () => {
            const _0x34ba09 = _0x234acc, {
                    value: _0x5542d7,
                    done: _0x624bf9
                } = await _0x4fa8ab[_0x34ba09(0x1e7)]();
            if (_0x624bf9 || !_0x5542d7)
                throw new Error(_0x34ba09(0x65f));
            return 数据转Uint8Array(_0x5542d7);
        }, _0xce2362 = async _0x186814 => {
            const _0x58e42d = _0x234acc;
            while (_0x5c4b16[_0x58e42d(0x574)] < _0x186814) {
                const _0x155ae1 = await _0xd6fe0e();
                _0x5c4b16 = _0x5c4b16['byteLength'] ? 拼接字节数据(_0x5c4b16, _0x155ae1) : _0x155ae1;
            }
            const _0x50a7a6 = _0x5c4b16[_0x58e42d(0x68d)](0x0, _0x186814);
            return _0x5c4b16 = _0x5c4b16[_0x58e42d(0x68d)](_0x186814), _0x50a7a6;
        }, _0x1f67de = async () => {
            const _0x5e786c = _0x234acc;
            for (;;) {
                const _0x51ee76 = _0x5c4b16[_0x5e786c(0x413)](0xa);
                if (_0x51ee76 >= 0x0) {
                    const _0x1b387c = textDecoder[_0x5e786c(0x49a)](_0x5c4b16['subarray'](0x0, _0x51ee76));
                    return _0x5c4b16 = _0x5c4b16['subarray'](_0x51ee76 + 0x1), _0x1b387c['replace'](/\r$/, '');
                }
                const _0x146008 = await _0xd6fe0e();
                _0x5c4b16 = _0x5c4b16[_0x5e786c(0x574)] ? 拼接字节数据(_0x5c4b16, _0x146008) : _0x146008;
            }
        }, _0x5b176e = async (_0x1fbff6 = CONNECT_TIMEOUT_MS) => {
            const _0x2b7d95 = _0x234acc, _0x2cbef2 = await withTimeout(_0xce2362(0x4), _0x1fbff6, _0x2b7d95(0x4df)), _0x44ed15 = readSstpUint16(_0x2cbef2, 0x2) & 0xfff;
            if (_0x44ed15 < 0x4)
                throw new Error(_0x2b7d95(0x38f));
            return {
                'isControl': (_0x2cbef2[0x1] & 0x1) !== 0x0,
                'body': _0x44ed15 > 0x4 ? await withTimeout(_0xce2362(_0x44ed15 - 0x4), _0x1fbff6, _0x2b7d95(0x2f3)) : SSTP_EMPTY_BYTES
            };
        }, _0x4976a7 = _0x221444 => {
            const _0x2ce6f8 = _0x234acc, _0x3d1aa4 = 0x6 + _0x221444[_0x2ce6f8(0x574)], _0x556f39 = new Uint8Array(_0x3d1aa4);
            return _0x556f39['set']([
                0x10,
                0x0,
                _0x3d1aa4 >> 0x8 & 0xf | 0x80,
                _0x3d1aa4 & 0xff,
                0xff,
                0x3
            ]), _0x556f39[_0x2ce6f8(0x1f2)](_0x221444, 0x6), _0x556f39;
        }, _0x51f7b1 = (_0xd2061b, _0x5b21b4, _0x1611b9, _0x2c14f5 = []) => {
            const _0x4bec5d = _0x234acc, _0x48e3db = _0x2c14f5[_0x4bec5d(0x394)]((_0x56566a, _0x141fc5) => _0x56566a + 0x2 + _0x141fc5[_0x4bec5d(0x25c)][_0x4bec5d(0x574)], 0x0), _0x369d02 = new Uint8Array(0x6 + _0x48e3db), _0x20b39a = new DataView(_0x369d02[_0x4bec5d(0x565)]);
            return _0x20b39a[_0x4bec5d(0x69a)](0x0, _0xd2061b), _0x369d02[0x2] = _0x5b21b4, _0x369d02[0x3] = _0x1611b9, _0x20b39a[_0x4bec5d(0x69a)](0x4, 0x4 + _0x48e3db), _0x2c14f5[_0x4bec5d(0x394)]((_0x2962c7, _0x18bcee) => {
                const _0x183ec3 = _0x4bec5d;
                return _0x369d02[_0x2962c7] = _0x18bcee[_0x183ec3(0x3c6)], _0x369d02[_0x2962c7 + 0x1] = 0x2 + _0x18bcee[_0x183ec3(0x25c)][_0x183ec3(0x574)], _0x369d02[_0x183ec3(0x1f2)](_0x18bcee[_0x183ec3(0x25c)], _0x2962c7 + 0x2), _0x2962c7 + 0x2 + _0x18bcee[_0x183ec3(0x25c)][_0x183ec3(0x574)];
            }, 0x6), _0x369d02;
        }, _0x5b75d6 = _0x70bbe4 => {
            const _0x137489 = _0x234acc, _0x750909 = _0x70bbe4[_0x137489(0x574)] >= 0x2 && _0x70bbe4[0x0] === 0xff && _0x70bbe4[0x1] === 0x3 ? 0x2 : 0x0;
            if (_0x70bbe4[_0x137489(0x574)] - _0x750909 < 0x4)
                return null;
            const _0x4bd21e = readSstpUint16(_0x70bbe4, _0x750909);
            if (_0x4bd21e === 0x21)
                return {
                    'protocol': _0x4bd21e,
                    'ipPacket': _0x70bbe4[_0x137489(0x68d)](_0x750909 + 0x2)
                };
            if (_0x70bbe4[_0x137489(0x574)] - _0x750909 < 0x6)
                return null;
            return {
                'protocol': _0x4bd21e,
                'code': _0x70bbe4[_0x750909 + 0x2],
                'id': _0x70bbe4[_0x750909 + 0x3],
                'payload': _0x70bbe4[_0x137489(0x68d)](_0x750909 + 0x6),
                'rawPacket': _0x70bbe4[_0x137489(0x68d)](_0x750909)
            };
        }, _0x1a9af5 = _0x37b4d6 => {
            const _0x50933a = _0x234acc, _0x2e7682 = [];
            for (let _0x3b95a5 = 0x0; _0x3b95a5 + 0x2 <= _0x37b4d6[_0x50933a(0x574)];) {
                const _0xf54c3d = _0x37b4d6[_0x3b95a5], _0x4d89ad = _0x37b4d6[_0x3b95a5 + 0x1];
                if (_0x4d89ad < 0x2 || _0x3b95a5 + _0x4d89ad > _0x37b4d6[_0x50933a(0x574)])
                    break;
                _0x2e7682['push']({
                    'type': _0xf54c3d,
                    'data': _0x37b4d6[_0x50933a(0x68d)](_0x3b95a5 + 0x2, _0x3b95a5 + _0x4d89ad)
                }), _0x3b95a5 += _0x4d89ad;
            }
            return _0x2e7682;
        };
    try {
        const _0x25c8a6 = stripIPv6Brackets(_0x27b24f[_0x234acc(0x5ac)]), _0x2d33d9 = _0x27b24f[_0x234acc(0x4bb)];
        _0x1568cc = _0x3a7d37({
            'hostname': _0x25c8a6,
            'port': _0x2d33d9
        }, {
            'secureTransport': 'on',
            'allowHalfOpen': ![]
        }), await withTimeout(_0x1568cc['opened'], CONNECT_TIMEOUT_MS, _0x234acc(0x659)), _0x4fa8ab = _0x1568cc[_0x234acc(0x416)]['getReader'](), _0x359f5c = _0x1568cc[_0x234acc(0x5ab)]['getWriter']();
        const _0x5747a4 = _0x25c8a6['includes'](':') ? '[' + _0x25c8a6 + ']' : _0x25c8a6, _0x55f440 = textEncoder['encode'](_0x234acc(0x2da) + ('Host:\x20' + (Number(_0x2d33d9) === 0x1bb ? _0x5747a4 : _0x5747a4 + ':' + _0x2d33d9) + '\x0d\x0a') + 'Content-Length:\x2018446744073709551615\x0d\x0a' + (_0x234acc(0x4be) + crypto[_0x234acc(0x295)]() + _0x234acc(0x687))), _0x4bf291 = new Uint8Array(0x2);
        new DataView(_0x4bf291[_0x234acc(0x565)])['setUint16'](0x0, 0x1);
        const _0x301bca = new Uint8Array(0x2);
        new DataView(_0x301bca[_0x234acc(0x565)])['setUint16'](0x0, 0x5dc);
        const _0x5aabd6 = new Uint8Array(0xc + _0x4bf291[_0x234acc(0x574)]), _0x4169d3 = new DataView(_0x5aabd6['buffer']);
        _0x5aabd6[0x0] = 0x10, _0x5aabd6[0x1] = 0x1, _0x4169d3[_0x234acc(0x69a)](0x2, _0x5aabd6[_0x234acc(0x574)] | 0x8000), _0x4169d3[_0x234acc(0x69a)](0x4, 0x1), _0x4169d3[_0x234acc(0x69a)](0x6, 0x1), _0x5aabd6[0x9] = 0x1, _0x4169d3[_0x234acc(0x69a)](0xa, 0x4 + _0x4bf291[_0x234acc(0x574)]), _0x5aabd6[_0x234acc(0x1f2)](_0x4bf291, 0xc), await withTimeout(_0x359f5c['write'](拼接字节数据(_0x55f440, _0x5aabd6, _0x4976a7(_0x51f7b1(0xc021, 0x1, _0x19d6d2++, [{
                'type': 0x1,
                'data': _0x301bca
            }])))), CONNECT_TIMEOUT_MS, _0x234acc(0x2a1));
        const _0x12b396 = await withTimeout(_0x1f67de(), CONNECT_TIMEOUT_MS, 'SSTP\x20HTTP\x20handshake\x20timed\x20out');
        for (;;) {
            const _0x5a53c8 = await withTimeout(_0x1f67de(), CONNECT_TIMEOUT_MS, _0x234acc(0x3f6));
            if (_0x5a53c8 === '')
                break;
        }
        if (!/HTTP\/\d(?:\.\d)?\s+2\d\d/i['test'](_0x12b396))
            throw new Error(_0x234acc(0x2ec) + (_0x12b396 || 'invalid\x20status'));
        let _0x289de0 = ![], _0x4091fb = ![], _0x1e4065 = ![], _0x578ffc = ![], _0x660550 = ![], _0x5cf81b = ![], _0x2dea5d = ![], _0xfaa30d = null;
        const _0x3f9955 = async () => {
                const _0x1f2c62 = _0x234acc;
                if (!_0x289de0 || !_0x4091fb || !_0x1e4065 || _0x578ffc)
                    return;
                if (_0x27b24f[_0x1f2c62(0x563)] === null || _0x27b24f[_0x1f2c62(0x2f6)] === null)
                    throw new Error(_0x1f2c62(0x4b1));
                const _0x28989c = textEncoder[_0x1f2c62(0x564)](_0x27b24f[_0x1f2c62(0x563)]), _0x463f50 = textEncoder['encode'](_0x27b24f['password']);
                if (_0x28989c[_0x1f2c62(0x574)] > 0xff || _0x463f50['byteLength'] > 0xff)
                    throw new Error(_0x1f2c62(0x56f));
                const _0x4136cc = 0x6 + _0x28989c[_0x1f2c62(0x574)] + _0x463f50[_0x1f2c62(0x574)], _0x2ec42c = new Uint8Array(0x2 + _0x4136cc), _0x5718a3 = new DataView(_0x2ec42c['buffer']);
                _0x5718a3['setUint16'](0x0, 0xc023), _0x2ec42c[0x2] = 0x1, _0x2ec42c[0x3] = _0x19d6d2++, _0x5718a3['setUint16'](0x4, _0x4136cc), _0x2ec42c[0x6] = _0x28989c[_0x1f2c62(0x574)], _0x2ec42c[_0x1f2c62(0x1f2)](_0x28989c, 0x7), _0x2ec42c[0x7 + _0x28989c[_0x1f2c62(0x574)]] = _0x463f50[_0x1f2c62(0x574)], _0x2ec42c[_0x1f2c62(0x1f2)](_0x463f50, 0x8 + _0x28989c[_0x1f2c62(0x574)]), await withTimeout(_0x359f5c['write'](_0x4976a7(_0x2ec42c)), CONNECT_TIMEOUT_MS, 'SSTP\x20PAP\x20authentication\x20request\x20timed\x20out'), _0x578ffc = !![];
            }, _0x44a915 = async () => {
                const _0x49bd9c = _0x234acc;
                if (!_0x289de0 || !_0x4091fb || _0x5cf81b || _0x1e4065 && !_0x660550)
                    return;
                await withTimeout(_0x359f5c[_0x49bd9c(0x668)](_0x4976a7(_0x51f7b1(0x8021, 0x1, _0x19d6d2++, [{
                        'type': 0x3,
                        'data': new Uint8Array(0x4)
                    }]))), CONNECT_TIMEOUT_MS, 'SSTP\x20IPCP\x20request\x20timed\x20out'), _0x5cf81b = !![];
            };
        for (let _0x7ac1b2 = 0x0; _0x7ac1b2 < 0x32 && !_0x2dea5d; _0x7ac1b2++) {
            const _0x2e766c = await _0x5b176e(CONNECT_TIMEOUT_MS);
            if (_0x2e766c[_0x234acc(0x488)])
                continue;
            const _0x3b814a = _0x5b75d6(_0x2e766c['body']);
            if (!_0x3b814a)
                continue;
            if (_0x3b814a['protocol'] === 0xc021) {
                if (_0x3b814a[_0x234acc(0x57f)] === 0x1) {
                    const _0x3c3297 = _0x1a9af5(_0x3b814a[_0x234acc(0x2f2)])[_0x234acc(0x204)](_0x27d899 => _0x27d899[_0x234acc(0x3c6)] === 0x3);
                    if (_0x3c3297?.['data']?.[_0x234acc(0x574)] >= 0x2) {
                        const _0xaf2448 = readSstpUint16(_0x3c3297[_0x234acc(0x25c)]);
                        if (_0xaf2448 !== 0xc023)
                            throw new Error(_0x234acc(0x48a) + _0xaf2448['toString'](0x10));
                        _0x1e4065 = !![];
                    }
                    const _0x183e29 = new Uint8Array(_0x3b814a['rawPacket']);
                    _0x183e29[0x2] = 0x2, await withTimeout(_0x359f5c[_0x234acc(0x668)](_0x4976a7(_0x183e29)), CONNECT_TIMEOUT_MS, _0x234acc(0x35e)), _0x4091fb = !![], await _0x3f9955(), await _0x44a915();
                } else
                    _0x3b814a[_0x234acc(0x57f)] === 0x2 && (_0x289de0 = !![], await _0x3f9955(), await _0x44a915());
                continue;
            }
            if (_0x3b814a[_0x234acc(0x4a7)] === 0xc023) {
                if (_0x3b814a[_0x234acc(0x57f)] === 0x2)
                    _0x660550 = !![], await _0x44a915();
                else {
                    if (_0x3b814a[_0x234acc(0x57f)] === 0x3)
                        throw new Error(_0x234acc(0x2e8));
                }
                continue;
            }
            if (_0x3b814a[_0x234acc(0x4a7)] === 0x8021) {
                if (_0x3b814a[_0x234acc(0x57f)] === 0x1) {
                    const _0x17a492 = new Uint8Array(_0x3b814a[_0x234acc(0x269)]);
                    _0x17a492[0x2] = 0x2, await withTimeout(_0x359f5c[_0x234acc(0x668)](_0x4976a7(_0x17a492)), CONNECT_TIMEOUT_MS, _0x234acc(0x1c7)), await _0x44a915();
                } else {
                    if (_0x3b814a[_0x234acc(0x57f)] === 0x3) {
                        const _0x49e4e8 = _0x1a9af5(_0x3b814a[_0x234acc(0x2f2)])[_0x234acc(0x204)](_0x40f2e5 => _0x40f2e5[_0x234acc(0x3c6)] === 0x3);
                        _0x49e4e8?.[_0x234acc(0x25c)]?.[_0x234acc(0x574)] === 0x4 && (_0xfaa30d = [..._0x49e4e8[_0x234acc(0x25c)]][_0x234acc(0x4f1)]('.'), await withTimeout(_0x359f5c[_0x234acc(0x668)](_0x4976a7(_0x51f7b1(0x8021, 0x1, _0x19d6d2++, [{
                                'type': 0x3,
                                'data': _0x49e4e8[_0x234acc(0x25c)]
                            }]))), CONNECT_TIMEOUT_MS, _0x234acc(0x5d5)), _0x5cf81b = !![]);
                    } else {
                        if (_0x3b814a[_0x234acc(0x57f)] === 0x2) {
                            const _0xc87f25 = _0x1a9af5(_0x3b814a['payload'])[_0x234acc(0x204)](_0x129375 => _0x129375[_0x234acc(0x3c6)] === 0x3);
                            if (_0xc87f25?.[_0x234acc(0x25c)]?.[_0x234acc(0x574)] === 0x4)
                                _0xfaa30d = [..._0xc87f25['data']][_0x234acc(0x4f1)]('.');
                            _0x2dea5d = !![];
                        }
                    }
                }
            }
        }
        if (!_0xfaa30d)
            throw new Error(_0x234acc(0x1f5));
        const _0x19e23f = stripIPv6Brackets(_0x1627b7);
        let _0x1a6486 = isIPv4(_0x19e23f) ? _0x19e23f : null;
        if (!_0x1a6486) {
            const _0x37c948 = await DoH查询(_0x19e23f, 'A'), _0x258c3d = _0x37c948['find'](_0x35e8d0 => _0x35e8d0[_0x234acc(0x3c6)] === 0x1 && isIPv4(_0x35e8d0[_0x234acc(0x25c)]))?.[_0x234acc(0x25c)];
            _0x1a6486 = typeof _0x258c3d === _0x234acc(0x615) ? _0x258c3d : null;
        }
        if (!_0x1a6486)
            throw new Error(_0x234acc(0x34a) + _0x1627b7 + '\x20to\x20an\x20IPv4\x20address\x20for\x20SSTP');
        const _0x53aad0 = 0x2710 + randomSstpUint16() % 0xc350, _0x50fed6 = new Uint8Array(String(_0xfaa30d || '')['split']('.')['map'](Number)), _0x21009e = new Uint8Array(String(_0x1a6486 || '')['split']('.')[_0x234acc(0x2a7)](Number));
        let _0x46954c = readSstpUint32(crypto[_0x234acc(0x60a)](new Uint8Array(0x4))), _0x55e466 = 0x0;
        const _0x489287 = new Uint8Array(0x14);
        _0x489287[_0x234acc(0x1f2)]([
            0x45,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x40,
            0x0,
            0x40,
            0x6
        ]), _0x489287[_0x234acc(0x1f2)](_0x50fed6, 0xc), _0x489287[_0x234acc(0x1f2)](_0x21009e, 0x10);
        const _0x21b59d = new Uint8Array(0x598);
        _0x21b59d['set'](_0x50fed6), _0x21b59d[_0x234acc(0x1f2)](_0x21009e, 0x4), _0x21b59d[0x9] = 0x6;
        const _0x1cb477 = (_0x1f58d9, _0x6c60ba = SSTP_EMPTY_BYTES) => {
                const _0x5119b9 = _0x234acc, _0x4593a1 = 数据转Uint8Array(_0x6c60ba), _0x4cee20 = _0x4593a1[_0x5119b9(0x574)], _0x3cda86 = 0x14 + _0x4cee20, _0xb3f262 = 0x14 + _0x3cda86, _0x1631e0 = 0x8 + _0xb3f262, _0x713203 = new Uint8Array(_0x1631e0), _0x2fcdf5 = new DataView(_0x713203[_0x5119b9(0x565)]);
                _0x713203[_0x5119b9(0x1f2)]([
                    0x10,
                    0x0,
                    _0x1631e0 >> 0x8 & 0xf | 0x80,
                    _0x1631e0 & 0xff,
                    0xff,
                    0x3,
                    0x0,
                    0x21
                ]), _0x713203[_0x5119b9(0x1f2)](_0x489287, 0x8), _0x2fcdf5['setUint16'](0xa, _0xb3f262), _0x2fcdf5[_0x5119b9(0x69a)](0xc, randomSstpUint16()), _0x2fcdf5[_0x5119b9(0x69a)](0x12, internetChecksum(_0x713203, 0x8, 0x14)), _0x2fcdf5[_0x5119b9(0x69a)](0x1c, _0x53aad0), _0x2fcdf5[_0x5119b9(0x69a)](0x1e, _0x498eb2), _0x2fcdf5[_0x5119b9(0x483)](0x20, _0x46954c), _0x2fcdf5[_0x5119b9(0x483)](0x24, _0x55e466), _0x713203[0x28] = 0x50, _0x713203[0x29] = _0x1f58d9, _0x2fcdf5[_0x5119b9(0x69a)](0x2a, 0xffff);
                if (_0x4cee20)
                    _0x713203[_0x5119b9(0x1f2)](_0x4593a1, 0x30);
                return _0x21b59d[0xa] = _0x3cda86 >> 0x8, _0x21b59d[0xb] = _0x3cda86 & 0xff, _0x21b59d[_0x5119b9(0x1f2)](_0x713203[_0x5119b9(0x68d)](0x1c, 0x1c + _0x3cda86), 0xc), _0x2fcdf5[_0x5119b9(0x69a)](0x2c, internetChecksum(_0x21b59d, 0x0, 0xc + _0x3cda86)), _0x713203;
            }, _0x36dad8 = _0x50094f => {
                const _0x4a255b = _0x234acc;
                if (_0x50094f['byteLength'] < 0x28 || _0x50094f[0x9] !== 0x6)
                    return null;
                const _0x5334f6 = (_0x50094f[0x0] & 0xf) * 0x4;
                if (_0x50094f[_0x4a255b(0x574)] < _0x5334f6 + 0x14)
                    return null;
                if (readSstpUint16(_0x50094f, _0x5334f6) !== _0x498eb2)
                    return null;
                if (readSstpUint16(_0x50094f, _0x5334f6 + 0x2) !== _0x53aad0)
                    return null;
                return {
                    'flags': _0x50094f[_0x5334f6 + 0xd],
                    'sequence': readSstpUint32(_0x50094f, _0x5334f6 + 0x4),
                    'payloadOffset': _0x5334f6 + (_0x50094f[_0x5334f6 + 0xc] >> 0x4 & 0xf) * 0x4
                };
            };
        await withTimeout(_0x359f5c[_0x234acc(0x668)](_0x1cb477(0x2)), CONNECT_TIMEOUT_MS, _0x234acc(0x2fc)), _0x46954c = _0x46954c + 0x1 >>> 0x0;
        let _0xf577e7 = ![];
        for (let _0x5c4f76 = 0x0; _0x5c4f76 < 0x1e; _0x5c4f76++) {
            const _0x7a50e5 = await _0x5b176e(CONNECT_TIMEOUT_MS);
            if (_0x7a50e5[_0x234acc(0x488)])
                continue;
            const _0x4c0320 = _0x5b75d6(_0x7a50e5[_0x234acc(0x3ff)]);
            if (!_0x4c0320 || _0x4c0320[_0x234acc(0x4a7)] !== 0x21)
                continue;
            const _0x212ed5 = _0x36dad8(_0x4c0320[_0x234acc(0x377)]);
            if (!_0x212ed5 || (_0x212ed5[_0x234acc(0x54f)] & 0x12) !== 0x12)
                continue;
            _0x55e466 = _0x212ed5['sequence'] + 0x1 >>> 0x0, await withTimeout(_0x359f5c[_0x234acc(0x668)](_0x1cb477(0x10)), CONNECT_TIMEOUT_MS, _0x234acc(0x582)), _0xf577e7 = !![];
            break;
        }
        if (!_0xf577e7)
            throw new Error(_0x234acc(0x3b4));
        let _0x4ee378 = null;
        const _0x30f079 = new ReadableStream({
            'start'(_0x465411) {
                _0x4ee378 = _0x465411;
            },
            'cancel'() {
                _0x376224();
            }
        });
        ((async () => {
            const _0x270398 = _0x234acc;
            try {
                let _0x4be833 = [], _0xee93c1 = 0x0;
                const _0x1a8b7a = () => {
                    const _0x5adb1f = a0_0x5eca;
                    if (!_0xee93c1)
                        return;
                    if (!_0x4ee378)
                        throw new Error(_0x5adb1f(0x2ff));
                    _0x4ee378[_0x5adb1f(0x55f)](_0x4be833[_0x5adb1f(0x292)] === 0x1 ? _0x4be833[0x0] : 拼接字节数据(..._0x4be833)), _0x4be833 = [], _0xee93c1 = 0x0, _0x359f5c[_0x5adb1f(0x668)](_0x1cb477(0x10))[_0x5adb1f(0x5ec)](() => {
                    });
                };
                for (;;) {
                    const _0x1ec9e2 = await _0x5b176e(0xea60);
                    if (_0x1ec9e2[_0x270398(0x488)])
                        continue;
                    const _0x96b84f = _0x5b75d6(_0x1ec9e2[_0x270398(0x3ff)]);
                    if (!_0x96b84f || _0x96b84f[_0x270398(0x4a7)] !== 0x21)
                        continue;
                    const _0x437f9a = _0x36dad8(_0x96b84f[_0x270398(0x377)]);
                    if (!_0x437f9a)
                        continue;
                    if (_0x437f9a[_0x270398(0x37e)] < _0x96b84f['ipPacket'][_0x270398(0x574)]) {
                        const _0x3338fb = _0x96b84f[_0x270398(0x377)]['subarray'](_0x437f9a[_0x270398(0x37e)]);
                        _0x3338fb[_0x270398(0x574)] && (_0x55e466 = _0x437f9a[_0x270398(0x684)] + _0x3338fb[_0x270398(0x574)] >>> 0x0, _0x4be833[_0x270398(0x4a8)](new Uint8Array(_0x3338fb)), _0xee93c1 += _0x3338fb[_0x270398(0x574)]);
                    }
                    if (_0x437f9a[_0x270398(0x54f)] & 0x1) {
                        _0x1a8b7a(), _0x55e466 = _0x55e466 + 0x1 >>> 0x0, _0x359f5c[_0x270398(0x668)](_0x1cb477(0x11))[_0x270398(0x5ec)](() => {
                        });
                        const _0x341d6d = _0x4ee378;
                        if (_0x341d6d)
                            try {
                                _0x341d6d[_0x270398(0x418)]();
                            } catch (_0x386873) {
                            }
                        _0x376224();
                        return;
                    }
                    if (_0x5c4b16[_0x270398(0x574)] < 0x4 || _0xee93c1 >= 0x8000)
                        _0x1a8b7a();
                }
            } catch (_0x4d33f8) {
                const _0x2bcd61 = _0x4ee378;
                if (_0x2bcd61)
                    try {
                        _0x2bcd61[_0x270398(0x35f)](_0x4d33f8);
                    } catch (_0x56a78a) {
                    }
                _0x2c9b5b(_0x494026, _0x4d33f8);
                try {
                    _0x1568cc?.[_0x270398(0x418)]?.();
                } catch (_0x4d918a) {
                }
            }
        })());
        const _0x79b830 = new WritableStream({
            async 'write'(_0x539949) {
                const _0x298a98 = _0x234acc, _0x463b5a = 数据转Uint8Array(_0x539949);
                if (!_0x463b5a[_0x298a98(0x574)])
                    return;
                if (_0x463b5a[_0x298a98(0x574)] <= SSTP_TCP_MSS) {
                    await _0x359f5c['write'](_0x1cb477(0x18, _0x463b5a)), _0x46954c = _0x46954c + _0x463b5a[_0x298a98(0x574)] >>> 0x0;
                    return;
                }
                const _0x14b49a = [];
                for (let _0x35e686 = 0x0; _0x35e686 < _0x463b5a['byteLength']; _0x35e686 += SSTP_TCP_MSS) {
                    const _0x5d92f4 = _0x463b5a[_0x298a98(0x68d)](_0x35e686, Math[_0x298a98(0x572)](_0x35e686 + SSTP_TCP_MSS, _0x463b5a[_0x298a98(0x574)]));
                    _0x14b49a[_0x298a98(0x4a8)](_0x1cb477(0x18, _0x5d92f4)), _0x46954c = _0x46954c + _0x5d92f4[_0x298a98(0x574)] >>> 0x0;
                }
                await _0x359f5c[_0x298a98(0x668)](拼接字节数据(..._0x14b49a));
            },
            'close'() {
                const _0x27af8d = _0x234acc;
                return _0x359f5c[_0x27af8d(0x668)](_0x1cb477(0x11))[_0x27af8d(0x5ec)](() => {
                });
            },
            'abort'(_0x51202f) {
                _0x376224();
                if (_0x51202f)
                    _0x2c9b5b(_0x494026, _0x51202f);
            }
        });
        return {
            'readable': _0x30f079,
            'writable': _0x79b830,
            'closed': _0x49b19e,
            'close': _0x376224
        };
    } catch (_0x4658f9) {
        _0x376224();
        throw _0x4658f9;
    }
}
function base64SecretEncode(_0x323e8b, _0x343cb7) {
    const _0x22dfee = a0_0x43d2af, _0x319db7 = new TextEncoder(), _0x3dc64d = _0x319db7[_0x22dfee(0x564)](_0x323e8b), _0x27022a = _0x319db7[_0x22dfee(0x564)](_0x343cb7), _0x30e2b7 = new Uint8Array(_0x3dc64d['length']);
    for (let _0x266607 = 0x0; _0x266607 < _0x3dc64d[_0x22dfee(0x292)]; _0x266607++) {
        _0x30e2b7[_0x266607] = _0x3dc64d[_0x266607] ^ _0x27022a[_0x266607 % _0x27022a[_0x22dfee(0x292)]];
    }
    let _0x327052 = '';
    for (let _0x43cc78 = 0x0; _0x43cc78 < _0x30e2b7[_0x22dfee(0x292)]; _0x43cc78++) {
        _0x327052 += String[_0x22dfee(0x1d1)](_0x30e2b7[_0x43cc78]);
    }
    return btoa(_0x327052);
}
function base64SecretDecode(_0x4899f5, _0x4f2a5e) {
    const _0x183f2a = a0_0x43d2af, _0x132b33 = atob(_0x4899f5), _0xa06620 = new Uint8Array(_0x132b33[_0x183f2a(0x292)]);
    for (let _0x5a109f = 0x0; _0x5a109f < _0x132b33[_0x183f2a(0x292)]; _0x5a109f++) {
        _0xa06620[_0x5a109f] = _0x132b33['charCodeAt'](_0x5a109f);
    }
    const _0x526015 = new TextEncoder(), _0x4feee4 = _0x526015[_0x183f2a(0x564)](_0x4f2a5e), _0x5d4719 = new Uint8Array(_0xa06620[_0x183f2a(0x292)]);
    for (let _0xb4e083 = 0x0; _0xb4e083 < _0xa06620['length']; _0xb4e083++) {
        _0x5d4719[_0xb4e083] = _0xa06620[_0xb4e083] ^ _0x4feee4[_0xb4e083 % _0x4feee4[_0x183f2a(0x292)]];
    }
    const _0x5bebed = new TextDecoder();
    return _0x5bebed[_0x183f2a(0x49a)](_0x5d4719);
}
function 获取传输协议配置(_0x2bca63 = {}) {
    const _0x51f2de = a0_0x43d2af, _0x1367e4 = _0x2bca63['传输协议'] === 'grpc', [_0x40c010, _0x989518] = 获取本机标识(_0x2bca63['UUID']), _0x2a1e74 = {
            'xPaddingObfsMode': !![],
            'xPaddingMethod': _0x51f2de(0x45e),
            'xPaddingPlacement': _0x51f2de(0x46e),
            'xPaddingHeader': _0x40c010,
            'xPaddingKey': _0x989518
        };
    return {
        'type': _0x1367e4 ? _0x2bca63['gRPC模式'] === _0x51f2de(0x273) ? _0x51f2de(0x3d9) : _0x51f2de(0x388) : _0x2bca63[_0x51f2de(0x5c1)] === _0x51f2de(0x1db) ? _0x51f2de(0x3fc) + encodeURIComponent(JSON['stringify'](_0x2a1e74)) : 'ws',
        '路径字段名': _0x1367e4 ? _0x51f2de(0x646) : _0x51f2de(0x4d4),
        '域名字段名': _0x1367e4 ? _0x51f2de(0x2fd) : _0x51f2de(0x606)
    };
}
function 获取传输路径参数值(_0xe10c36 = {}, _0x218aec = '/', _0x452200 = ![]) {
    const _0xf56d8 = a0_0x43d2af, _0x2be72d = _0x452200 ? '/' : _0xe10c36[_0xf56d8(0x577)] ? 随机路径(_0x218aec) : _0x218aec;
    if (_0xe10c36[_0xf56d8(0x5c1)] !== _0xf56d8(0x232))
        return _0x2be72d;
    return _0x2be72d[_0xf56d8(0x492)]('?')[0x0] || '/';
}
function log(..._0x389cfe) {
    const _0x3fb4e5 = a0_0x43d2af;
    if (调试日志打印)
        console[_0x3fb4e5(0x41c)](..._0x389cfe);
}
function Clash订阅配置文件热补丁(_0x37951c, _0xff87d3 = {}) {
    const _0x46e14c = a0_0x43d2af, _0x174d07 = _0xff87d3?.[_0x46e14c(0x1bb)] || null, _0x27cf7a = Boolean(_0xff87d3?.[_0x46e14c(0x3d3)]), _0x17032c = Array[_0x46e14c(0x686)](_0xff87d3?.[_0x46e14c(0x498)]) ? [..._0xff87d3[_0x46e14c(0x498)]] : [], _0xa01564 = _0xff87d3?.[_0x46e14c(0x3fd)]?.[_0x46e14c(0x3ec)] || null, _0x138f6f = _0xff87d3?.[_0x46e14c(0x3fd)]?.[_0x46e14c(0x51a)], _0x5c6462 = Boolean(_0x174d07 && _0x27cf7a), _0xce1f44 = typeof _0xff87d3?.['gRPCUserAgent'] === _0x46e14c(0x615) && _0xff87d3[_0x46e14c(0x21a)]['trim']() ? _0xff87d3['gRPCUserAgent'][_0x46e14c(0x55a)]() : null, _0x42f503 = _0xff87d3?.[_0x46e14c(0x5c1)] === 'grpc' && Boolean(_0xce1f44), _0x13eae3 = _0xce1f44 ? JSON[_0x46e14c(0x510)](_0xce1f44) : null;
    let _0x3d9064 = _0x37951c[_0x46e14c(0x680)](/mode:\s*Rule\b/g, _0x46e14c(0x402));
    const _0x4a43e9 = _0x46e14c(0x638), _0xe063d = _0x4db262 => _0x4db262[_0x46e14c(0x680)](/grpc-opts:\s*\{([\s\S]*?)\}/i, (_0x35b4e0, _0xc8dbf1) => {
            const _0x35b507 = _0x46e14c;
            if (/grpc-user-agent\s*:/i['test'](_0xc8dbf1))
                return _0x35b4e0;
            let _0x216f32 = _0xc8dbf1['trim']();
            if (_0x216f32[_0x35b507(0x45b)](','))
                _0x216f32 = _0x216f32['slice'](0x0, -0x1)[_0x35b507(0x55a)]();
            const _0xc65937 = _0x216f32 ? _0x216f32 + _0x35b507(0x1d9) + _0x13eae3 : _0x35b507(0x58d) + _0x13eae3;
            return _0x35b507(0x67e) + _0xc65937 + '}';
        }), _0x33c64f = _0x298544 => /(?:^|[,{])\s*network:\s*(?:"grpc"|'grpc'|grpc)(?=\s*(?:[,}\n#]|$))/mi[_0x46e14c(0x247)](_0x298544), _0x5ddedf = _0x3bd0aa => _0x3bd0aa[_0x46e14c(0x5f7)](/type:\s*(\w+)/)?.[0x1] || 'vl' + _0x46e14c(0x5c3), _0x12f641 = (_0x133c20, _0x2bb27f) => {
            const _0x4df766 = _0x46e14c, _0x281191 = _0x5ddedf(_0x133c20) === _0x4df766(0x2a6) ? _0x4df766(0x2f6) : _0x4df766(0x1b4), _0x5a7c7c = new RegExp(_0x281191 + _0x4df766(0x4ce) + (_0x2bb27f ? _0x4df766(0x24d) : _0x4df766(0x25b)));
            return _0x133c20[_0x4df766(0x5f7)](_0x5a7c7c)?.[0x1]?.[_0x4df766(0x55a)]() || null;
        }, _0x2a3d90 = (_0x462e1c, _0x5e1d4c) => {
            const _0x392ee4 = _0x46e14c;
            if (/^\s{2}nameserver-policy:\s*(?:\n|$)/m[_0x392ee4(0x247)](_0x462e1c))
                return _0x462e1c[_0x392ee4(0x680)](/^(\s{2}nameserver-policy:\s*\n)/m, '$1' + _0x5e1d4c + '\x0a');
            const _0x1241bc = _0x462e1c['split']('\x0a');
            let _0x33cfad = -0x1, _0x22f933 = ![];
            for (let _0x365a8a = 0x0; _0x365a8a < _0x1241bc[_0x392ee4(0x292)]; _0x365a8a++) {
                const _0x1600fd = _0x1241bc[_0x365a8a];
                if (/^dns:\s*$/[_0x392ee4(0x247)](_0x1600fd)) {
                    _0x22f933 = !![];
                    continue;
                }
                if (_0x22f933 && /^[a-zA-Z]/['test'](_0x1600fd)) {
                    _0x33cfad = _0x365a8a;
                    break;
                }
            }
            const _0x3e1631 = _0x392ee4(0x223) + _0x5e1d4c;
            if (_0x33cfad !== -0x1)
                _0x1241bc[_0x392ee4(0x4ec)](_0x33cfad, 0x0, _0x3e1631);
            else
                _0x1241bc['push'](_0x3e1631);
            return _0x1241bc['join']('\x0a');
        }, _0x570a5c = _0x67e30 => {
            const _0x4a3dd4 = _0x46e14c;
            if (!_0x33c64f(_0x67e30) || /grpc-user-agent\s*:/i['test'](_0x67e30))
                return _0x67e30;
            if (/grpc-opts:\s*\{/i['test'](_0x67e30))
                return _0xe063d(_0x67e30);
            return _0x67e30[_0x4a3dd4(0x680)](/\}(\s*)$/, ',\x20grpc-opts:\x20{grpc-user-agent:\x20' + _0x13eae3 + '}}$1');
        }, _0xad19a5 = (_0x55a388, _0x50bcfb) => {
            const _0x2c351a = _0x46e14c, _0x2625c3 = '\x20'[_0x2c351a(0x296)](_0x50bcfb);
            let _0x492711 = -0x1;
            for (let _0x34d187 = 0x0; _0x34d187 < _0x55a388['length']; _0x34d187++) {
                const _0x230ded = _0x55a388[_0x34d187];
                if (!_0x230ded[_0x2c351a(0x55a)]())
                    continue;
                const _0x5c1f05 = _0x230ded[_0x2c351a(0x3f0)](/\S/);
                if (_0x5c1f05 !== _0x50bcfb)
                    continue;
                if (/^\s*grpc-opts:\s*(?:#.*)?$/[_0x2c351a(0x247)](_0x230ded) || /^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/[_0x2c351a(0x247)](_0x230ded)) {
                    _0x492711 = _0x34d187;
                    break;
                }
            }
            if (_0x492711 === -0x1) {
                let _0x32f958 = -0x1;
                for (let _0x5d12b0 = _0x55a388[_0x2c351a(0x292)] - 0x1; _0x5d12b0 >= 0x0; _0x5d12b0--) {
                    if (_0x55a388[_0x5d12b0][_0x2c351a(0x55a)]()) {
                        _0x32f958 = _0x5d12b0;
                        break;
                    }
                }
                if (_0x32f958 >= 0x0)
                    _0x55a388[_0x2c351a(0x4ec)](_0x32f958 + 0x1, 0x0, _0x2625c3 + _0x2c351a(0x4f3), _0x2625c3 + _0x2c351a(0x5e6) + _0x13eae3);
                return _0x55a388;
            }
            const _0x1915aa = _0x55a388[_0x492711];
            if (/^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/['test'](_0x1915aa)) {
                if (!/grpc-user-agent\s*:/i[_0x2c351a(0x247)](_0x1915aa))
                    _0x55a388[_0x492711] = _0xe063d(_0x1915aa);
                return _0x55a388;
            }
            let _0x26fe0a = _0x55a388[_0x2c351a(0x292)], _0x31e997 = _0x50bcfb + 0x2, _0x598ca7 = ![];
            for (let _0x1a42a3 = _0x492711 + 0x1; _0x1a42a3 < _0x55a388[_0x2c351a(0x292)]; _0x1a42a3++) {
                const _0x3a1a11 = _0x55a388[_0x1a42a3], _0x2d73e8 = _0x3a1a11['trim']();
                if (!_0x2d73e8)
                    continue;
                const _0x23a8da = _0x3a1a11[_0x2c351a(0x3f0)](/\S/);
                if (_0x23a8da <= _0x50bcfb) {
                    _0x26fe0a = _0x1a42a3;
                    break;
                }
                if (_0x23a8da > _0x50bcfb && _0x31e997 === _0x50bcfb + 0x2)
                    _0x31e997 = _0x23a8da;
                if (/^grpc-user-agent\s*:/['test'](_0x2d73e8)) {
                    _0x598ca7 = !![];
                    break;
                }
            }
            if (!_0x598ca7)
                _0x55a388[_0x2c351a(0x4ec)](_0x26fe0a, 0x0, '\x20'[_0x2c351a(0x296)](_0x31e997) + _0x2c351a(0x58d) + _0x13eae3);
            return _0x55a388;
        }, _0x55453a = (_0x5784f7, _0x5be464) => {
            const _0x2ba3c5 = _0x46e14c;
            let _0x16d9d3 = -0x1;
            for (let _0x30a56f = _0x5784f7[_0x2ba3c5(0x292)] - 0x1; _0x30a56f >= 0x0; _0x30a56f--) {
                if (_0x5784f7[_0x30a56f][_0x2ba3c5(0x55a)]()) {
                    _0x16d9d3 = _0x30a56f;
                    break;
                }
            }
            if (_0x16d9d3 < 0x0)
                return _0x5784f7;
            const _0x5f0a1e = '\x20'['repeat'](_0x5be464), _0x425db1 = [
                    _0x5f0a1e + _0x2ba3c5(0x1e8),
                    _0x5f0a1e + _0x2ba3c5(0x250)
                ];
            if (_0xa01564)
                _0x425db1['push'](_0x5f0a1e + _0x2ba3c5(0x27a) + _0xa01564);
            return _0x5784f7[_0x2ba3c5(0x4ec)](_0x16d9d3 + 0x1, 0x0, ..._0x425db1), _0x5784f7;
        };
    if (!/^dns:\s*(?:\n|$)/m[_0x46e14c(0x247)](_0x3d9064))
        _0x3d9064 = _0x4a43e9 + _0x3d9064;
    if (_0xa01564 && !_0x17032c[_0x46e14c(0x68e)](_0xa01564))
        _0x17032c[_0x46e14c(0x4a8)](_0xa01564);
    if (_0x27cf7a && _0x17032c['length'] > 0x0) {
        const _0x162da0 = _0x17032c[_0x46e14c(0x2a7)](_0x5de56b => _0x46e14c(0x2dd) + _0x5de56b + _0x46e14c(0x623) + (_0x138f6f ? _0x138f6f : ''))[_0x46e14c(0x4f1)]('\x0a');
        _0x3d9064 = _0x2a3d90(_0x3d9064, _0x162da0);
    }
    if (!_0x5c6462 && !_0x42f503)
        return _0x3d9064;
    const _0x550196 = _0x3d9064[_0x46e14c(0x492)]('\x0a'), _0x2aa86f = [];
    let _0x5f3d4a = 0x0;
    while (_0x5f3d4a < _0x550196[_0x46e14c(0x292)]) {
        const _0x137514 = _0x550196[_0x5f3d4a], _0xd6acde = _0x137514[_0x46e14c(0x55a)]();
        if (_0xd6acde[_0x46e14c(0x661)](_0x46e14c(0x49c))) {
            let _0x5bd4d5 = _0x137514, _0x4df23f = (_0x137514[_0x46e14c(0x5f7)](/\{/g) || [])['length'] - (_0x137514[_0x46e14c(0x5f7)](/\}/g) || [])[_0x46e14c(0x292)];
            while (_0x4df23f > 0x0 && _0x5f3d4a + 0x1 < _0x550196['length']) {
                _0x5f3d4a++, _0x5bd4d5 += '\x0a' + _0x550196[_0x5f3d4a], _0x4df23f += (_0x550196[_0x5f3d4a][_0x46e14c(0x5f7)](/\{/g) || [])[_0x46e14c(0x292)] - (_0x550196[_0x5f3d4a][_0x46e14c(0x5f7)](/\}/g) || [])[_0x46e14c(0x292)];
            }
            if (_0x42f503)
                _0x5bd4d5 = _0x570a5c(_0x5bd4d5);
            _0x5c6462 && _0x12f641(_0x5bd4d5, !![]) === _0x174d07['trim']() && (_0x5bd4d5 = _0x5bd4d5['replace'](/\}(\s*)$/, ',\x20ech-opts:\x20{enable:\x20true' + (_0xa01564 ? _0x46e14c(0x383) + _0xa01564 : '') + _0x46e14c(0x207))), _0x2aa86f[_0x46e14c(0x4a8)](_0x5bd4d5), _0x5f3d4a++;
        } else {
            if (_0xd6acde[_0x46e14c(0x661)](_0x46e14c(0x5c5))) {
                let _0x1f55ab = [_0x137514], _0x23bb00 = _0x137514[_0x46e14c(0x3f0)](/\S/), _0x1ab81b = _0x23bb00 + 0x2;
                _0x5f3d4a++;
                while (_0x5f3d4a < _0x550196[_0x46e14c(0x292)]) {
                    const _0x4a9e19 = _0x550196[_0x5f3d4a], _0x4a968e = _0x4a9e19[_0x46e14c(0x55a)]();
                    if (!_0x4a968e) {
                        _0x1f55ab[_0x46e14c(0x4a8)](_0x4a9e19), _0x5f3d4a++;
                        break;
                    }
                    const _0x5c8182 = _0x4a9e19[_0x46e14c(0x3f0)](/\S/);
                    if (_0x5c8182 <= _0x23bb00 && _0x4a968e['startsWith']('-\x20'))
                        break;
                    if (_0x5c8182 < _0x23bb00 && _0x4a968e)
                        break;
                    _0x1f55ab['push'](_0x4a9e19), _0x5f3d4a++;
                }
                let _0x4c73db = _0x1f55ab[_0x46e14c(0x4f1)]('\x0a');
                _0x42f503 && _0x33c64f(_0x4c73db) && (_0x1f55ab = _0xad19a5(_0x1f55ab, _0x1ab81b), _0x4c73db = _0x1f55ab['join']('\x0a'));
                if (_0x5c6462 && _0x12f641(_0x4c73db, ![]) === _0x174d07['trim']())
                    _0x1f55ab = _0x55453a(_0x1f55ab, _0x1ab81b);
                _0x2aa86f[_0x46e14c(0x4a8)](..._0x1f55ab);
            } else
                _0x2aa86f['push'](_0x137514), _0x5f3d4a++;
        }
    }
    return _0x2aa86f['join']('\x0a');
}
async function Singbox订阅配置文件热补丁(_0x17165a, _0x750d4d = {}) {
    const _0x3c84a2 = a0_0x43d2af, _0x45b522 = _0x750d4d?.['UUID'] || null, _0x45b241 = _0x750d4d?.['Fingerprint'] || _0x3c84a2(0x3ed), _0x2f92e8 = Boolean(_0x750d4d?.[_0x3c84a2(0x3d3)]), _0x4eb4af = _0x750d4d?.[_0x3c84a2(0x3fd)]?.['SNI'] || 'cloudflare-ech.com', _0x306d82 = _0x17165a[_0x3c84a2(0x680)](_0x3c84a2(0x2ac), _0x3c84a2(0x2a9))[_0x3c84a2(0x680)](_0x3c84a2(0x1b8), _0x3c84a2(0x529));
    try {
        const _0x530d58 = JSON['parse'](_0x306d82), _0x14084f = _0x3b42ed => _0x3b42ed === undefined || _0x3b42ed === null ? [] : Array[_0x3c84a2(0x686)](_0x3b42ed) ? _0x3b42ed : [_0x3b42ed], _0x236fed = () => _0x530d58[_0x3c84a2(0x1eb)] = _0x530d58[_0x3c84a2(0x1eb)] && typeof _0x530d58['route'] === _0x3c84a2(0x3bd) ? _0x530d58['route'] : {}, _0x43c4f6 = _0x2e3ad3 => _0x2e3ad3 && typeof _0x2e3ad3 === _0x3c84a2(0x3bd) && !Array['isArray'](_0x2e3ad3) && typeof _0x2e3ad3[_0x3c84a2(0x30f)] === _0x3c84a2(0x615) ? _0x2e3ad3[_0x3c84a2(0x30f)] : null, _0x4c8fde = (_0x11206f, _0x225cf2) => {
                const _0x28b308 = _0x3c84a2;
                if (!_0x225cf2 || typeof _0x225cf2 !== _0x28b308(0x615))
                    return null;
                const _0x30bc0f = _0x236fed(), _0x250ca6 = _0x11206f + '-' + _0x225cf2, _0x3a82a0 = Array['isArray'](_0x30bc0f[_0x28b308(0x49f)]) ? _0x30bc0f[_0x28b308(0x49f)] : _0x14084f(_0x30bc0f['rule_set']);
                if (!_0x3a82a0[_0x28b308(0x507)](_0x227026 => _0x227026?.[_0x28b308(0x39b)] === _0x250ca6)) {
                    const _0x30bf8e = _0x11206f === _0x28b308(0x2f5) ? _0x30bc0f[_0x28b308(0x2f5)] : _0x30bc0f[_0x28b308(0x4b0)];
                    _0x3a82a0[_0x28b308(0x4a8)]({
                        'tag': _0x250ca6,
                        'type': 'remote',
                        'format': _0x28b308(0x67d),
                        'url': 'https://raw.githubusercontent.com/SagerNet/sing-' + _0x11206f + _0x28b308(0x278) + _0x250ca6 + _0x28b308(0x2ad),
                        ..._0x30bf8e?.['download_detour'] ? { 'download_detour': _0x30bf8e[_0x28b308(0x336)] } : {}
                    }), _0x530d58[_0x28b308(0x5b5)] = _0x530d58[_0x28b308(0x5b5)] && typeof _0x530d58[_0x28b308(0x5b5)] === _0x28b308(0x3bd) ? _0x530d58[_0x28b308(0x5b5)] : {}, _0x530d58[_0x28b308(0x5b5)][_0x28b308(0x277)] = _0x530d58[_0x28b308(0x5b5)][_0x28b308(0x277)] && typeof _0x530d58[_0x28b308(0x5b5)][_0x28b308(0x277)] === 'object' ? _0x530d58[_0x28b308(0x5b5)][_0x28b308(0x277)] : {}, _0x530d58[_0x28b308(0x5b5)][_0x28b308(0x277)][_0x28b308(0x242)] ??= !![];
                }
                return _0x30bc0f[_0x28b308(0x49f)] = _0x3a82a0, _0x250ca6;
            }, _0x3d9680 = _0x55c645 => {
                const _0x5857bf = _0x3c84a2;
                if (!_0x55c645 || typeof _0x55c645 !== _0x5857bf(0x3bd) || Array[_0x5857bf(0x686)](_0x55c645))
                    return _0x55c645;
                if (_0x55c645[_0x5857bf(0x3c6)] === _0x5857bf(0x5cb) && Array[_0x5857bf(0x686)](_0x55c645['rules']))
                    return _0x55c645['rules'] = _0x55c645[_0x5857bf(0x1f9)]['map'](_0x3d9680), _0x55c645;
                const _0x24265e = [];
                for (const _0x8f31de of _0x14084f(_0x55c645[_0x5857bf(0x2f5)])) {
                    if (typeof _0x8f31de !== _0x5857bf(0x615))
                        continue;
                    if (_0x8f31de[_0x5857bf(0x486)]() === _0x5857bf(0x294))
                        _0x55c645[_0x5857bf(0x66a)] = !![];
                    else
                        _0x24265e[_0x5857bf(0x4a8)](_0x4c8fde('geoip', _0x8f31de));
                }
                for (const _0x34c372 of _0x14084f(_0x55c645['source_geoip'])) {
                    if (typeof _0x34c372 !== _0x5857bf(0x615))
                        continue;
                    _0x24265e[_0x5857bf(0x4a8)](_0x4c8fde(_0x5857bf(0x2f5), _0x34c372)), _0x55c645[_0x5857bf(0x2ee)] = !![];
                }
                for (const _0x510b94 of _0x14084f(_0x55c645[_0x5857bf(0x4b0)]))
                    if (typeof _0x510b94 === _0x5857bf(0x615))
                        _0x24265e['push'](_0x4c8fde(_0x5857bf(0x4b0), _0x510b94));
                if (_0x24265e['length'])
                    _0x55c645[_0x5857bf(0x49f)] = [...new Set([
                            ..._0x14084f(_0x55c645[_0x5857bf(0x49f)]),
                            ..._0x24265e
                        ][_0x5857bf(0x216)](Boolean))];
                return delete _0x55c645[_0x5857bf(0x2f5)], delete _0x55c645[_0x5857bf(0x5b0)], delete _0x55c645['geosite'], _0x55c645;
            }, _0x3cef1c = (_0x225f81, _0x2d6dec) => {
                const _0x41f39b = _0x3c84a2;
                _0x225f81 = _0x3d9680(_0x225f81);
                if (!_0x225f81 || typeof _0x225f81 !== 'object' || Array[_0x41f39b(0x686)](_0x225f81))
                    return _0x225f81;
                if (_0x225f81[_0x41f39b(0x3c6)] === _0x41f39b(0x5cb) && Array[_0x41f39b(0x686)](_0x225f81['rules']))
                    return _0x225f81[_0x41f39b(0x1f9)] = _0x225f81[_0x41f39b(0x1f9)]['map'](_0x3fe2b7 => _0x3cef1c(_0x3fe2b7, _0x2d6dec)), _0x225f81;
                const _0x52cee8 = _0x43c4f6(_0x225f81);
                if (_0x52cee8 && _0x2d6dec[_0x41f39b(0x53a)](_0x52cee8)) {
                    for (const _0x260a4d of [
                            _0x41f39b(0x30f),
                            _0x41f39b(0x30c),
                            _0x41f39b(0x603),
                            _0x41f39b(0x30e),
                            _0x41f39b(0x3a1),
                            'timeout'
                        ])
                        delete _0x225f81[_0x260a4d];
                    _0x225f81[_0x41f39b(0x1d4)] = 'predefined', _0x225f81[_0x41f39b(0x20d)] = _0x2d6dec[_0x41f39b(0x257)](_0x52cee8);
                } else {
                    if (_0x52cee8 && !_0x225f81[_0x41f39b(0x1d4)])
                        _0x225f81[_0x41f39b(0x1d4)] = _0x41f39b(0x1eb);
                }
                return _0x225f81;
            };
        if (Array[_0x3c84a2(0x686)](_0x530d58[_0x3c84a2(0x4a2)]))
            for (const _0x5def65 of _0x530d58[_0x3c84a2(0x4a2)]) {
                if (!_0x5def65 || typeof _0x5def65 !== 'object' || _0x5def65['type'] !== _0x3c84a2(0x450))
                    continue;
                for (const _0x4f3c8c of [
                        {
                            'targetKey': 'address',
                            'sourceKeys': [
                                _0x3c84a2(0x5e1),
                                _0x3c84a2(0x645)
                            ]
                        },
                        {
                            'targetKey': 'route_address',
                            'sourceKeys': [
                                _0x3c84a2(0x55c),
                                'inet6_route_address'
                            ]
                        },
                        {
                            'targetKey': _0x3c84a2(0x57e),
                            'sourceKeys': [
                                _0x3c84a2(0x5c9),
                                _0x3c84a2(0x627)
                            ]
                        }
                    ]) {
                    const _0x1dd624 = _0x14084f(_0x5def65[_0x4f3c8c[_0x3c84a2(0x54e)]]);
                    for (const _0x530fa8 of _0x4f3c8c[_0x3c84a2(0x5bf)])
                        _0x1dd624['push'](..._0x14084f(_0x5def65[_0x530fa8]));
                    if (_0x1dd624[_0x3c84a2(0x292)])
                        _0x5def65[_0x4f3c8c[_0x3c84a2(0x54e)]] = [...new Set(_0x1dd624)];
                    for (const _0xaa4132 of _0x4f3c8c['sourceKeys'])
                        delete _0x5def65[_0xaa4132];
                }
                if (_0x5def65[_0x3c84a2(0x39b)]) {
                    const _0x482cd9 = [];
                    if (_0x5def65[_0x3c84a2(0x2f4)])
                        _0x482cd9[_0x3c84a2(0x4a8)]({
                            'inbound': _0x5def65[_0x3c84a2(0x39b)],
                            'action': _0x3c84a2(0x58b),
                            'strategy': _0x5def65[_0x3c84a2(0x2f4)]
                        });
                    if (_0x5def65[_0x3c84a2(0x21e)]) {
                        const _0x2a93e9 = {
                            'inbound': _0x5def65['tag'],
                            'action': _0x3c84a2(0x21e)
                        };
                        if (_0x5def65[_0x3c84a2(0x4aa)])
                            _0x2a93e9[_0x3c84a2(0x382)] = _0x5def65['sniff_timeout'];
                        _0x482cd9['push'](_0x2a93e9);
                    }
                    if (_0x482cd9[_0x3c84a2(0x292)]) {
                        const _0xb11059 = _0x236fed();
                        _0xb11059[_0x3c84a2(0x1f9)] = [
                            ..._0x482cd9,
                            ..._0x14084f(_0xb11059[_0x3c84a2(0x1f9)])
                        ];
                    }
                }
                delete _0x5def65[_0x3c84a2(0x21e)], delete _0x5def65[_0x3c84a2(0x4aa)], delete _0x5def65['domain_strategy'];
            }
        if (_0x530d58?.[_0x3c84a2(0x1eb)] && typeof _0x530d58['route'] === _0x3c84a2(0x3bd) && Array['isArray'](_0x530d58[_0x3c84a2(0x1eb)][_0x3c84a2(0x1f9)])) {
            const _0x149073 = _0x4a0429 => {
                const _0x4d558f = _0x3c84a2;
                _0x4a0429 = _0x3d9680(_0x4a0429);
                if (_0x4a0429?.[_0x4d558f(0x3c6)] === _0x4d558f(0x5cb) && Array[_0x4d558f(0x686)](_0x4a0429['rules']))
                    _0x4a0429[_0x4d558f(0x1f9)] = _0x4a0429['rules']['map'](_0x149073);
                else {
                    if (_0x4a0429 && typeof _0x4a0429 === _0x4d558f(0x3bd) && !Array[_0x4d558f(0x686)](_0x4a0429) && _0x4a0429[_0x4d558f(0x629)] && !_0x4a0429['action'])
                        _0x4a0429[_0x4d558f(0x1d4)] = _0x4d558f(0x1eb);
                }
                return _0x4a0429;
            };
            _0x530d58[_0x3c84a2(0x1eb)][_0x3c84a2(0x1f9)] = _0x530d58[_0x3c84a2(0x1eb)][_0x3c84a2(0x1f9)]['map'](_0x149073);
        }
        const _0x3437f2 = _0x530d58?.[_0x3c84a2(0x599)];
        if (_0x3437f2 && typeof _0x3437f2 === _0x3c84a2(0x3bd)) {
            const _0x51f50c = _0x3437f2[_0x3c84a2(0x2d7)] && typeof _0x3437f2['fakeip'] === 'object' ? _0x3437f2['fakeip'] : null, _0x8ef62 = new Map(), _0x5e0de0 = {
                    'tcp:': _0x3c84a2(0x3d1),
                    'udp:': _0x3c84a2(0x229),
                    'tls:': _0x3c84a2(0x452),
                    'quic:': 'quic',
                    'https:': _0x3c84a2(0x2d6),
                    'h3:': 'h3'
                }, _0x353938 = {
                    'success': _0x3c84a2(0x534),
                    'format_error': _0x3c84a2(0x219),
                    'server_failure': _0x3c84a2(0x443),
                    'name_error': 'NXDOMAIN',
                    'not_implemented': _0x3c84a2(0x46c),
                    'refused': _0x3c84a2(0x5f0)
                };
            let _0x33464a = ![];
            if (Array[_0x3c84a2(0x686)](_0x3437f2[_0x3c84a2(0x4da)])) {
                const _0x239abe = [];
                for (const _0x4a7f01 of _0x3437f2['servers']) {
                    if (!_0x4a7f01 || typeof _0x4a7f01 !== 'object' || Array[_0x3c84a2(0x686)](_0x4a7f01)) {
                        _0x239abe[_0x3c84a2(0x4a8)](_0x4a7f01);
                        continue;
                    }
                    const _0x42efe8 = { ..._0x4a7f01 };
                    let _0x1defa6 = null, _0x35bf2d = '', _0x17fd30 = typeof _0x42efe8[_0x3c84a2(0x5cf)] === _0x3c84a2(0x615) ? _0x42efe8[_0x3c84a2(0x5cf)]['trim']() : '';
                    if (_0x17fd30) {
                        const _0x178eb7 = _0x17fd30[_0x3c84a2(0x486)]();
                        if (_0x178eb7 === _0x3c84a2(0x2d7))
                            _0x1defa6 = { 'type': 'fakeip' };
                        else {
                            if (_0x178eb7 === 'local')
                                _0x1defa6 = { 'type': _0x3c84a2(0x597) };
                            else {
                                if (_0x178eb7['startsWith'](_0x3c84a2(0x387)))
                                    _0x1defa6 = { 'type': 'rcode' }, _0x35bf2d = _0x17fd30[_0x3c84a2(0x548)](_0x3c84a2(0x387)[_0x3c84a2(0x292)])[_0x3c84a2(0x486)]();
                                else {
                                    if (_0x178eb7[_0x3c84a2(0x661)](_0x3c84a2(0x447))) {
                                        const _0x1088f9 = _0x17fd30[_0x3c84a2(0x548)](_0x3c84a2(0x447)[_0x3c84a2(0x292)]);
                                        _0x1defa6 = _0x1088f9 && _0x1088f9[_0x3c84a2(0x486)]() !== 'auto' ? {
                                            'type': _0x3c84a2(0x1ec),
                                            'interface': _0x1088f9
                                        } : { 'type': _0x3c84a2(0x1ec) };
                                    } else {
                                        try {
                                            const _0x2fbca2 = new URL(_0x17fd30), _0x34fe21 = _0x5e0de0[_0x2fbca2[_0x3c84a2(0x4a7)][_0x3c84a2(0x486)]()];
                                            if (_0x34fe21) {
                                                const _0x329b42 = _0x2fbca2['hostname']?.['startsWith']('[') && _0x2fbca2[_0x3c84a2(0x5ac)][_0x3c84a2(0x45b)](']') ? _0x2fbca2['hostname']['slice'](0x1, -0x1) : _0x2fbca2[_0x3c84a2(0x5ac)];
                                                _0x1defa6 = {
                                                    'type': _0x34fe21,
                                                    'server': _0x329b42 || _0x2fbca2['host'] || _0x17fd30,
                                                    ..._0x2fbca2[_0x3c84a2(0x4bb)] ? { 'server_port': Number(_0x2fbca2[_0x3c84a2(0x4bb)]) } : {},
                                                    ...(_0x34fe21 === _0x3c84a2(0x2d6) || _0x34fe21 === 'h3') && _0x2fbca2['pathname'] && _0x2fbca2[_0x3c84a2(0x40e)] !== _0x3c84a2(0x3b0) ? { 'path': _0x2fbca2[_0x3c84a2(0x40e)] } : {}
                                                };
                                            }
                                        } catch (_0x435df6) {
                                        }
                                        if (!_0x1defa6)
                                            _0x1defa6 = {
                                                'type': _0x3c84a2(0x229),
                                                'server': _0x17fd30
                                            };
                                    }
                                }
                            }
                        }
                    }
                    if (_0x1defa6?.[_0x3c84a2(0x3c6)] === _0x3c84a2(0x20d)) {
                        const _0x14c9e2 = _0x353938[_0x35bf2d] || _0x3c84a2(0x534);
                        typeof _0x42efe8[_0x3c84a2(0x39b)] === _0x3c84a2(0x615) && _0x42efe8['tag'] && (_0x8ef62[_0x3c84a2(0x1f2)](_0x42efe8[_0x3c84a2(0x39b)], _0x14c9e2), _0x8ef62[_0x3c84a2(0x1f2)](_0x42efe8[_0x3c84a2(0x39b)][_0x3c84a2(0x661)](_0x3c84a2(0x28a)) ? _0x42efe8[_0x3c84a2(0x39b)][_0x3c84a2(0x548)](0x4) : _0x3c84a2(0x28a) + _0x42efe8[_0x3c84a2(0x39b)], _0x14c9e2));
                        continue;
                    }
                    _0x1defa6 && (delete _0x42efe8[_0x3c84a2(0x5cf)], Object[_0x3c84a2(0x38a)](_0x42efe8, _0x1defa6));
                    if (_0x42efe8[_0x3c84a2(0x651)] !== undefined && _0x42efe8[_0x3c84a2(0x215)] === undefined)
                        _0x42efe8[_0x3c84a2(0x215)] = _0x42efe8['address_resolver'];
                    if (_0x42efe8[_0x3c84a2(0x227)] !== undefined && _0x42efe8[_0x3c84a2(0x2f4)] === undefined)
                        _0x42efe8['domain_strategy'] = _0x42efe8[_0x3c84a2(0x227)];
                    delete _0x42efe8[_0x3c84a2(0x651)], delete _0x42efe8[_0x3c84a2(0x227)];
                    if (_0x42efe8[_0x3c84a2(0x30b)] === _0x3c84a2(0x2b1))
                        delete _0x42efe8['detour'];
                    if (_0x42efe8['type'] === _0x3c84a2(0x2d7)) {
                        _0x33464a = !![];
                        if (_0x51f50c)
                            for (const _0xa9cff9 of [
                                    'inet4_range',
                                    _0x3c84a2(0x643)
                                ]) {
                                if (_0x51f50c[_0xa9cff9] !== undefined && _0x42efe8[_0xa9cff9] === undefined)
                                    _0x42efe8[_0xa9cff9] = _0x51f50c[_0xa9cff9];
                            }
                    }
                    _0x239abe[_0x3c84a2(0x4a8)](_0x42efe8);
                }
                _0x3437f2[_0x3c84a2(0x4da)] = _0x239abe;
            }
            if (_0x51f50c && !_0x33464a && _0x51f50c[_0x3c84a2(0x242)] !== ![]) {
                const _0x199220 = {
                    'type': _0x3c84a2(0x2d7),
                    'tag': _0x3c84a2(0x2d7)
                };
                for (const _0x47b1ed of Array['isArray'](_0x3437f2[_0x3c84a2(0x1f9)]) ? _0x3437f2[_0x3c84a2(0x1f9)] : []) {
                    const _0x149f24 = _0x43c4f6(_0x47b1ed);
                    if (_0x149f24 && _0x149f24[_0x3c84a2(0x486)]()[_0x3c84a2(0x68e)](_0x3c84a2(0x2d7))) {
                        _0x199220[_0x3c84a2(0x39b)] = _0x149f24;
                        break;
                    }
                }
                for (const _0x42a36d of [
                        _0x3c84a2(0x60c),
                        _0x3c84a2(0x643)
                    ]) {
                    if (_0x51f50c[_0x42a36d] !== undefined)
                        _0x199220[_0x42a36d] = _0x51f50c[_0x42a36d];
                }
                if (Array[_0x3c84a2(0x686)](_0x3437f2[_0x3c84a2(0x4da)]))
                    _0x3437f2[_0x3c84a2(0x4da)][_0x3c84a2(0x4a8)](_0x199220);
                else
                    _0x3437f2[_0x3c84a2(0x4da)] = [_0x199220];
            }
            if (Array[_0x3c84a2(0x686)](_0x3437f2[_0x3c84a2(0x1f9)])) {
                const _0x14e2d9 = [];
                for (const _0x52a83d of _0x3437f2[_0x3c84a2(0x1f9)]) {
                    const _0x555f29 = _0x43c4f6(_0x52a83d), _0x2f3317 = _0x14084f(_0x52a83d?.[_0x3c84a2(0x629)]), _0x7413 = new Set([
                            _0x3c84a2(0x629),
                            _0x3c84a2(0x30f),
                            _0x3c84a2(0x1d4),
                            _0x3c84a2(0x30c),
                            _0x3c84a2(0x603),
                            _0x3c84a2(0x30e),
                            'client_subnet',
                            _0x3c84a2(0x382)
                        ]), _0x451ced = _0x52a83d && typeof _0x52a83d === _0x3c84a2(0x3bd) && !Array[_0x3c84a2(0x686)](_0x52a83d) && _0x52a83d['type'] !== 'logical' && _0x555f29 && _0x2f3317[_0x3c84a2(0x68e)](_0x3c84a2(0x289)) && Object[_0x3c84a2(0x621)](_0x52a83d)[_0x3c84a2(0x274)](_0x4a0706 => _0x7413[_0x3c84a2(0x53a)](_0x4a0706));
                    if (_0x451ced) {
                        const _0x17cd8a = _0x236fed();
                        if (_0x17cd8a[_0x3c84a2(0x4dc)] === undefined) {
                            const _0x36559b = { 'server': _0x555f29 };
                            for (const _0x4897b5 of [
                                    _0x3c84a2(0x30c),
                                    _0x3c84a2(0x603),
                                    _0x3c84a2(0x30e),
                                    _0x3c84a2(0x3a1),
                                    _0x3c84a2(0x382)
                                ]) {
                                if (_0x52a83d[_0x4897b5] !== undefined)
                                    _0x36559b[_0x4897b5] = _0x52a83d[_0x4897b5];
                            }
                            _0x17cd8a[_0x3c84a2(0x4dc)] = Object[_0x3c84a2(0x621)](_0x36559b)[_0x3c84a2(0x292)] === 0x1 ? _0x36559b[_0x3c84a2(0x30f)] : _0x36559b;
                        }
                        continue;
                    }
                    _0x14e2d9[_0x3c84a2(0x4a8)](_0x3cef1c(_0x52a83d, _0x8ef62));
                }
                _0x3437f2[_0x3c84a2(0x1f9)] = _0x14e2d9;
            }
            delete _0x3437f2[_0x3c84a2(0x2d7)], delete _0x3437f2[_0x3c84a2(0x521)];
        }
        _0x530d58?.[_0x3c84a2(0x1eb)] && typeof _0x530d58[_0x3c84a2(0x1eb)] === _0x3c84a2(0x3bd) && (delete _0x530d58[_0x3c84a2(0x1eb)][_0x3c84a2(0x2f5)], delete _0x530d58[_0x3c84a2(0x1eb)][_0x3c84a2(0x4b0)]);
        if (_0x530d58?.[_0x3c84a2(0x356)]?.[_0x3c84a2(0x30b)] === _0x3c84a2(0x2b1))
            delete _0x530d58[_0x3c84a2(0x356)][_0x3c84a2(0x30b)];
        if (Array[_0x3c84a2(0x686)](_0x530d58['outbounds'])) {
            const _0x3a21a1 = new Set(_0x530d58['outbounds'][_0x3c84a2(0x2a7)](_0x1be62a => _0x1be62a?.[_0x3c84a2(0x39b)])[_0x3c84a2(0x216)](Boolean)), _0x399b80 = _0x38fdfc => _0x38fdfc === _0x3c84a2(0x3cc) || _0x38fdfc && typeof _0x38fdfc === 'object' && (Array['isArray'](_0x38fdfc) ? _0x38fdfc[_0x3c84a2(0x507)](_0x399b80) : Object['values'](_0x38fdfc)['some'](_0x399b80));
            if (!_0x3a21a1['has'](_0x3c84a2(0x3cc)) && _0x399b80({
                    'outbounds': _0x530d58[_0x3c84a2(0x322)],
                    'route': _0x530d58['route']
                }))
                _0x530d58['outbounds'][_0x3c84a2(0x4a8)]({
                    'type': _0x3c84a2(0x55b),
                    'tag': _0x3c84a2(0x3cc)
                });
        }
        return _0x45b522 && _0x530d58['outbounds']?.[_0x3c84a2(0x460)](_0x5271b5 => {
            const _0x5267cf = _0x3c84a2;
            (_0x5271b5['uuid'] && _0x5271b5[_0x5267cf(0x1b4)] === _0x45b522 || _0x5271b5[_0x5267cf(0x2f6)] && _0x5271b5[_0x5267cf(0x2f6)] === _0x45b522) && (!_0x5271b5[_0x5267cf(0x452)] && (_0x5271b5[_0x5267cf(0x452)] = { 'enabled': !![] }), _0x45b241 && (_0x5271b5[_0x5267cf(0x452)][_0x5267cf(0x518)] = {
                'enabled': !![],
                'fingerprint': _0x45b241
            }), _0x2f92e8 && (_0x5271b5['tls']['ech'] = {
                'enabled': !![],
                'query_server_name': _0x4eb4af
            }));
        }), JSON[_0x3c84a2(0x510)](_0x530d58, null, 0x2);
    } catch (_0x3660fb) {
        return console[_0x3c84a2(0x35f)](_0x3c84a2(0x4c0), _0x3660fb), JSON[_0x3c84a2(0x510)](JSON[_0x3c84a2(0x468)](_0x306d82), null, 0x2);
    }
}
function Surge订阅配置文件热补丁(_0x546aa9, _0x100399, _0x3beb69) {
    const _0x2b031b = a0_0x43d2af, _0x4fd442 = _0x546aa9[_0x2b031b(0x68e)]('\x0d\x0a') ? _0x546aa9[_0x2b031b(0x492)]('\x0d\x0a') : _0x546aa9['split']('\x0a'), _0x5a12f6 = _0x3beb69[_0x2b031b(0x577)] ? 随机路径(_0x3beb69[_0x2b031b(0x39c)]) : _0x3beb69[_0x2b031b(0x39c)];
    let _0x46e769 = '';
    for (let _0x3ab68d of _0x4fd442) {
        if (_0x3ab68d['includes']('=\x20tro' + _0x2b031b(0x327)) && !_0x3ab68d['includes'](_0x2b031b(0x3e1)) && !_0x3ab68d[_0x2b031b(0x68e)](_0x2b031b(0x573))) {
            const _0x58fa77 = _0x3ab68d[_0x2b031b(0x492)](_0x2b031b(0x5ff))[0x1][_0x2b031b(0x492)](',')[0x0], _0xafc767 = _0x2b031b(0x5ff) + _0x58fa77 + ',\x20skip-cert-verify=' + _0x3beb69[_0x2b031b(0x2c6)], _0x1010fa = _0x2b031b(0x5ff) + _0x58fa77 + _0x2b031b(0x3cd) + _0x3beb69[_0x2b031b(0x2c6)] + _0x2b031b(0x313) + _0x5a12f6[_0x2b031b(0x680)](/,/g, _0x2b031b(0x5c7)) + _0x2b031b(0x2e7) + _0x58fa77 + '\x22';
            _0x46e769 += _0x3ab68d['replace'](new RegExp(_0xafc767, 'g'), _0x1010fa)[_0x2b031b(0x680)]('[', '')[_0x2b031b(0x680)](']', '') + '\x0a';
        } else
            _0x46e769 += _0x3ab68d + '\x0a';
    }
    return _0x46e769 = _0x2b031b(0x44e) + _0x100399 + _0x2b031b(0x5a0) + _0x3beb69[_0x2b031b(0x2a2)][_0x2b031b(0x525)] * 0x3c * 0x3c + _0x2b031b(0x61c) + _0x46e769['substring'](_0x46e769['indexOf']('\x0a')), _0x46e769;
}
async function 请求日志记录(env, request, _0x11d5ea, _0x1d6ce4 = a0_0x43d2af(0x3fe), _0x25fb50, _0x114846 = !![]) {
    const _0x36385b = a0_0x43d2af;
    try {
        const _0x449d82 = new Date(), _0x254042 = {
                'TYPE': _0x1d6ce4,
                'IP': _0x11d5ea,
                'ASN': 'AS' + (request['cf'][_0x36385b(0x3b1)] || '0') + '\x20' + (request['cf']['asOrganization'] || 'Unknown'),
                'CC': (request['cf'][_0x36385b(0x605)] || _0x36385b(0x63e)) + '\x20' + (request['cf']['city'] || _0x36385b(0x63e)),
                'URL': request[_0x36385b(0x25a)],
                'UA': request[_0x36385b(0x3b9)][_0x36385b(0x257)](_0x36385b(0x59c)) || _0x36385b(0x4fb),
                'TIME': _0x449d82[_0x36385b(0x241)]()
            };
        if (_0x25fb50['TG']['启用'])
            try {
                const _0x389c2a = await env['KV']['get']('tg.json'), _0x6d3816 = JSON[_0x36385b(0x468)](_0x389c2a);
                if (_0x6d3816?.['BotToken'] && _0x6d3816?.[_0x36385b(0x4d2)]) {
                    const _0x435100 = new Date(_0x254042[_0x36385b(0x36e)])[_0x36385b(0x3a9)]('zh-CN', { 'timeZone': _0x36385b(0x697) }), _0x442fe3 = new URL(_0x254042[_0x36385b(0x1c9)]), _0x5e4e7d = _0x36385b(0x246) + _0x25fb50[_0x36385b(0x2a2)][_0x36385b(0x346)] + _0x36385b(0x456) + (_0x36385b(0x4d9) + _0x254042[_0x36385b(0x3b2)] + '\x0a') + (_0x36385b(0x478) + _0x254042['IP'] + '</code>\x0a') + ('📍\x20<b>位置：</b>' + _0x254042['CC'] + '\x0a') + (_0x36385b(0x344) + _0x254042[_0x36385b(0x4d3)] + '\x0a') + (_0x36385b(0x2e2) + _0x442fe3[_0x36385b(0x606)] + _0x36385b(0x1d0)) + (_0x36385b(0x5a5) + (_0x442fe3['pathname'] + _0x442fe3['search']) + '</code>\x0a') + ('🤖\x20<b>UA：</b><code>' + _0x254042['UA'] + _0x36385b(0x1d0)) + ('📅\x20<b>时间：</b>' + _0x435100 + '\x0a') + ('' + (_0x25fb50['CF'][_0x36385b(0x200)][_0x36385b(0x59d)] ? _0x36385b(0x580) + _0x25fb50['CF'][_0x36385b(0x200)][_0x36385b(0x516)] + '/' + _0x25fb50['CF'][_0x36385b(0x200)][_0x36385b(0x209)] + _0x36385b(0x630) + (_0x25fb50['CF'][_0x36385b(0x200)]['total'] / _0x25fb50['CF'][_0x36385b(0x200)][_0x36385b(0x209)] * 0x64)[_0x36385b(0x4a9)](0x2) + '%</b>\x0a' : ''));
                    await fetch('https://api.telegram.org/bot' + _0x6d3816[_0x36385b(0x4f9)] + '/sendMessage?chat_id=' + _0x6d3816[_0x36385b(0x4d2)] + _0x36385b(0x4d5) + encodeURIComponent(_0x5e4e7d), {
                        'method': 'GET',
                        'headers': {
                            'Accept': _0x36385b(0x578),
                            'Accept-Encoding': _0x36385b(0x1d8),
                            'User-Agent': _0x254042['UA'] || _0x36385b(0x4fb)
                        }
                    });
                }
            } catch (_0x3fc293) {
                console[_0x36385b(0x35f)](_0x36385b(0x5d2) + _0x3fc293[_0x36385b(0x385)]);
            }
        _0x114846 = [
            '1',
            _0x36385b(0x3dd)
        ][_0x36385b(0x68e)](env[_0x36385b(0x4f8)]) ? ![] : _0x114846;
        if (!_0x114846)
            return;
        let _0x545dd8 = [];
        const _0x449979 = await env['KV'][_0x36385b(0x257)](_0x36385b(0x513)), _0x51d9ca = 0x4;
        if (_0x449979)
            try {
                _0x545dd8 = JSON[_0x36385b(0x468)](_0x449979);
                if (!Array[_0x36385b(0x686)](_0x545dd8))
                    _0x545dd8 = [_0x254042];
                else {
                    if (_0x1d6ce4 !== _0x36385b(0x3fe)) {
                        const _0x4df016 = _0x449d82[_0x36385b(0x241)]() - 0x1e * 0x3c * 0x3e8;
                        if (_0x545dd8[_0x36385b(0x507)](_0x13b43e => _0x13b43e[_0x36385b(0x3b2)] !== _0x36385b(0x3fe) && _0x13b43e['IP'] === _0x11d5ea && _0x13b43e['URL'] === request['url'] && _0x13b43e['UA'] === (request[_0x36385b(0x3b9)][_0x36385b(0x257)](_0x36385b(0x59c)) || _0x36385b(0x4fb)) && _0x13b43e[_0x36385b(0x36e)] >= _0x4df016))
                            return;
                        _0x545dd8[_0x36385b(0x4a8)](_0x254042);
                        while (JSON[_0x36385b(0x510)](_0x545dd8, null, 0x2)[_0x36385b(0x292)] > _0x51d9ca * 0x400 * 0x400 && _0x545dd8['length'] > 0x0)
                            _0x545dd8[_0x36385b(0x4e9)]();
                    } else {
                        _0x545dd8[_0x36385b(0x4a8)](_0x254042);
                        while (JSON['stringify'](_0x545dd8, null, 0x2)['length'] > _0x51d9ca * 0x400 * 0x400 && _0x545dd8[_0x36385b(0x292)] > 0x0)
                            _0x545dd8['shift']();
                    }
                }
            } catch (_0x42b51e) {
                _0x545dd8 = [_0x254042];
            }
        else
            _0x545dd8 = [_0x254042];
        await env['KV'][_0x36385b(0x399)](_0x36385b(0x513), JSON[_0x36385b(0x510)](_0x545dd8, null, 0x2));
    } catch (_0x3877a7) {
        console['error'](_0x36385b(0x601) + _0x3877a7[_0x36385b(0x385)]);
    }
}
function 掩码敏感信息(_0xb06c77, _0xab378e = 0x3, _0x24477c = 0x2) {
    const _0x20a36b = a0_0x43d2af;
    if (!_0xb06c77 || typeof _0xb06c77 !== _0x20a36b(0x615))
        return _0xb06c77;
    if (_0xb06c77[_0x20a36b(0x292)] <= _0xab378e + _0x24477c)
        return _0xb06c77;
    const _0x469940 = _0xb06c77['slice'](0x0, _0xab378e), _0x32a2d3 = _0xb06c77[_0x20a36b(0x548)](-_0x24477c), _0x1c2549 = _0xb06c77[_0x20a36b(0x292)] - _0xab378e - _0x24477c;
    return '' + _0x469940 + '*'[_0x20a36b(0x296)](_0x1c2549) + _0x32a2d3;
}
async function MD5MD5(_0x59b076) {
    const _0x43cc1e = a0_0x43d2af, _0x48ff79 = new TextEncoder(), _0x53d46 = await crypto[_0x43cc1e(0x5be)][_0x43cc1e(0x39a)](_0x43cc1e(0x451), _0x48ff79['encode'](_0x59b076)), _0x27c91c = Array[_0x43cc1e(0x351)](new Uint8Array(_0x53d46)), _0x911b6b = _0x27c91c[_0x43cc1e(0x2a7)](_0x3dc3f9 => _0x3dc3f9[_0x43cc1e(0x592)](0x10)[_0x43cc1e(0x218)](0x2, '0'))['join'](''), _0x427bc0 = await crypto[_0x43cc1e(0x5be)]['digest']('MD5', _0x48ff79[_0x43cc1e(0x564)](_0x911b6b[_0x43cc1e(0x548)](0x7, 0x1b))), _0x145c47 = Array[_0x43cc1e(0x351)](new Uint8Array(_0x427bc0)), _0x5099be = _0x145c47[_0x43cc1e(0x2a7)](_0x56b212 => _0x56b212[_0x43cc1e(0x592)](0x10)[_0x43cc1e(0x218)](0x2, '0'))[_0x43cc1e(0x4f1)]('');
    return _0x5099be['toLowerCase']();
}
function 随机路径(_0x5ae0aa = '/') {
    const _0x1dc640 = a0_0x43d2af, _0xc2abd2 = [
            _0x1dc640(0x5c0),
            'account',
            _0x1dc640(0x653),
            _0x1dc640(0x585),
            _0x1dc640(0x5ef),
            'ad',
            _0x1dc640(0x553),
            _0x1dc640(0x424),
            _0x1dc640(0x5c8),
            _0x1dc640(0x620),
            _0x1dc640(0x4cb),
            _0x1dc640(0x1fc),
            _0x1dc640(0x62e),
            _0x1dc640(0x4a4),
            _0x1dc640(0x262),
            _0x1dc640(0x26a),
            _0x1dc640(0x495),
            _0x1dc640(0x329),
            _0x1dc640(0x5cc),
            _0x1dc640(0x4fd),
            _0x1dc640(0x530),
            _0x1dc640(0x406),
            'bd',
            _0x1dc640(0x1bd),
            'blogs',
            _0x1dc640(0x62f),
            _0x1dc640(0x539),
            'bt',
            _0x1dc640(0x264),
            _0x1dc640(0x25e),
            _0x1dc640(0x3f5),
            _0x1dc640(0x26d),
            'cb',
            _0x1dc640(0x2f0),
            _0x1dc640(0x2c4),
            _0x1dc640(0x4ab),
            _0x1dc640(0x412),
            _0x1dc640(0x45a),
            _0x1dc640(0x4b9),
            _0x1dc640(0x34c),
            'clip',
            _0x1dc640(0x5c6),
            'club',
            'cn',
            _0x1dc640(0x57f),
            _0x1dc640(0x1ba),
            'collection',
            _0x1dc640(0x1e3),
            _0x1dc640(0x1e2),
            'community',
            _0x1dc640(0x28f),
            _0x1dc640(0x29c),
            _0x1dc640(0x375),
            _0x1dc640(0x5e4),
            _0x1dc640(0x35b),
            _0x1dc640(0x44c),
            'cp',
            _0x1dc640(0x25c),
            _0x1dc640(0x335),
            _0x1dc640(0x21b),
            'dh',
            'directory',
            'discount',
            _0x1dc640(0x36f),
            'dl',
            _0x1dc640(0x52f),
            'doc',
            _0x1dc640(0x2e3),
            _0x1dc640(0x448),
            _0x1dc640(0x494),
            _0x1dc640(0x673),
            'download',
            _0x1dc640(0x31e),
            _0x1dc640(0x25f),
            _0x1dc640(0x5ae),
            'en',
            'ep',
            _0x1dc640(0x56b),
            _0x1dc640(0x403),
            _0x1dc640(0x3d2),
            _0x1dc640(0x3e8),
            'f',
            _0x1dc640(0x33f),
            _0x1dc640(0x59f),
            _0x1dc640(0x210),
            _0x1dc640(0x4c4),
            'feedback',
            _0x1dc640(0x67f),
            _0x1dc640(0x37d),
            _0x1dc640(0x308),
            'films',
            _0x1dc640(0x24b),
            _0x1dc640(0x42c),
            _0x1dc640(0x3e6),
            'friends',
            _0x1dc640(0x2c2),
            _0x1dc640(0x466),
            'gif',
            'go',
            'go.html',
            _0x1dc640(0x395),
            _0x1dc640(0x201),
            'groups',
            _0x1dc640(0x1ff),
            _0x1dc640(0x439),
            _0x1dc640(0x260),
            'htm',
            _0x1dc640(0x5ea),
            _0x1dc640(0x21d),
            _0x1dc640(0x24e),
            _0x1dc640(0x4f5),
            _0x1dc640(0x2ef),
            _0x1dc640(0x568),
            _0x1dc640(0x366),
            _0x1dc640(0x359),
            _0x1dc640(0x2e6),
            'ja',
            'jp',
            _0x1dc640(0x3a6),
            _0x1dc640(0x330),
            _0x1dc640(0x654),
            _0x1dc640(0x61f),
            _0x1dc640(0x501),
            _0x1dc640(0x3d8),
            'lesson',
            _0x1dc640(0x38e),
            _0x1dc640(0x53c),
            _0x1dc640(0x35d),
            _0x1dc640(0x299),
            _0x1dc640(0x604),
            _0x1dc640(0x674),
            _0x1dc640(0x503),
            _0x1dc640(0x1c6),
            'm',
            _0x1dc640(0x42e),
            _0x1dc640(0x62b),
            _0x1dc640(0x60e),
            _0x1dc640(0x3f4),
            _0x1dc640(0x2a7),
            _0x1dc640(0x2e4),
            _0x1dc640(0x26c),
            _0x1dc640(0x385),
            _0x1dc640(0x619),
            _0x1dc640(0x2ab),
            _0x1dc640(0x1c8),
            'movies',
            _0x1dc640(0x611),
            'my',
            _0x1dc640(0x427),
            _0x1dc640(0x258),
            _0x1dc640(0x28b),
            _0x1dc640(0x464),
            _0x1dc640(0x4db),
            _0x1dc640(0x545),
            _0x1dc640(0x407),
            'out',
            _0x1dc640(0x5b9),
            _0x1dc640(0x596),
            _0x1dc640(0x629),
            'p',
            _0x1dc640(0x5f8),
            _0x1dc640(0x5a3),
            _0x1dc640(0x42a),
            'payment',
            _0x1dc640(0x376),
            _0x1dc640(0x635),
            _0x1dc640(0x221),
            'pic',
            _0x1dc640(0x4bf),
            _0x1dc640(0x490),
            _0x1dc640(0x664),
            _0x1dc640(0x29b),
            _0x1dc640(0x5bb),
            _0x1dc640(0x50f),
            _0x1dc640(0x2b6),
            _0x1dc640(0x319),
            _0x1dc640(0x499),
            _0x1dc640(0x421),
            'program',
            'programs',
            _0x1dc640(0x2d1),
            'qa',
            'question',
            _0x1dc640(0x57d),
            _0x1dc640(0x4d0),
            _0x1dc640(0x1e7),
            _0x1dc640(0x64c),
            _0x1dc640(0x681),
            _0x1dc640(0x6a1),
            _0x1dc640(0x485),
            _0x1dc640(0x47c),
            _0x1dc640(0x5fc),
            _0x1dc640(0x53f),
            'resource',
            _0x1dc640(0x234),
            _0x1dc640(0x491),
            _0x1dc640(0x3f0),
            _0x1dc640(0x3bb),
            'seasons',
            _0x1dc640(0x60f),
            _0x1dc640(0x5a4),
            _0x1dc640(0x532),
            'service',
            _0x1dc640(0x40d),
            _0x1dc640(0x656),
            _0x1dc640(0x608),
            _0x1dc640(0x36b),
            _0x1dc640(0x40b),
            _0x1dc640(0x3c2),
            'shows',
            _0x1dc640(0x4ae),
            _0x1dc640(0x5e9),
            'sort',
            _0x1dc640(0x34e),
            _0x1dc640(0x43c),
            _0x1dc640(0x4e1),
            _0x1dc640(0x41e),
            _0x1dc640(0x233),
            _0x1dc640(0x2e1),
            _0x1dc640(0x4fa),
            _0x1dc640(0x559),
            'streaming',
            _0x1dc640(0x679),
            _0x1dc640(0x20a),
            _0x1dc640(0x236),
            _0x1dc640(0x39b),
            _0x1dc640(0x5b1),
            _0x1dc640(0x576),
            _0x1dc640(0x43a),
            _0x1dc640(0x355),
            _0x1dc640(0x663),
            'temp',
            _0x1dc640(0x247),
            _0x1dc640(0x3d6),
            'tool',
            _0x1dc640(0x266),
            _0x1dc640(0x1ca),
            'topics',
            _0x1dc640(0x1ce),
            _0x1dc640(0x28e),
            _0x1dc640(0x68a),
            'tv',
            'txt',
            _0x1dc640(0x3c6),
            'u',
            _0x1dc640(0x5d8),
            'uploads',
            _0x1dc640(0x25a),
            'urls',
            _0x1dc640(0x461),
            'users',
            'v',
            _0x1dc640(0x610),
            'videos',
            _0x1dc640(0x32a),
            _0x1dc640(0x32b),
            _0x1dc640(0x4bc),
            _0x1dc640(0x1d2),
            _0x1dc640(0x660),
            _0x1dc640(0x540),
            _0x1dc640(0x307),
            'work',
            'www',
            'zh',
            _0x1dc640(0x1cc),
            _0x1dc640(0x474),
            _0x1dc640(0x2bd)
        ], _0x2a140b = Math['floor'](Math['random']() * 0x3 + 0x1), _0x47648c = _0xc2abd2['sort'](() => 0.5 - Math[_0x1dc640(0x3eb)]())[_0x1dc640(0x548)](0x0, _0x2a140b)['join']('/');
    if (_0x5ae0aa === '/')
        return '/' + _0x47648c;
    else
        return '/' + (_0x47648c + _0x5ae0aa[_0x1dc640(0x680)]('/?', '?'));
}
function 替换星号为随机字符(_0x4a5726) {
    const _0x57fc18 = a0_0x43d2af;
    if (typeof _0x4a5726 !== _0x57fc18(0x615) || !_0x4a5726[_0x57fc18(0x68e)]('*'))
        return _0x4a5726;
    const _0x4afa31 = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return _0x4a5726[_0x57fc18(0x680)](/\*/g, () => {
        const _0x139cdd = _0x57fc18;
        let _0x37b569 = '';
        for (let _0x5dca1f = 0x0; _0x5dca1f < Math[_0x139cdd(0x2eb)](Math[_0x139cdd(0x3eb)]() * 0xe) + 0x3; _0x5dca1f++)
            _0x37b569 += _0x4afa31[Math[_0x139cdd(0x2eb)](Math[_0x139cdd(0x3eb)]() * _0x4afa31[_0x139cdd(0x292)])];
        return _0x37b569;
    });
}
const DoH缓存 = {}, DoH缓存最大条目 = 0x100, DoH记录类型映射 = {
        'A': 0x1,
        'NS': 0x2,
        'CNAME': 0x5,
        'MX': 0xf,
        'TXT': 0x10,
        'AAAA': 0x1c,
        'SRV': 0x21,
        'HTTPS': 0x41
    };
async function DoH查询(_0x3b3031, _0x29071a, _0x146110 = a0_0x43d2af(0x1f1)) {
    const _0x4af683 = a0_0x43d2af, _0x4011b1 = String(_0x3b3031 || '')[_0x4af683(0x55a)]()[_0x4af683(0x486)]()[_0x4af683(0x680)](/\.$/, ''), _0x33ca82 = String(_0x29071a || '')[_0x4af683(0x55a)]()[_0x4af683(0x570)](), _0x188cc3 = _0x4011b1 + ':' + _0x33ca82, _0x14699f = DoH记录类型映射[_0x33ca82] || 0x1, _0x444286 = Date['now'](), _0x26766d = DoH缓存[_0x188cc3];
    if (_0x26766d && _0x444286 < _0x26766d[_0x4af683(0x230)])
        return log(_0x4af683(0x4e8) + _0x3b3031 + '\x20' + _0x29071a + '\x20via\x20' + _0x146110), _0x26766d[_0x4af683(0x25c)][_0x4af683(0x2a7)](_0x554bda => ({
            'type': _0x14699f,
            'data': _0x554bda
        }));
    const _0x352420 = performance[_0x4af683(0x1e0)]();
    log(_0x4af683(0x265) + _0x3b3031 + '\x20' + _0x29071a + _0x4af683(0x1c5) + _0x146110);
    try {
        const _0x5b3021 = _0xb155e2 => {
                const _0x36f0c6 = _0x4af683, _0x3fe6a0 = _0xb155e2[_0x36f0c6(0x45b)]('.') ? _0xb155e2[_0x36f0c6(0x548)](0x0, -0x1)[_0x36f0c6(0x492)]('.') : _0xb155e2[_0x36f0c6(0x492)]('.'), _0x1c8083 = [];
                for (const _0x312b0c of _0x3fe6a0) {
                    const _0x219f9d = new TextEncoder()[_0x36f0c6(0x564)](_0x312b0c);
                    _0x1c8083[_0x36f0c6(0x4a8)](new Uint8Array([_0x219f9d['length']]), _0x219f9d);
                }
                _0x1c8083[_0x36f0c6(0x4a8)](new Uint8Array([0x0]));
                const _0x5c947d = _0x1c8083[_0x36f0c6(0x394)]((_0x3c5d58, _0x2b4326) => _0x3c5d58 + _0x2b4326[_0x36f0c6(0x292)], 0x0), _0x590a69 = new Uint8Array(_0x5c947d);
                let _0x4bf527 = 0x0;
                for (const _0x520fcb of _0x1c8083) {
                    _0x590a69[_0x36f0c6(0x1f2)](_0x520fcb, _0x4bf527), _0x4bf527 += _0x520fcb[_0x36f0c6(0x292)];
                }
                return _0x590a69;
            }, _0x40dd10 = _0x5b3021(_0x4011b1), _0x529950 = new Uint8Array(0xc + _0x40dd10[_0x4af683(0x292)] + 0x4), _0x3cced1 = new DataView(_0x529950['buffer']);
        _0x3cced1[_0x4af683(0x69a)](0x0, crypto[_0x4af683(0x60a)](new Uint16Array(0x1))[0x0]), _0x3cced1['setUint16'](0x2, 0x100), _0x3cced1[_0x4af683(0x69a)](0x4, 0x1), _0x529950[_0x4af683(0x1f2)](_0x40dd10, 0xc), _0x3cced1[_0x4af683(0x69a)](0xc + _0x40dd10['length'], _0x14699f), _0x3cced1[_0x4af683(0x69a)](0xc + _0x40dd10[_0x4af683(0x292)] + 0x2, 0x1), log(_0x4af683(0x420) + _0x3b3031 + _0x4af683(0x1c5) + _0x146110 + _0x4af683(0x3c9) + _0x14699f + ',\x20' + _0x529950[_0x4af683(0x292)] + _0x4af683(0x5a7));
        const _0x18c649 = await fetch(_0x146110, {
            'method': _0x4af683(0x4f6),
            'headers': {
                'Content-Type': _0x4af683(0x506),
                'Accept': _0x4af683(0x506)
            },
            'body': _0x529950
        });
        if (!_0x18c649['ok'])
            return console[_0x4af683(0x41b)](_0x4af683(0x1b3) + _0x3b3031 + '\x20' + _0x29071a + _0x4af683(0x1c5) + _0x146110 + _0x4af683(0x239) + _0x18c649[_0x4af683(0x3d7)]), [];
        const _0x55c9f4 = new Uint8Array(await _0x18c649['arrayBuffer']()), _0x3f1673 = new DataView(_0x55c9f4[_0x4af683(0x565)]), _0x1a7a8a = _0x3f1673[_0x4af683(0x4af)](0x4), _0x2725c9 = _0x3f1673[_0x4af683(0x4af)](0x6);
        log(_0x4af683(0x678) + _0x3b3031 + '\x20' + _0x29071a + _0x4af683(0x1c5) + _0x146110 + '\x20(' + _0x55c9f4[_0x4af683(0x292)] + _0x4af683(0x340) + _0x2725c9 + '条应答)');
        const _0x4a6419 = _0xe9a1d7 => {
            const _0x8e40fd = _0x4af683, _0x5c455e = [];
            let _0x5acd1f = _0xe9a1d7, _0x14d2c6 = ![], _0x310701 = -0x1, _0x2aac70 = 0x80;
            while (_0x5acd1f < _0x55c9f4[_0x8e40fd(0x292)] && _0x2aac70-- > 0x0) {
                const _0x267bac = _0x55c9f4[_0x5acd1f];
                if (_0x267bac === 0x0) {
                    if (!_0x14d2c6)
                        _0x310701 = _0x5acd1f + 0x1;
                    break;
                }
                if ((_0x267bac & 0xc0) === 0xc0) {
                    if (!_0x14d2c6)
                        _0x310701 = _0x5acd1f + 0x2;
                    _0x5acd1f = (_0x267bac & 0x3f) << 0x8 | _0x55c9f4[_0x5acd1f + 0x1], _0x14d2c6 = !![];
                    continue;
                }
                _0x5c455e[_0x8e40fd(0x4a8)](new TextDecoder()[_0x8e40fd(0x49a)](_0x55c9f4[_0x8e40fd(0x548)](_0x5acd1f + 0x1, _0x5acd1f + 0x1 + _0x267bac))), _0x5acd1f += _0x267bac + 0x1;
            }
            if (_0x310701 === -0x1)
                _0x310701 = _0x5acd1f + 0x1;
            return [
                _0x5c455e[_0x8e40fd(0x4f1)]('.'),
                _0x310701
            ];
        };
        let _0x4fd95f = 0xc;
        for (let _0x2037d8 = 0x0; _0x2037d8 < _0x1a7a8a; _0x2037d8++) {
            const [, _0x3b3481] = _0x4a6419(_0x4fd95f);
            _0x4fd95f = _0x3b3481 + 0x4;
        }
        const _0xefdb8f = [];
        for (let _0x53c98b = 0x0; _0x53c98b < _0x2725c9 && _0x4fd95f < _0x55c9f4[_0x4af683(0x292)]; _0x53c98b++) {
            const [_0x167d8b, _0x2e55ba] = _0x4a6419(_0x4fd95f);
            _0x4fd95f = _0x2e55ba;
            const _0x3628e1 = _0x3f1673[_0x4af683(0x4af)](_0x4fd95f);
            _0x4fd95f += 0x2, _0x4fd95f += 0x2;
            const _0x155e67 = _0x3f1673[_0x4af683(0x4e4)](_0x4fd95f);
            _0x4fd95f += 0x4;
            const _0x3ffd16 = _0x3f1673[_0x4af683(0x4af)](_0x4fd95f);
            _0x4fd95f += 0x2;
            const _0x40881d = _0x55c9f4[_0x4af683(0x548)](_0x4fd95f, _0x4fd95f + _0x3ffd16);
            _0x4fd95f += _0x3ffd16;
            let _0x578cc8;
            if (_0x3628e1 === 0x1 && _0x3ffd16 === 0x4)
                _0x578cc8 = _0x40881d[0x0] + '.' + _0x40881d[0x1] + '.' + _0x40881d[0x2] + '.' + _0x40881d[0x3];
            else {
                if (_0x3628e1 === 0x1c && _0x3ffd16 === 0x10) {
                    const _0x4222f1 = [];
                    for (let _0x45ed6a = 0x0; _0x45ed6a < 0x10; _0x45ed6a += 0x2)
                        _0x4222f1[_0x4af683(0x4a8)]((_0x40881d[_0x45ed6a] << 0x8 | _0x40881d[_0x45ed6a + 0x1])[_0x4af683(0x592)](0x10));
                    _0x578cc8 = _0x4222f1[_0x4af683(0x4f1)](':');
                } else {
                    if (_0x3628e1 === 0x10) {
                        let _0x555af6 = 0x0;
                        const _0x380a62 = [];
                        while (_0x555af6 < _0x3ffd16) {
                            const _0xd785d8 = _0x40881d[_0x555af6++];
                            _0x380a62[_0x4af683(0x4a8)](new TextDecoder()['decode'](_0x40881d[_0x4af683(0x548)](_0x555af6, _0x555af6 + _0xd785d8))), _0x555af6 += _0xd785d8;
                        }
                        _0x578cc8 = _0x380a62[_0x4af683(0x4f1)]('');
                    } else {
                        if (_0x3628e1 === 0x5) {
                            const [_0x4b699a] = _0x4a6419(_0x4fd95f - _0x3ffd16);
                            _0x578cc8 = _0x4b699a;
                        } else
                            _0x578cc8 = Array[_0x4af683(0x351)](_0x40881d)[_0x4af683(0x2a7)](_0x446547 => _0x446547[_0x4af683(0x592)](0x10)[_0x4af683(0x218)](0x2, '0'))['join']('');
                    }
                }
            }
            _0xefdb8f[_0x4af683(0x4a8)]({
                'name': _0x167d8b,
                'type': _0x3628e1,
                'TTL': _0x155e67,
                'data': _0x578cc8,
                'rdata': _0x40881d
            });
        }
        const _0x30c811 = (performance[_0x4af683(0x1e0)]() - _0x352420)[_0x4af683(0x4a9)](0x2);
        log(_0x4af683(0x584) + _0x3b3031 + '\x20' + _0x29071a + _0x4af683(0x1c5) + _0x146110 + '\x20' + _0x30c811 + _0x4af683(0x350) + _0xefdb8f['length'] + _0x4af683(0x4ac) + (_0xefdb8f['length'] > 0x0 ? '\x0a' + _0xefdb8f[_0x4af683(0x2a7)]((_0x3e6186, _0x2f6ea2) => '\x20\x20' + (_0x2f6ea2 + 0x1) + '.\x20' + _0x3e6186[_0x4af683(0x1b6)] + '\x20type=' + _0x3e6186['type'] + _0x4af683(0x429) + _0x3e6186['TTL'] + _0x4af683(0x631) + _0x3e6186[_0x4af683(0x25c)])[_0x4af683(0x4f1)]('\x0a') : ''));
        const _0x4b75a9 = _0xefdb8f[_0x4af683(0x216)](_0x55b5a8 => _0x55b5a8[_0x4af683(0x3c6)] === _0x14699f), _0x5a3a9f = _0x4b75a9[_0x4af683(0x292)] > 0x0 ? Math['min'](..._0x4b75a9[_0x4af683(0x2a7)](_0x5a2ff0 => _0x5a2ff0['TTL'])) : 0x0, _0x3ef7dc = Math['max'](_0x5a3a9f, 0x5 * 0x3c), _0x1a1d02 = Date[_0x4af683(0x1e0)]() + _0x3ef7dc * 0x3e8, _0x29352f = _0x4b75a9[_0x4af683(0x2a7)](_0x57bd72 => _0x57bd72['data']);
        if (_0x29352f[_0x4af683(0x292)] > 0x0 || _0xefdb8f[_0x4af683(0x292)] === 0x0) {
            if (Object[_0x4af683(0x621)](DoH缓存)[_0x4af683(0x292)] >= DoH缓存最大条目) {
                const _0x2705c6 = Date[_0x4af683(0x1e0)]();
                for (const [_0x5a6523, _0x25cf6f] of Object[_0x4af683(0x514)](DoH缓存)) {
                    if (_0x2705c6 >= _0x25cf6f[_0x4af683(0x230)])
                        delete DoH缓存[_0x5a6523];
                }
                Object[_0x4af683(0x621)](DoH缓存)[_0x4af683(0x292)] >= DoH缓存最大条目 && delete DoH缓存[Object[_0x4af683(0x621)](DoH缓存)[0x0]];
            }
            DoH缓存[_0x188cc3] = {
                'data': _0x29352f,
                '过期时间': _0x1a1d02
            }, log('[DoH查询]\x20写入缓存\x20' + _0x3b3031 + '\x20' + _0x29071a + _0x4af683(0x429) + _0x3ef7dc + 's' + (_0x29352f[_0x4af683(0x292)] === 0x0 ? _0x4af683(0x449) : ''));
        }
        return _0xefdb8f;
    } catch (_0x3ac47d) {
        const _0x2dccaf = (performance[_0x4af683(0x1e0)]() - _0x352420)[_0x4af683(0x4a9)](0x2);
        return console[_0x4af683(0x35f)](_0x4af683(0x2bf) + _0x3b3031 + '\x20' + _0x29071a + _0x4af683(0x1c5) + _0x146110 + '\x20' + _0x2dccaf + _0x4af683(0x609), _0x3ac47d), [];
    }
}
async function 读取config_JSON(env, _0x5daee8, _0xa67b26, _0x844466 = a0_0x43d2af(0x61b), _0x4039be = ![]) {
    const _0xbc3bc8 = a0_0x43d2af, _0x2d6577 = 特征码字典[0x0], _0x1e56c9 = _0x5daee8, _0x2cf005 = _0xbc3bc8(0x430), _0x312aa2 = _0xbc3bc8(0x52c), _0x87880f = '{{IP:PORT}}', _0x12cfd8 = performance[_0xbc3bc8(0x1e0)](), _0x569aa9 = {
            'TIME': new Date()[_0xbc3bc8(0x69c)](),
            'HOST': _0x1e56c9,
            'HOSTS': [_0x5daee8],
            'UUID': _0xa67b26,
            'PATH': '/',
            'ALPN': '',
            '协议类型': 'v' + 'le' + 'ss',
            '传输协议': 'ws',
            'gRPC模式': 'gun',
            'gRPCUserAgent': _0x844466,
            '跳过证书验证': ![],
            '启用0RTT': ![],
            'TLS分片': null,
            '随机路径': ![],
            'ECH': ![],
            'ECHConfig': {
                'DNS': _0x2cf005,
                'SNI': _0x312aa2
            },
            'SS': {
                '加密方式': _0xbc3bc8(0x1df),
                'TLS': !![]
            },
            'Fingerprint': _0xbc3bc8(0x3ed),
            '优选订阅生成': {
                'local': !![],
                '本地IP库': {
                    '随机IP': !![],
                    '随机数量': 0x10,
                    '指定端口': -0x1
                },
                'SUB': null,
                'SUBNAME': 'edge' + _0xbc3bc8(0x66e),
                'SUBUpdateTime': 0x3,
                'TOKEN': await MD5MD5(_0x5daee8 + _0xa67b26)
            },
            '订阅转换配置': {
                'SUBAPI': 'https://SUBAPI.' + 特征码字典[0x1] + _0xbc3bc8(0x437),
                'SUBCONFIG': _0xbc3bc8(0x3de) + 特征码字典[0x1] + _0xbc3bc8(0x51c),
                'SUBEMOJI': ![],
                'SUBLIST': ![],
                'UDP': ![],
                'XUDP': ![],
                'TLS13': ![],
                'APPEND_TYPE': ![],
                'SORT': ![],
                'EXPAND': !![]
            },
            '反代': {
                [_0x2d6577]: 'auto',
                'SOCKS5': {
                    '启用': null,
                    '全局': ![],
                    '账号': '',
                    '白名单': SOCKS5白名单
                },
                '路径模板': {
                    [_0x2d6577]: _0xbc3bc8(0x62c) + _0x87880f,
                    'SOCKS5': {
                        '全局': _0xbc3bc8(0x4bd) + _0x87880f,
                        '标准': 'socks5=' + _0x87880f
                    },
                    'HTTP': {
                        '全局': 'http://' + _0x87880f,
                        '标准': 'http=' + _0x87880f
                    },
                    'HTTPS': {
                        '全局': _0xbc3bc8(0x22a) + _0x87880f,
                        '标准': _0xbc3bc8(0x541) + _0x87880f
                    },
                    'TURN': {
                        '全局': 'turn://' + _0x87880f,
                        '标准': _0xbc3bc8(0x482) + _0x87880f
                    },
                    'SSTP': {
                        '全局': _0xbc3bc8(0x465) + _0x87880f,
                        '标准': _0xbc3bc8(0x655) + _0x87880f
                    }
                }
            },
            'TG': {
                '启用': ![],
                'BotToken': null,
                'ChatID': null
            },
            'CF': {
                'Email': null,
                'GlobalAPIKey': null,
                'AccountID': null,
                'APIToken': null,
                'UsageAPI': null,
                'Usage': {
                    'success': ![],
                    'pages': 0x0,
                    'workers': 0x0,
                    'total': 0x0,
                    'max': 0x186a0
                }
            }
        };
    try {
        let _0x4c519a = await env['KV'][_0xbc3bc8(0x257)]('config.json');
        !_0x4c519a || _0x4039be == !![] ? (await env['KV'][_0xbc3bc8(0x399)](_0xbc3bc8(0x26e), JSON[_0xbc3bc8(0x510)](_0x569aa9, null, 0x2)), config_JSON = _0x569aa9) : config_JSON = JSON[_0xbc3bc8(0x468)](_0x4c519a);
    } catch (_0x21af60) {
        console[_0xbc3bc8(0x35f)](_0xbc3bc8(0x51d) + _0x21af60[_0xbc3bc8(0x385)]), config_JSON = _0x569aa9;
    }
    if (!config_JSON[_0xbc3bc8(0x337)]['SUBLIST'])
        config_JSON[_0xbc3bc8(0x337)]['SUBLIST'] = ![];
    if (!config_JSON['订阅转换配置']['UDP'])
        config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x4fc)] = ![];
    if (!config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x3fa)])
        config_JSON[_0xbc3bc8(0x337)]['XUDP'] = ![];
    if (!config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x213)])
        config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x213)] = ![];
    if (!config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x5bd)])
        config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x5bd)] = ![];
    if (!config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x32c)])
        config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x32c)] = ![];
    if (typeof config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x4c6)] !== _0xbc3bc8(0x650))
        config_JSON[_0xbc3bc8(0x337)][_0xbc3bc8(0x4c6)] = !![];
    if (!config_JSON['gRPCUserAgent'])
        config_JSON[_0xbc3bc8(0x21a)] = _0x844466;
    config_JSON[_0xbc3bc8(0x657)] = _0x1e56c9;
    if (!config_JSON[_0xbc3bc8(0x498)])
        config_JSON[_0xbc3bc8(0x498)] = [_0x5daee8];
    if (env['HOST'])
        config_JSON[_0xbc3bc8(0x498)] = (await 整理成数组(env['HOST']))[_0xbc3bc8(0x2a7)](_0xee08a7 => _0xee08a7[_0xbc3bc8(0x486)]()['replace'](/^https?:\/\//, '')[_0xbc3bc8(0x492)]('/')[0x0][_0xbc3bc8(0x492)](':')[0x0]);
    config_JSON[_0xbc3bc8(0x1bb)] = _0xa67b26;
    if (!config_JSON['随机路径'])
        config_JSON['随机路径'] = ![];
    if (!config_JSON[_0xbc3bc8(0x3b6)])
        config_JSON[_0xbc3bc8(0x3b6)] = ![];
    if (env[_0xbc3bc8(0x2ed)])
        config_JSON['PATH'] = env[_0xbc3bc8(0x2ed)][_0xbc3bc8(0x661)]('/') ? env[_0xbc3bc8(0x2ed)] : '/' + env[_0xbc3bc8(0x2ed)];
    else {
        if (!config_JSON[_0xbc3bc8(0x2ed)])
            config_JSON[_0xbc3bc8(0x2ed)] = '/';
    }
    if (!config_JSON[_0xbc3bc8(0x23f)])
        config_JSON[_0xbc3bc8(0x23f)] = '';
    if (!config_JSON[_0xbc3bc8(0x60b)])
        config_JSON[_0xbc3bc8(0x60b)] = _0xbc3bc8(0x472);
    if (!config_JSON['SS'])
        config_JSON['SS'] = {
            '加密方式': 'aes-128-gcm',
            'TLS': ![]
        };
    !config_JSON['反代'][_0xbc3bc8(0x1ef)]?.[_0x2d6577] && (config_JSON['反代'][_0xbc3bc8(0x1ef)] = {
        [_0x2d6577]: _0xbc3bc8(0x62c) + _0x87880f,
        'SOCKS5': {
            '全局': _0xbc3bc8(0x4bd) + _0x87880f,
            '标准': _0xbc3bc8(0x5e8) + _0x87880f
        },
        'HTTP': {
            '全局': _0xbc3bc8(0x58e) + _0x87880f,
            '标准': _0xbc3bc8(0x2b7) + _0x87880f
        },
        'HTTPS': {
            '全局': _0xbc3bc8(0x22a) + _0x87880f,
            '标准': _0xbc3bc8(0x541) + _0x87880f
        },
        'TURN': {
            '全局': _0xbc3bc8(0x47d) + _0x87880f,
            '标准': _0xbc3bc8(0x482) + _0x87880f
        },
        'SSTP': {
            '全局': _0xbc3bc8(0x465) + _0x87880f,
            '标准': _0xbc3bc8(0x655) + _0x87880f
        }
    });
    if (!config_JSON['反代'][_0xbc3bc8(0x1ef)][_0xbc3bc8(0x29f)])
        config_JSON['反代'][_0xbc3bc8(0x1ef)][_0xbc3bc8(0x29f)] = {
            '全局': _0xbc3bc8(0x22a) + _0x87880f,
            '标准': 'https=' + _0x87880f
        };
    if (!config_JSON['反代']['路径模板'][_0xbc3bc8(0x47a)])
        config_JSON['反代'][_0xbc3bc8(0x1ef)][_0xbc3bc8(0x47a)] = {
            '全局': _0xbc3bc8(0x47d) + _0x87880f,
            '标准': _0xbc3bc8(0x482) + _0x87880f
        };
    if (!config_JSON['反代'][_0xbc3bc8(0x1ef)][_0xbc3bc8(0x64e)])
        config_JSON['反代'][_0xbc3bc8(0x1ef)][_0xbc3bc8(0x64e)] = {
            '全局': _0xbc3bc8(0x465) + _0x87880f,
            '标准': _0xbc3bc8(0x655) + _0x87880f
        };
    const _0x158473 = config_JSON['反代'][_0xbc3bc8(0x1ef)][config_JSON['反代'][_0xbc3bc8(0x5e3)]['启用']?.['toUpperCase']()];
    let _0x375979 = '';
    if (_0x158473 && config_JSON['反代']['SOCKS5']['账号'])
        _0x375979 = (config_JSON['反代']['SOCKS5']['全局'] ? _0x158473['全局'] : _0x158473['标准'])[_0xbc3bc8(0x680)](_0x87880f, config_JSON['反代']['SOCKS5']['账号']);
    else {
        if (config_JSON['反代'][_0x2d6577] !== _0xbc3bc8(0x2d4))
            _0x375979 = config_JSON['反代']['路径模板'][_0x2d6577]['replace'](_0x87880f, config_JSON['反代'][_0x2d6577]);
    }
    let _0x3ce8fa = '';
    if (_0x375979['includes']('?')) {
        const [_0x19574d, _0x599225] = _0x375979[_0xbc3bc8(0x492)]('?');
        _0x375979 = _0x19574d, _0x3ce8fa = _0x599225;
    }
    config_JSON[_0xbc3bc8(0x2ed)] = config_JSON[_0xbc3bc8(0x2ed)][_0xbc3bc8(0x680)](_0x375979, '')[_0xbc3bc8(0x680)]('//', '/');
    const _0x3636d0 = config_JSON[_0xbc3bc8(0x2ed)] === '/' ? '' : config_JSON[_0xbc3bc8(0x2ed)][_0xbc3bc8(0x680)](/\/+(?=\?|$)/, '')[_0xbc3bc8(0x680)](/\/+$/, ''), [_0x3a7ca5, ..._0x41429a] = _0x3636d0[_0xbc3bc8(0x492)]('?'), _0x597a4c = _0x41429a[_0xbc3bc8(0x292)] ? '?' + _0x41429a['join']('?') : '', _0x4b4c55 = _0x3ce8fa ? _0x597a4c ? _0x597a4c + '&' + _0x3ce8fa : '?' + _0x3ce8fa : _0x597a4c;
    config_JSON[_0xbc3bc8(0x39c)] = (_0x3a7ca5 || '/') + (_0x3a7ca5 && _0x375979 ? '/' : '') + _0x375979 + _0x4b4c55 + (config_JSON[_0xbc3bc8(0x3b6)] ? (_0x4b4c55 ? '&' : '?') + 'ed=2560' : '');
    if (!config_JSON[_0xbc3bc8(0x551)] && config_JSON[_0xbc3bc8(0x551)] !== null)
        config_JSON[_0xbc3bc8(0x551)] = null;
    const _0x250938 = config_JSON[_0xbc3bc8(0x551)] == _0xbc3bc8(0x57a) ? _0xbc3bc8(0x400) + encodeURIComponent(_0xbc3bc8(0x444)) : config_JSON[_0xbc3bc8(0x551)] == 'Happ' ? _0xbc3bc8(0x400) + encodeURIComponent(_0xbc3bc8(0x1e4)) : '';
    if (!config_JSON[_0xbc3bc8(0x69e)])
        config_JSON[_0xbc3bc8(0x69e)] = _0xbc3bc8(0x3ed);
    if (!config_JSON['ECH'])
        config_JSON[_0xbc3bc8(0x3d3)] = ![];
    if (!config_JSON[_0xbc3bc8(0x3fd)])
        config_JSON[_0xbc3bc8(0x3fd)] = {
            'DNS': _0x2cf005,
            'SNI': _0x312aa2
        };
    const _0x2dce97 = config_JSON[_0xbc3bc8(0x3d3)] ? _0xbc3bc8(0x1c4) + encodeURIComponent((config_JSON[_0xbc3bc8(0x3fd)]['SNI'] ? config_JSON[_0xbc3bc8(0x3fd)][_0xbc3bc8(0x3ec)] + '+' : '') + config_JSON[_0xbc3bc8(0x3fd)]['DNS']) : '', {
            type: _0x430362,
            路径字段名: _0x2ad3cb,
            域名字段名: _0x16b8f3
        } = 获取传输协议配置(config_JSON), _0x406588 = 获取传输路径参数值(config_JSON, config_JSON[_0xbc3bc8(0x39c)]);
    config_JSON['LINK'] = config_JSON[_0xbc3bc8(0x4ff)] === 'ss' ? config_JSON[_0xbc3bc8(0x4ff)] + _0xbc3bc8(0x248) + btoa(config_JSON['SS'][_0xbc3bc8(0x637)] + ':' + _0xa67b26) + '@' + _0x1e56c9 + ':' + (config_JSON['SS'][_0xbc3bc8(0x600)] ? _0xbc3bc8(0x35a) : '80') + '?plugin=v2' + (encodeURIComponent('ray-plugin;mode=websocket;host=' + _0x1e56c9 + _0xbc3bc8(0x56a) + ((config_JSON[_0xbc3bc8(0x39c)][_0xbc3bc8(0x68e)]('?') ? config_JSON[_0xbc3bc8(0x39c)][_0xbc3bc8(0x680)]('?', _0xbc3bc8(0x618) + config_JSON['SS'][_0xbc3bc8(0x637)] + '&') : config_JSON[_0xbc3bc8(0x39c)] + _0xbc3bc8(0x618) + config_JSON['SS'][_0xbc3bc8(0x637)]) + (config_JSON['SS']['TLS'] ? ';tls' : '')) + ';mux=0') + _0x2dce97) + '#' + encodeURIComponent(config_JSON['优选订阅生成'][_0xbc3bc8(0x346)]) : config_JSON['协议类型'] + _0xbc3bc8(0x248) + _0xa67b26 + '@' + _0x1e56c9 + _0xbc3bc8(0x5a6) + (_0x430362 + _0x2dce97) + '&' + _0x16b8f3 + '=' + _0x1e56c9 + '&fp=' + config_JSON[_0xbc3bc8(0x69e)] + _0xbc3bc8(0x2be) + _0x1e56c9 + '&' + _0x2ad3cb + '=' + (encodeURIComponent(_0x406588) + _0x250938) + _0xbc3bc8(0x37f) + encodeURIComponent(config_JSON['优选订阅生成'][_0xbc3bc8(0x346)]), config_JSON[_0xbc3bc8(0x2a2)]['TOKEN'] = await MD5MD5(_0x5daee8 + _0xa67b26);
    const _0x295ffe = {
        'BotToken': null,
        'ChatID': null
    };
    config_JSON['TG'] = {
        '启用': config_JSON['TG']['启用'] ? config_JSON['TG']['启用'] : ![],
        ..._0x295ffe
    };
    try {
        const _0x3b8a87 = await env['KV'][_0xbc3bc8(0x257)](_0xbc3bc8(0x3f3));
        if (!_0x3b8a87)
            await env['KV'][_0xbc3bc8(0x399)](_0xbc3bc8(0x3f3), JSON[_0xbc3bc8(0x510)](_0x295ffe, null, 0x2));
        else {
            const _0x29be23 = JSON[_0xbc3bc8(0x468)](_0x3b8a87);
            config_JSON['TG'][_0xbc3bc8(0x4d2)] = _0x29be23[_0xbc3bc8(0x4d2)] ? _0x29be23[_0xbc3bc8(0x4d2)] : null, config_JSON['TG'][_0xbc3bc8(0x4f9)] = _0x29be23[_0xbc3bc8(0x4f9)] ? 掩码敏感信息(_0x29be23[_0xbc3bc8(0x4f9)]) : null;
        }
    } catch (_0x57abb6) {
        console[_0xbc3bc8(0x35f)](_0xbc3bc8(0x5d2) + _0x57abb6[_0xbc3bc8(0x385)]);
    }
    const _0x42f30c = {
        'Email': null,
        'GlobalAPIKey': null,
        'AccountID': null,
        'APIToken': null,
        'UsageAPI': null
    };
    config_JSON['CF'] = {
        ..._0x42f30c,
        'Usage': {
            'success': ![],
            'pages': 0x0,
            'workers': 0x0,
            'total': 0x0,
            'max': 0x186a0
        }
    };
    try {
        const _0xecd2b = await env['KV'][_0xbc3bc8(0x257)](_0xbc3bc8(0x1bc));
        if (!_0xecd2b)
            await env['KV'][_0xbc3bc8(0x399)]('cf.json', JSON[_0xbc3bc8(0x510)](_0x42f30c, null, 0x2));
        else {
            const _0x3e95b1 = JSON[_0xbc3bc8(0x468)](_0xecd2b);
            if (_0x3e95b1[_0xbc3bc8(0x1fe)])
                try {
                    const _0x37e732 = await fetch(_0x3e95b1[_0xbc3bc8(0x1fe)]), _0x5515af = await _0x37e732['json']();
                    config_JSON['CF']['Usage'] = _0x5515af;
                } catch (_0x2f432e) {
                    console[_0xbc3bc8(0x35f)](_0xbc3bc8(0x489) + _0x2f432e[_0xbc3bc8(0x385)]);
                }
            else {
                config_JSON['CF'][_0xbc3bc8(0x670)] = _0x3e95b1[_0xbc3bc8(0x670)] ? _0x3e95b1[_0xbc3bc8(0x670)] : null, config_JSON['CF']['GlobalAPIKey'] = _0x3e95b1[_0xbc3bc8(0x24c)] ? 掩码敏感信息(_0x3e95b1[_0xbc3bc8(0x24c)]) : null, config_JSON['CF'][_0xbc3bc8(0x5d3)] = _0x3e95b1[_0xbc3bc8(0x5d3)] ? 掩码敏感信息(_0x3e95b1[_0xbc3bc8(0x5d3)]) : null, config_JSON['CF'][_0xbc3bc8(0x245)] = _0x3e95b1[_0xbc3bc8(0x245)] ? 掩码敏感信息(_0x3e95b1[_0xbc3bc8(0x245)]) : null, config_JSON['CF']['UsageAPI'] = null;
                const _0xb008b3 = await getCloudflareUsage(_0x3e95b1[_0xbc3bc8(0x670)], _0x3e95b1[_0xbc3bc8(0x24c)], _0x3e95b1[_0xbc3bc8(0x5d3)], _0x3e95b1[_0xbc3bc8(0x245)]);
                config_JSON['CF'][_0xbc3bc8(0x200)] = _0xb008b3;
            }
        }
    } catch (_0x52a2ba) {
        console[_0xbc3bc8(0x35f)]('读取cf.json出错:\x20' + _0x52a2ba[_0xbc3bc8(0x385)]);
    }
    return config_JSON[_0xbc3bc8(0x396)] = (performance[_0xbc3bc8(0x1e0)]() - _0x12cfd8)[_0xbc3bc8(0x4a9)](0x2) + 'ms', config_JSON;
}
function 识别运营商(request) {
    const _0x5d5245 = a0_0x43d2af, _0x287390 = request?.['cf'], _0x17300b = {
            '4134': 'ct',
            '4809': 'ct',
            '4811': 'ct',
            '4812': 'ct',
            '4815': 'ct',
            '4837': 'cu',
            '4814': 'cu',
            '9929': 'cu',
            '17623': 'cu',
            '17816': 'cu',
            '9808': _0x5d5245(0x51b),
            '24400': _0x5d5245(0x51b),
            '56040': _0x5d5245(0x51b),
            '56041': _0x5d5245(0x51b),
            '56044': _0x5d5245(0x51b)
        }, _0x2c7fc7 = [
            {
                'code': 'ct',
                'pattern': /chinanet|chinatelecom|china telecom|cn2|shtel/
            },
            {
                'code': _0x5d5245(0x51b),
                'pattern': /cmi|cmnet|chinamobile|china mobile|cmcc|mobile communications/
            },
            {
                'code': 'cu',
                'pattern': /china169|china unicom|chinaunicom|cucc|cncgroup|cuii|netcom/
            }
        ];
    if (String(_0x287390?.['country'] || '')[_0x5d5245(0x486)]() !== 'cn')
        return 'cf';
    const _0xb5c830 = String(_0x287390?.[_0x5d5245(0x595)] || '')[_0x5d5245(0x486)](), _0x352f7a = _0x2c7fc7[_0x5d5245(0x204)](({pattern: _0xf476ba}) => _0xf476ba[_0x5d5245(0x247)](_0xb5c830))?.['code'];
    return _0x352f7a || _0x17300b[String(_0x287390?.[_0x5d5245(0x3b1)] || '')] || 'cf';
}
async function 生成随机IP(request, _0x49bdc7 = 0x10, _0xc34325 = -0x1) {
    const _0x89eefa = a0_0x43d2af, _0x4842cc = new URL(request['url']), _0x537fdc = String(_0x4842cc[_0x89eefa(0x598)][_0x89eefa(0x257)](_0x89eefa(0x586)) || '')[_0x89eefa(0x486)](), _0x31111b = [
            'ct',
            'cu',
            _0x89eefa(0x51b),
            'cf'
        ][_0x89eefa(0x68e)](_0x537fdc) ? _0x537fdc : 识别运营商(request), _0x2c689f = {
            'cmcc': _0x89eefa(0x23a),
            'cu': _0x89eefa(0x5f9),
            'ct': _0x89eefa(0x49e),
            'cf': _0x89eefa(0x391)
        }, _0x242698 = _0x31111b === 'cf' ? _0x89eefa(0x3de) + 特征码字典[0x1] + '/' + 特征码字典[0x1] + _0x89eefa(0x695) : _0x89eefa(0x3de) + 特征码字典[0x1] + '/' + 特征码字典[0x1] + _0x89eefa(0x208) + _0x31111b + _0x89eefa(0x40f), _0x449cb9 = _0x2c689f[_0x31111b] || _0x89eefa(0x391), _0x416cc0 = [
            0x1bb,
            0x805,
            0x823,
            0x827,
            0x830,
            0x20fb
        ];
    let _0x3de9d0 = [];
    try {
        const _0x491024 = await fetch(_0x242698);
        _0x3de9d0 = _0x491024['ok'] ? await 整理成数组(await _0x491024[_0x89eefa(0x66c)]()) : [_0x89eefa(0x51f)];
    } catch {
        _0x3de9d0 = [_0x89eefa(0x51f)];
    }
    const _0x4950c7 = _0x4322a6 => {
            const _0x2b2793 = _0x89eefa, [_0x57aa4f, _0x78b6ea] = _0x4322a6[_0x2b2793(0x492)]('/'), _0x3267fd = parseInt(_0x78b6ea), _0x48bc67 = 0x20 - _0x3267fd, _0xe5470d = _0x57aa4f[_0x2b2793(0x492)]('.')[_0x2b2793(0x394)]((_0x943a99, _0x282e43, _0x4cbbc1) => _0x943a99 | parseInt(_0x282e43) << 0x18 - _0x4cbbc1 * 0x8, 0x0), _0x139090 = Math[_0x2b2793(0x2eb)](Math[_0x2b2793(0x3eb)]() * Math[_0x2b2793(0x321)](0x2, _0x48bc67)), _0x1955dc = 0xffffffff << _0x48bc67 >>> 0x0, _0x41e78f = ((_0xe5470d & _0x1955dc) >>> 0x0) + _0x139090 >>> 0x0;
            return [
                _0x41e78f >>> 0x18 & 0xff,
                _0x41e78f >>> 0x10 & 0xff,
                _0x41e78f >>> 0x8 & 0xff,
                _0x41e78f & 0xff
            ][_0x2b2793(0x4f1)]('.');
        }, _0x1bda03 = Array[_0x89eefa(0x351)]({ 'length': _0x49bdc7 }, (_0x3ba315, _0x5d1c5e) => {
            const _0x44891c = _0x89eefa, _0x4d2889 = _0x4950c7(_0x3de9d0[Math[_0x44891c(0x2eb)](Math[_0x44891c(0x3eb)]() * _0x3de9d0[_0x44891c(0x292)])]), _0x556584 = _0xc34325 === -0x1 ? _0x416cc0[Math[_0x44891c(0x2eb)](Math[_0x44891c(0x3eb)]() * _0x416cc0[_0x44891c(0x292)])] : _0xc34325;
            return _0x4d2889 + ':' + _0x556584 + '#' + _0x449cb9 + (_0x5d1c5e + 0x1);
        });
    return [
        _0x1bda03,
        _0x1bda03[_0x89eefa(0x4f1)]('\x0a')
    ];
}
async function 整理成数组(_0x1ac2a0) {
    const _0x26ef06 = a0_0x43d2af;
    var _0x162226 = _0x1ac2a0[_0x26ef06(0x680)](/[	"'\r\n]+/g, ',')['replace'](/,+/g, ',');
    if (_0x162226[_0x26ef06(0x390)](0x0) == ',')
        _0x162226 = _0x162226[_0x26ef06(0x548)](0x1);
    if (_0x162226[_0x26ef06(0x390)](_0x162226['length'] - 0x1) == ',')
        _0x162226 = _0x162226[_0x26ef06(0x548)](0x0, _0x162226[_0x26ef06(0x292)] - 0x1);
    const _0x50d643 = _0x162226[_0x26ef06(0x492)](',');
    return _0x50d643;
}
async function 获取优选订阅生成器数据(_0x3f629f, _0x27b52f = a0_0x43d2af(0x542)) {
    const _0x322d98 = a0_0x43d2af;
    let _0x75b990 = [], _0x67a2eb = '', _0x454db7 = _0x3f629f[_0x322d98(0x680)](/^sub:\/\//i, 'https://')[_0x322d98(0x492)]('#')[0x0][_0x322d98(0x492)]('?')[0x0];
    if (!/^https?:\/\//i[_0x322d98(0x247)](_0x454db7))
        _0x454db7 = 'https://' + _0x454db7;
    try {
        const _0xc7e9c2 = new URL(_0x454db7);
        _0x454db7 = _0xc7e9c2[_0x322d98(0x5dc)];
    } catch (_0x2c097a) {
        return _0x75b990['push'](_0x322d98(0x4ea) + _0x3f629f + _0x322d98(0x497) + _0x2c097a[_0x322d98(0x385)]), [
            _0x75b990,
            _0x67a2eb
        ];
    }
    const _0x4abbaa = _0x454db7 + _0x322d98(0x53b);
    try {
        const _0x2e7733 = await fetch(_0x4abbaa, { 'headers': { 'User-Agent': 汇聚订阅_UA + _0x322d98(0x22b) + _0x27b52f + _0x322d98(0x561) + EDT_版本号 } });
        if (!_0x2e7733['ok'])
            return _0x75b990[_0x322d98(0x4a8)](_0x322d98(0x4ea) + _0x3f629f + '优选订阅生成器异常:' + _0x2e7733[_0x322d98(0x417)]), [
                _0x75b990,
                _0x67a2eb
            ];
        const _0x1ac746 = atob(await _0x2e7733[_0x322d98(0x66c)]()), _0x472671 = _0x1ac746[_0x322d98(0x68e)]('\x0d\x0a') ? _0x1ac746[_0x322d98(0x492)]('\x0d\x0a') : _0x1ac746[_0x322d98(0x492)]('\x0a');
        for (const _0x49c1b3 of _0x472671) {
            if (!_0x49c1b3[_0x322d98(0x55a)]())
                continue;
            if (_0x49c1b3[_0x322d98(0x68e)](_0x322d98(0x3b3)) && _0x49c1b3['includes'](_0x322d98(0x459))) {
                const _0x2e2a8b = _0x49c1b3[_0x322d98(0x5f7)](/:\/\/[^@]+@([^?]+)/);
                if (_0x2e2a8b) {
                    let _0x12edba = _0x2e2a8b[0x1], _0x14e813 = '';
                    const _0x4e6316 = _0x49c1b3[_0x322d98(0x5f7)](/#(.+)$/);
                    if (_0x4e6316)
                        _0x14e813 = '#' + decodeURIComponent(_0x4e6316[0x1]);
                    _0x75b990['push'](_0x12edba + _0x14e813);
                }
            } else
                _0x67a2eb += _0x49c1b3 + '\x0a';
        }
    } catch (_0x4041a9) {
        _0x75b990['push'](_0x322d98(0x4ea) + _0x3f629f + _0x322d98(0x2c8) + _0x4041a9[_0x322d98(0x385)]);
    }
    return [
        _0x75b990,
        _0x67a2eb
    ];
}
async function 请求优选API(_0x256ad9, _0x5c6ee5 = a0_0x43d2af(0x35a), _0x413451 = '000000', _0x1207a3 = 0xbb8) {
    const _0x1e171c = a0_0x43d2af;
    if (!_0x256ad9?.[_0x1e171c(0x292)])
        return [
            [],
            [],
            [],
            []
        ];
    const _0x7b0bb4 = new Set(), _0x3c886a = new Set();
    let _0x576f9d = '', _0x5a5d19 = [];
    await Promise[_0x1e171c(0x46a)](_0x256ad9[_0x1e171c(0x2a7)](async _0x5d875d => {
        const _0x3febd6 = _0x1e171c, _0x2e1855 = _0x5d875d[_0x3febd6(0x413)]('#'), _0x819602 = _0x2e1855 > -0x1 ? _0x5d875d[_0x3febd6(0x25d)](0x0, _0x2e1855) : _0x5d875d, _0x5b9822 = _0x2e1855 > -0x1 ? decodeURIComponent(_0x5d875d['substring'](_0x2e1855 + 0x1)) : null, _0x50b4e9 = _0x5d875d[_0x3febd6(0x486)]()[_0x3febd6(0x68e)](_0x3febd6(0x2a8));
        if (_0x819602[_0x3febd6(0x486)]()[_0x3febd6(0x661)](_0x3febd6(0x2cb))) {
            try {
                const [_0x4b6833, _0x2b6f23] = await 获取优选订阅生成器数据(_0x819602, _0x413451);
                if (_0x5b9822)
                    for (const _0x37698e of _0x4b6833) {
                        const _0x5c5982 = _0x37698e[_0x3febd6(0x68e)]('#') ? _0x37698e + '\x20[' + _0x5b9822 + ']' : _0x37698e + '#[' + _0x5b9822 + ']';
                        _0x7b0bb4['add'](_0x5c5982);
                        if (_0x50b4e9)
                            _0x3c886a['add'](_0x37698e[_0x3febd6(0x492)]('#')[0x0]);
                    }
                else
                    for (const _0x5c6342 of _0x4b6833) {
                        _0x7b0bb4[_0x3febd6(0x5ee)](_0x5c6342);
                        if (_0x50b4e9)
                            _0x3c886a[_0x3febd6(0x5ee)](_0x5c6342[_0x3febd6(0x492)]('#')[0x0]);
                    }
                if (_0x2b6f23 && typeof _0x2b6f23 === _0x3febd6(0x615) && _0x5b9822) {
                    const _0x58a82d = _0x2b6f23[_0x3febd6(0x680)](/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi, (_0x164dd1, _0x116820, _0x55b469) => {
                        const _0x12b48b = _0x3febd6, _0x3f636d = _0x116820[_0x12b48b(0x68e)]('#') ? '' + _0x116820 + encodeURIComponent('\x20[' + _0x5b9822 + ']') : '' + _0x116820 + encodeURIComponent('#[' + _0x5b9822 + ']');
                        return '' + _0x3f636d + _0x55b469;
                    });
                    _0x576f9d += _0x58a82d;
                } else
                    _0x2b6f23 && typeof _0x2b6f23 === _0x3febd6(0x615) && (_0x576f9d += _0x2b6f23);
            } catch (_0x3aba70) {
            }
            return;
        }
        try {
            const _0x348aff = new AbortController(), _0x184b2b = setTimeout(() => _0x348aff[_0x3febd6(0x38c)](), _0x1207a3), _0x51bf33 = await fetch(_0x819602, {
                    'signal': _0x348aff[_0x3febd6(0x4d1)],
                    'headers': { 'User-Agent': 汇聚订阅_UA + _0x3febd6(0x22b) + _0x413451 + _0x3febd6(0x561) + EDT_版本号 }
                });
            clearTimeout(_0x184b2b);
            let _0x165912 = '';
            try {
                const _0x6bd939 = await _0x51bf33[_0x3febd6(0x393)](), _0x4cb9d7 = (_0x51bf33['headers'][_0x3febd6(0x257)](_0x3febd6(0x5fb)) || '')[_0x3febd6(0x486)](), _0x196c2b = _0x4cb9d7[_0x3febd6(0x5f7)](/charset=([^\s;]+)/i)?.[0x1]?.[_0x3febd6(0x486)]() || '';
                let _0x33b597 = [
                    _0x3febd6(0x409),
                    _0x3febd6(0x614)
                ];
                (_0x196c2b['includes']('gb') || _0x196c2b[_0x3febd6(0x68e)]('gbk') || _0x196c2b['includes'](_0x3febd6(0x614))) && (_0x33b597 = [
                    _0x3febd6(0x614),
                    'utf-8'
                ]);
                let _0x50242a = ![];
                for (const _0x537dc2 of _0x33b597) {
                    try {
                        const _0x3ea252 = new TextDecoder(_0x537dc2)[_0x3febd6(0x49a)](_0x6bd939);
                        if (_0x3ea252 && _0x3ea252[_0x3febd6(0x292)] > 0x0 && !_0x3ea252[_0x3febd6(0x68e)]('\ufffd')) {
                            _0x165912 = _0x3ea252, _0x50242a = !![];
                            break;
                        } else {
                            if (_0x3ea252 && _0x3ea252[_0x3febd6(0x292)] > 0x0)
                                continue;
                        }
                    } catch (_0x362294) {
                        continue;
                    }
                }
                !_0x50242a && (_0x165912 = await _0x51bf33['text']());
                if (!_0x165912 || _0x165912[_0x3febd6(0x55a)]()[_0x3febd6(0x292)] === 0x0)
                    return;
            } catch (_0x43d3ec) {
                console[_0x3febd6(0x35f)]('Failed\x20to\x20decode\x20response:', _0x43d3ec);
                return;
            }
            let _0x1e77dd = _0x165912;
            const _0x58a1bc = typeof _0x165912 === 'string' ? _0x165912[_0x3febd6(0x680)](/\s/g, '') : '';
            if (_0x58a1bc[_0x3febd6(0x292)] > 0x0 && _0x58a1bc[_0x3febd6(0x292)] % 0x4 === 0x0 && /^[A-Za-z0-9+/]+={0,2}$/[_0x3febd6(0x247)](_0x58a1bc))
                try {
                    const _0x3d7ff6 = new Uint8Array(atob(_0x58a1bc)[_0x3febd6(0x492)]('')['map'](_0x47ccc4 => _0x47ccc4['charCodeAt'](0x0)));
                    _0x1e77dd = new TextDecoder(_0x3febd6(0x409))[_0x3febd6(0x49a)](_0x3d7ff6);
                } catch {
                }
            if (_0x1e77dd[_0x3febd6(0x492)]('#')[0x0][_0x3febd6(0x68e)](_0x3febd6(0x248))) {
                if (_0x5b9822) {
                    const _0x8c0776 = _0x1e77dd[_0x3febd6(0x680)](/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi, (_0x2cca1c, _0x524fd2, _0xc055ce) => {
                        const _0x23a5d3 = _0x3febd6, _0x1ad182 = _0x524fd2[_0x23a5d3(0x68e)]('#') ? '' + _0x524fd2 + encodeURIComponent('\x20[' + _0x5b9822 + ']') : '' + _0x524fd2 + encodeURIComponent('#[' + _0x5b9822 + ']');
                        return '' + _0x1ad182 + _0xc055ce;
                    });
                    _0x576f9d += _0x8c0776 + '\x0a';
                } else
                    _0x576f9d += _0x1e77dd + '\x0a';
                return;
            }
            const _0x50829b = _0x165912[_0x3febd6(0x55a)]()[_0x3febd6(0x492)]('\x0a')[_0x3febd6(0x2a7)](_0xe886f8 => _0xe886f8[_0x3febd6(0x55a)]())[_0x3febd6(0x216)](_0x30b56d => _0x30b56d), _0x4baf6d = _0x50829b[_0x3febd6(0x292)] > 0x1 && _0x50829b[0x0][_0x3febd6(0x68e)](','), _0x574173 = /^[^\[\]]*:[^\[\]]*:[^\[\]]/, _0x463edc = new URL(_0x819602);
            if (!_0x4baf6d)
                _0x50829b[_0x3febd6(0x460)](_0x45d6fd => {
                    const _0x4c88fa = _0x3febd6, _0x333c39 = _0x45d6fd[_0x4c88fa(0x413)]('#'), [_0x3dbf5f, _0x13f64b] = _0x333c39 > -0x1 ? [
                            _0x45d6fd['substring'](0x0, _0x333c39),
                            _0x45d6fd[_0x4c88fa(0x25d)](_0x333c39)
                        ] : [
                            _0x45d6fd,
                            ''
                        ];
                    let _0x4b025b = ![];
                    if (_0x3dbf5f[_0x4c88fa(0x661)]('['))
                        _0x4b025b = /\]:(\d+)$/['test'](_0x3dbf5f);
                    else {
                        const _0x388649 = _0x3dbf5f['lastIndexOf'](':');
                        _0x4b025b = _0x388649 > -0x1 && /^\d+$/[_0x4c88fa(0x247)](_0x3dbf5f[_0x4c88fa(0x25d)](_0x388649 + 0x1));
                    }
                    const _0x51708c = _0x463edc[_0x4c88fa(0x598)]['get']('port') || _0x5c6ee5, _0x93dcef = _0x4b025b ? _0x45d6fd : _0x3dbf5f + ':' + _0x51708c + _0x13f64b;
                    if (_0x5b9822) {
                        const _0x809cff = _0x93dcef[_0x4c88fa(0x68e)]('#') ? _0x93dcef + '\x20[' + _0x5b9822 + ']' : _0x93dcef + '#[' + _0x5b9822 + ']';
                        _0x7b0bb4[_0x4c88fa(0x5ee)](_0x809cff);
                    } else
                        _0x7b0bb4[_0x4c88fa(0x5ee)](_0x93dcef);
                    if (_0x50b4e9)
                        _0x3c886a[_0x4c88fa(0x5ee)](_0x93dcef[_0x4c88fa(0x492)]('#')[0x0]);
                });
            else {
                const _0x12e997 = _0x50829b[0x0][_0x3febd6(0x492)](',')[_0x3febd6(0x2a7)](_0x515feb => _0x515feb[_0x3febd6(0x55a)]()), _0x15890b = _0x50829b[_0x3febd6(0x548)](0x1);
                if (_0x12e997[_0x3febd6(0x68e)](_0x3febd6(0x29e)) && _0x12e997[_0x3febd6(0x68e)]('端口') && _0x12e997[_0x3febd6(0x68e)](_0x3febd6(0x58a))) {
                    const _0x47bff2 = _0x12e997[_0x3febd6(0x413)](_0x3febd6(0x29e)), _0x1a64de = _0x12e997[_0x3febd6(0x413)]('端口'), _0x31cc34 = _0x12e997[_0x3febd6(0x413)]('国家') > -0x1 ? _0x12e997[_0x3febd6(0x413)]('国家') : _0x12e997[_0x3febd6(0x413)]('城市') > -0x1 ? _0x12e997['indexOf']('城市') : _0x12e997[_0x3febd6(0x413)](_0x3febd6(0x58a)), _0x303d88 = _0x12e997[_0x3febd6(0x413)](_0x3febd6(0x600));
                    _0x15890b['forEach'](_0x446e93 => {
                        const _0x3f078c = _0x3febd6, _0x2ad333 = _0x446e93['split'](',')[_0x3f078c(0x2a7)](_0x21f34b => _0x21f34b[_0x3f078c(0x55a)]());
                        if (_0x303d88 !== -0x1 && _0x2ad333[_0x303d88]?.['toLowerCase']() !== _0x3f078c(0x3dd))
                            return;
                        const _0x4f3fe1 = _0x574173[_0x3f078c(0x247)](_0x2ad333[_0x47bff2]) ? '[' + _0x2ad333[_0x47bff2] + ']' : _0x2ad333[_0x47bff2], _0x596df5 = _0x4f3fe1 + ':' + _0x2ad333[_0x1a64de] + '#' + _0x2ad333[_0x31cc34];
                        if (_0x5b9822) {
                            const _0x1aa689 = _0x596df5 + '\x20[' + _0x5b9822 + ']';
                            _0x7b0bb4[_0x3f078c(0x5ee)](_0x1aa689);
                        } else
                            _0x7b0bb4[_0x3f078c(0x5ee)](_0x596df5);
                        if (_0x50b4e9)
                            _0x3c886a[_0x3f078c(0x5ee)](_0x4f3fe1 + ':' + _0x2ad333[_0x1a64de]);
                    });
                } else {
                    if (_0x12e997[_0x3febd6(0x507)](_0x40a896 => _0x40a896[_0x3febd6(0x68e)]('IP')) && _0x12e997[_0x3febd6(0x507)](_0x3f212a => _0x3f212a['includes']('延迟')) && _0x12e997[_0x3febd6(0x507)](_0x2b427b => _0x2b427b[_0x3febd6(0x68e)](_0x3febd6(0x5f3)))) {
                        const _0x1632fd = _0x12e997[_0x3febd6(0x647)](_0x4f3e29 => _0x4f3e29[_0x3febd6(0x68e)]('IP')), _0x3527fe = _0x12e997['findIndex'](_0x288fdc => _0x288fdc[_0x3febd6(0x68e)]('延迟')), _0x214949 = _0x12e997[_0x3febd6(0x647)](_0x2d04d4 => _0x2d04d4[_0x3febd6(0x68e)](_0x3febd6(0x5f3))), _0x4f7991 = _0x463edc[_0x3febd6(0x598)][_0x3febd6(0x257)](_0x3febd6(0x4bb)) || _0x5c6ee5;
                        _0x15890b['forEach'](_0x2af402 => {
                            const _0x5baa34 = _0x3febd6, _0x25fc8b = _0x2af402['split'](',')[_0x5baa34(0x2a7)](_0x461961 => _0x461961[_0x5baa34(0x55a)]()), _0x37c15d = _0x574173[_0x5baa34(0x247)](_0x25fc8b[_0x1632fd]) ? '[' + _0x25fc8b[_0x1632fd] + ']' : _0x25fc8b[_0x1632fd], _0x450b7c = _0x37c15d + ':' + _0x4f7991 + '#CF优选\x20' + _0x25fc8b[_0x3527fe] + _0x5baa34(0x42b) + _0x25fc8b[_0x214949] + _0x5baa34(0x5f6);
                            if (_0x5b9822) {
                                const _0x3379aa = _0x450b7c + '\x20[' + _0x5b9822 + ']';
                                _0x7b0bb4[_0x5baa34(0x5ee)](_0x3379aa);
                            } else
                                _0x7b0bb4[_0x5baa34(0x5ee)](_0x450b7c);
                            if (_0x50b4e9)
                                _0x3c886a[_0x5baa34(0x5ee)](_0x37c15d + ':' + _0x4f7991);
                        });
                    }
                }
            }
        } catch (_0x3f54d3) {
        }
    }));
    const _0x397986 = _0x576f9d[_0x1e171c(0x55a)]() ? [...new Set(_0x576f9d[_0x1e171c(0x492)](/\r?\n/)[_0x1e171c(0x216)](_0x4ca340 => _0x4ca340[_0x1e171c(0x55a)]() !== ''))] : [];
    return [
        Array[_0x1e171c(0x351)](_0x7b0bb4),
        _0x397986,
        _0x5a5d19,
        Array['from'](_0x3c886a)
    ];
}
async function 反代参数获取(_0x30fd66, _0x7d9876, _0x255bef = '', _0x5aabef = !![]) {
    const _0x4d045e = a0_0x43d2af, {searchParams: _0x37b321} = _0x30fd66, _0x561966 = decodeURIComponent(_0x30fd66[_0x4d045e(0x40e)]), _0x45900a = _0x561966[_0x4d045e(0x486)]();
    let _0x137bb2 = _0x255bef, _0x13be61 = null, _0x5a8d98 = ![], _0x167d40 = '', _0x3d3a72 = {}, _0x2f3878 = _0x5aabef;
    const _0x5ce7b1 = {
            '木马反代地址': null,
            '反代IP': _0x137bb2,
            '代理类型': null,
            '代理账号': '',
            '代理全局': ![],
            '代理参数': {},
            '反代兜底': _0x2f3878
        }, _0x2f1d33 = () => {
            const _0x890a83 = _0x4d045e;
            _0x5ce7b1[_0x890a83(0x408)] = _0x137bb2, _0x5ce7b1[_0x890a83(0x2af)] = _0x13be61, _0x5ce7b1[_0x890a83(0x6a0)] = _0x167d40, _0x5ce7b1[_0x890a83(0x602)] = _0x5a8d98, _0x5ce7b1[_0x890a83(0x2e5)] = { ..._0x3d3a72 }, _0x5ce7b1[_0x890a83(0x426)] = _0x2f3878;
        }, _0x8c5ce3 = _0x561966[_0x4d045e(0x5f7)](/\/video\/(.+)$/i);
    if (_0x8c5ce3)
        try {
            const _0x2e6fc5 = base64SecretDecode(_0x8c5ce3[0x1][_0x4d045e(0x680)](/\/+$/, ''), _0x7d9876), {
                    type: _0x44fba5,
                    ..._0x2b7239
                } = JSON[_0x4d045e(0x468)](_0x2e6fc5);
            if (!_0x44fba5 || !反代协议默认端口[String(_0x44fba5)['toLowerCase']()])
                throw new Error('链式代理类型无效');
            if (!_0x2b7239[_0x4d045e(0x5ac)] || !_0x2b7239[_0x4d045e(0x4bb)])
                throw new Error(_0x4d045e(0x1fb));
            _0x167d40 = '', _0x137bb2 = _0x4d045e(0x4a6), _0x2f3878 = ![], _0x5a8d98 = !![], _0x13be61 = String(_0x44fba5)[_0x4d045e(0x486)](), _0x3d3a72 = {
                'username': _0x2b7239[_0x4d045e(0x563)],
                'password': _0x2b7239['password'],
                'hostname': _0x2b7239['hostname'],
                'port': Number(_0x2b7239[_0x4d045e(0x4bb)])
            };
            if (isNaN(_0x3d3a72[_0x4d045e(0x4bb)]))
                throw new Error(_0x4d045e(0x682));
            return _0x2f1d33(), _0x5ce7b1;
        } catch (_0x5d0143) {
            console[_0x4d045e(0x35f)](_0x4d045e(0x352), _0x5d0143[_0x4d045e(0x385)]);
        }
    _0x167d40 = _0x37b321[_0x4d045e(0x257)](_0x4d045e(0x626)) || _0x37b321[_0x4d045e(0x257)](_0x4d045e(0x543)) || _0x37b321[_0x4d045e(0x257)](_0x4d045e(0x2d6)) || _0x37b321[_0x4d045e(0x257)](_0x4d045e(0x59a)) || _0x37b321['get']('sstp') || null, _0x5a8d98 = _0x37b321['has'](_0x4d045e(0x471));
    if (_0x37b321[_0x4d045e(0x257)](_0x4d045e(0x626)))
        _0x13be61 = _0x4d045e(0x626);
    else {
        if (_0x37b321[_0x4d045e(0x257)](_0x4d045e(0x543)))
            _0x13be61 = _0x4d045e(0x543);
        else {
            if (_0x37b321[_0x4d045e(0x257)]('https'))
                _0x13be61 = _0x4d045e(0x2d6);
            else {
                if (_0x37b321[_0x4d045e(0x257)]('turn'))
                    _0x13be61 = _0x4d045e(0x59a);
                else {
                    if (_0x37b321[_0x4d045e(0x257)]('sstp'))
                        _0x13be61 = _0x4d045e(0x5b3);
                }
            }
        }
    }
    const _0x2cbca7 = (_0x5c42b4, _0x276f70 = !![]) => {
            const _0x26ca2d = _0x4d045e, _0x1c8632 = /^(socks5|http|https|turn|sstp):\/\/(.+)$/i['exec'](_0x5c42b4 || '');
            if (!_0x1c8632)
                return ![];
            _0x13be61 = _0x1c8632[0x1]['toLowerCase'](), _0x167d40 = _0x1c8632[0x2][_0x26ca2d(0x492)]('/')[0x0];
            if (_0x276f70)
                _0x5a8d98 = !![];
            return !![];
        }, _0x5470bc = _0x1605ee => {
            _0x137bb2 = _0x1605ee, _0x13be61 = null, _0x2f3878 = ![];
        }, _0x2cfd4e = _0x466a60 => {
            const _0x57cd35 = _0x4d045e;
            if (!_0x466a60[_0x57cd35(0x68e)](_0x57cd35(0x248))) {
                const _0x27560c = _0x466a60[_0x57cd35(0x413)]('/');
                return _0x27560c > 0x0 ? _0x466a60[_0x57cd35(0x548)](0x0, _0x27560c) : _0x466a60;
            }
            const _0x24ecc7 = _0x466a60[_0x57cd35(0x492)](_0x57cd35(0x248));
            if (_0x24ecc7[_0x57cd35(0x292)] !== 0x2)
                return _0x466a60;
            const _0x1d3153 = _0x24ecc7[0x1][_0x57cd35(0x413)]('/');
            return _0x1d3153 > 0x0 ? _0x24ecc7[0x0] + '://' + _0x24ecc7[0x1][_0x57cd35(0x548)](0x0, _0x1d3153) : _0x466a60;
        }, _0x25e057 = /\/trojan=([^?#\s]+)/i[_0x4d045e(0x2b9)](_0x561966);
    if (_0x25e057)
        try {
            _0x5ce7b1[_0x4d045e(0x3a2)] = 解析木马反代地址(_0x25e057[0x1][_0x4d045e(0x680)](/\/+$/, ''));
        } catch (_0x59b344) {
            console[_0x4d045e(0x35f)]('解析木马反代地址失败:', _0x59b344[_0x4d045e(0x385)]), _0x5ce7b1['木马反代地址'] = null;
        }
    const _0x186485 = _0x37b321[_0x4d045e(0x257)]('proxyip');
    if (_0x186485 !== null) {
        if (!_0x2cbca7(_0x186485))
            return _0x5470bc(_0x186485), _0x2f1d33(), _0x5ce7b1;
    } else {
        let _0x24a25b = /\/(socks5?|http|https|turn|sstp):\/?\/?([^/?#\s]+)/i[_0x4d045e(0x2b9)](_0x561966);
        if (_0x24a25b) {
            const _0x3cbbcb = _0x24a25b[0x1][_0x4d045e(0x486)]();
            _0x13be61 = _0x3cbbcb === _0x4d045e(0x649) || _0x3cbbcb === _0x4d045e(0x4c5) ? _0x4d045e(0x626) : _0x3cbbcb, _0x167d40 = _0x24a25b[0x2]['split']('/')[0x0], _0x5a8d98 = !![];
        } else {
            if (_0x24a25b = /\/(g?s5|socks5|g?http|g?https|g?turn|g?sstp)=([^/?#\s]+)/i[_0x4d045e(0x2b9)](_0x561966)) {
                const _0x5f322e = _0x24a25b[0x1][_0x4d045e(0x486)]();
                _0x167d40 = _0x24a25b[0x2]['split']('/')[0x0], _0x13be61 = _0x5f322e[_0x4d045e(0x68e)](_0x4d045e(0x5b3)) ? 'sstp' : _0x5f322e[_0x4d045e(0x68e)](_0x4d045e(0x59a)) ? _0x4d045e(0x59a) : _0x5f322e[_0x4d045e(0x68e)](_0x4d045e(0x2d6)) ? 'https' : _0x5f322e[_0x4d045e(0x68e)](_0x4d045e(0x543)) ? 'http' : 'socks5';
                if (_0x5f322e[_0x4d045e(0x661)]('g'))
                    _0x5a8d98 = !![];
            } else {
                if (_0x24a25b = /\/(proxyip[.=]|pyip=|ip=)([^?#\s]+)/['exec'](_0x45900a)) {
                    const _0x49f13c = _0x2cfd4e(_0x24a25b[0x2]);
                    if (!_0x2cbca7(_0x49f13c))
                        return _0x5470bc(_0x49f13c), _0x2f1d33(), _0x5ce7b1;
                }
            }
        }
    }
    if (!_0x167d40)
        return _0x13be61 = null, _0x2f1d33(), _0x5ce7b1;
    try {
        _0x3d3a72 = await 获取SOCKS5账号(_0x167d40, 获取代理默认端口(_0x13be61));
        if (_0x37b321[_0x4d045e(0x257)]('socks5'))
            _0x13be61 = _0x4d045e(0x626);
        else {
            if (_0x37b321[_0x4d045e(0x257)](_0x4d045e(0x543)))
                _0x13be61 = _0x4d045e(0x543);
            else {
                if (_0x37b321[_0x4d045e(0x257)]('https'))
                    _0x13be61 = 'https';
                else {
                    if (_0x37b321['get'](_0x4d045e(0x59a)))
                        _0x13be61 = _0x4d045e(0x59a);
                    else {
                        if (_0x37b321[_0x4d045e(0x257)](_0x4d045e(0x5b3)))
                            _0x13be61 = _0x4d045e(0x5b3);
                        else
                            _0x13be61 = _0x13be61 || _0x4d045e(0x626);
                    }
                }
            }
        }
    } catch (_0x480132) {
        console['error'](_0x4d045e(0x477), _0x480132[_0x4d045e(0x385)]), _0x13be61 = null;
    }
    return _0x2f1d33(), _0x5ce7b1;
}
const 反代协议默认端口 = {
    'socks5': 0x438,
    'http': 0x50,
    'https': 0x1bb,
    'turn': 0xd96,
    'sstp': 0x1bb
};
function 获取代理默认端口(_0x19cde5) {
    const _0x3d576 = a0_0x43d2af;
    return 反代协议默认端口[String(_0x19cde5 || '')[_0x3d576(0x486)]()] || 0x50;
}
const SOCKS5账号Base64正则 = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i, IPv6方括号正则 = /^\[.*\]$/;
function 获取SOCKS5账号(_0x2337b9, _0x1637dc = 0x50) {
    const _0x29fb43 = a0_0x43d2af;
    _0x2337b9 = String(_0x2337b9 || '')[_0x29fb43(0x55a)]()[_0x29fb43(0x680)](/^(socks5|http|https|turn|sstp):\/\//i, '')[_0x29fb43(0x492)]('#')[0x0][_0x29fb43(0x55a)]();
    const _0x14df0a = _0x2337b9[_0x29fb43(0x326)]('@');
    if (_0x14df0a !== -0x1) {
        let _0x47aada = _0x2337b9[_0x29fb43(0x548)](0x0, _0x14df0a)[_0x29fb43(0x27f)](_0x29fb43(0x22d), '=');
        if (!_0x47aada[_0x29fb43(0x68e)](':') && SOCKS5账号Base64正则[_0x29fb43(0x247)](_0x47aada))
            _0x47aada = atob(_0x47aada);
        _0x2337b9 = _0x47aada + '@' + _0x2337b9[_0x29fb43(0x548)](_0x14df0a + 0x1);
    }
    const _0x15c7e5 = _0x2337b9[_0x29fb43(0x326)]('@'), _0x48c5ec = (_0x15c7e5 === -0x1 ? _0x2337b9 : _0x2337b9[_0x29fb43(0x548)](_0x15c7e5 + 0x1))[_0x29fb43(0x492)]('/')[0x0], _0x12ee72 = _0x15c7e5 === -0x1 ? '' : _0x2337b9['slice'](0x0, _0x15c7e5), [_0x2067be, _0x1bbeec] = _0x12ee72 ? _0x12ee72[_0x29fb43(0x492)](':') : [];
    if (_0x12ee72 && !_0x1bbeec)
        throw new Error(_0x29fb43(0x422));
    let _0x5ce858 = _0x48c5ec, _0x13f544 = _0x1637dc;
    if (_0x48c5ec['includes'](']:')) {
        const [_0x1c3292, _0xb9d77 = ''] = _0x48c5ec[_0x29fb43(0x492)](']:');
        _0x5ce858 = _0x1c3292 + ']', _0x13f544 = Number(_0xb9d77[_0x29fb43(0x680)](/[^\d]/g, ''));
    } else {
        if (!_0x48c5ec[_0x29fb43(0x661)]('[')) {
            const _0x3480a5 = _0x48c5ec[_0x29fb43(0x492)](':');
            _0x3480a5[_0x29fb43(0x292)] === 0x2 && (_0x5ce858 = _0x3480a5[0x0], _0x13f544 = Number(_0x3480a5[0x1][_0x29fb43(0x680)](/[^\d]/g, '')));
        }
    }
    if (isNaN(_0x13f544))
        throw new Error(_0x29fb43(0x2ba));
    if (_0x5ce858['includes'](':') && !IPv6方括号正则[_0x29fb43(0x247)](_0x5ce858))
        throw new Error(_0x29fb43(0x68f));
    return {
        'username': _0x2067be,
        'password': _0x1bbeec,
        'hostname': _0x5ce858,
        'port': _0x13f544
    };
}
async function getCloudflareUsage(_0x3218e5, _0x4c7f0f, _0x33bbc0, _0x5db5a4) {
    const _0x51a1a6 = a0_0x43d2af, _0x10b3db = _0x51a1a6(0x672), _0x3daa93 = _0x22bc79 => _0x22bc79?.[_0x51a1a6(0x394)]((_0x21f4c0, _0x4928cb) => _0x21f4c0 + (_0x4928cb?.[_0x51a1a6(0x401)]?.[_0x51a1a6(0x29a)] || 0x0), 0x0) || 0x0, _0x43d93d = { 'Content-Type': _0x51a1a6(0x4c8) };
    try {
        if (!_0x33bbc0 && (!_0x3218e5 || !_0x4c7f0f))
            return {
                'success': ![],
                'pages': 0x0,
                'workers': 0x0,
                'total': 0x0,
                'max': 0x186a0
            };
        if (!_0x33bbc0) {
            const _0x4021e7 = await fetch(_0x10b3db + _0x51a1a6(0x3e2), {
                'method': _0x51a1a6(0x34f),
                'headers': {
                    ..._0x43d93d,
                    'X-AUTH-EMAIL': _0x3218e5,
                    'X-AUTH-KEY': _0x4c7f0f
                }
            });
            if (!_0x4021e7['ok'])
                throw new Error(_0x51a1a6(0x4e2) + _0x4021e7[_0x51a1a6(0x3d7)]);
            const _0x19ebff = await _0x4021e7[_0x51a1a6(0x331)]();
            if (!_0x19ebff?.[_0x51a1a6(0x3e3)]?.[_0x51a1a6(0x292)])
                throw new Error(_0x51a1a6(0x341));
            const _0x3f69db = _0x19ebff[_0x51a1a6(0x3e3)][_0x51a1a6(0x647)](_0x2b1535 => _0x2b1535['name']?.[_0x51a1a6(0x486)]()[_0x51a1a6(0x661)](_0x3218e5[_0x51a1a6(0x486)]()));
            _0x33bbc0 = _0x19ebff[_0x51a1a6(0x3e3)][_0x3f69db >= 0x0 ? _0x3f69db : 0x0]?.['id'];
        }
        const _0x2ddb8d = new Date();
        _0x2ddb8d[_0x51a1a6(0x35c)](0x0, 0x0, 0x0, 0x0);
        const _0x193883 = _0x5db5a4 ? {
                ..._0x43d93d,
                'Authorization': 'Bearer\x20' + _0x5db5a4
            } : {
                ..._0x43d93d,
                'X-AUTH-EMAIL': _0x3218e5,
                'X-AUTH-KEY': _0x4c7f0f
            }, _0x14033a = await fetch(_0x10b3db + _0x51a1a6(0x4e0), {
                'method': 'POST',
                'headers': _0x193883,
                'body': JSON['stringify']({
                    'query': _0x51a1a6(0x49d),
                    'variables': {
                        'AccountID': _0x33bbc0,
                        'filter': {
                            'datetime_geq': _0x2ddb8d['toISOString'](),
                            'datetime_leq': new Date()[_0x51a1a6(0x69c)]()
                        }
                    }
                })
            });
        if (!_0x14033a['ok'])
            throw new Error(_0x51a1a6(0x4f4) + _0x14033a[_0x51a1a6(0x3d7)]);
        const _0x23e202 = await _0x14033a[_0x51a1a6(0x331)]();
        if (_0x23e202[_0x51a1a6(0x2dc)]?.['length'])
            throw new Error(_0x23e202['errors'][0x0][_0x51a1a6(0x385)]);
        const _0x40d306 = _0x23e202?.[_0x51a1a6(0x25c)]?.['viewer']?.[_0x51a1a6(0x333)]?.[0x0];
        if (!_0x40d306)
            throw new Error(_0x51a1a6(0x58f));
        const _0x18ee3b = _0x3daa93(_0x40d306[_0x51a1a6(0x32f)]), _0x35170c = _0x3daa93(_0x40d306['workersInvocationsAdaptive']), _0x2a569c = _0x18ee3b + _0x35170c, _0x2775f1 = 0x186a0;
        return log('统计结果\x20-\x20Pages:\x20' + _0x18ee3b + _0x51a1a6(0x593) + _0x35170c + _0x51a1a6(0x511) + _0x2a569c + _0x51a1a6(0x4c7)), {
            'success': !![],
            'pages': _0x18ee3b,
            'workers': _0x35170c,
            'total': _0x2a569c,
            'max': _0x2775f1
        };
    } catch (_0x3d99b3) {
        return console['error'](_0x51a1a6(0x4a1), _0x3d99b3[_0x51a1a6(0x385)]), {
            'success': ![],
            'pages': 0x0,
            'workers': 0x0,
            'total': 0x0,
            'max': 0x186a0
        };
    }
}
function sha224(_0x108392) {
    const _0x1128f5 = a0_0x43d2af, _0x14cae1 = [
            0x428a2f98,
            0x71374491,
            0xb5c0fbcf,
            0xe9b5dba5,
            0x3956c25b,
            0x59f111f1,
            0x923f82a4,
            0xab1c5ed5,
            0xd807aa98,
            0x12835b01,
            0x243185be,
            0x550c7dc3,
            0x72be5d74,
            0x80deb1fe,
            0x9bdc06a7,
            0xc19bf174,
            0xe49b69c1,
            0xefbe4786,
            0xfc19dc6,
            0x240ca1cc,
            0x2de92c6f,
            0x4a7484aa,
            0x5cb0a9dc,
            0x76f988da,
            0x983e5152,
            0xa831c66d,
            0xb00327c8,
            0xbf597fc7,
            0xc6e00bf3,
            0xd5a79147,
            0x6ca6351,
            0x14292967,
            0x27b70a85,
            0x2e1b2138,
            0x4d2c6dfc,
            0x53380d13,
            0x650a7354,
            0x766a0abb,
            0x81c2c92e,
            0x92722c85,
            0xa2bfe8a1,
            0xa81a664b,
            0xc24b8b70,
            0xc76c51a3,
            0xd192e819,
            0xd6990624,
            0xf40e3585,
            0x106aa070,
            0x19a4c116,
            0x1e376c08,
            0x2748774c,
            0x34b0bcb5,
            0x391c0cb3,
            0x4ed8aa4a,
            0x5b9cca4f,
            0x682e6ff3,
            0x748f82ee,
            0x78a5636f,
            0x84c87814,
            0x8cc70208,
            0x90befffa,
            0xa4506ceb,
            0xbef9a3f7,
            0xc67178f2
        ], _0x1a0ee3 = (_0x1d2b9f, _0x35a081) => (_0x1d2b9f >>> _0x35a081 | _0x1d2b9f << 0x20 - _0x35a081) >>> 0x0;
    _0x108392 = unescape(encodeURIComponent(_0x108392));
    const _0x51e2e5 = _0x108392[_0x1128f5(0x292)] * 0x8;
    _0x108392 += String[_0x1128f5(0x1d1)](0x80);
    while (_0x108392[_0x1128f5(0x292)] * 0x8 % 0x200 !== 0x1c0)
        _0x108392 += String['fromCharCode'](0x0);
    const _0x2e19ad = [
            0xc1059ed8,
            0x367cd507,
            0x3070dd17,
            0xf70e5939,
            0xffc00b31,
            0x68581511,
            0x64f98fa7,
            0xbefa4fa4
        ], _0x4fee50 = Math[_0x1128f5(0x2eb)](_0x51e2e5 / 0x100000000), _0x3d2573 = _0x51e2e5 & 0xffffffff;
    _0x108392 += String[_0x1128f5(0x1d1)](_0x4fee50 >>> 0x18 & 0xff, _0x4fee50 >>> 0x10 & 0xff, _0x4fee50 >>> 0x8 & 0xff, _0x4fee50 & 0xff, _0x3d2573 >>> 0x18 & 0xff, _0x3d2573 >>> 0x10 & 0xff, _0x3d2573 >>> 0x8 & 0xff, _0x3d2573 & 0xff);
    const _0xe49a8d = [];
    for (let _0x16ab31 = 0x0; _0x16ab31 < _0x108392[_0x1128f5(0x292)]; _0x16ab31 += 0x4)
        _0xe49a8d['push'](_0x108392[_0x1128f5(0x411)](_0x16ab31) << 0x18 | _0x108392[_0x1128f5(0x411)](_0x16ab31 + 0x1) << 0x10 | _0x108392[_0x1128f5(0x411)](_0x16ab31 + 0x2) << 0x8 | _0x108392[_0x1128f5(0x411)](_0x16ab31 + 0x3));
    for (let _0x599a5e = 0x0; _0x599a5e < _0xe49a8d[_0x1128f5(0x292)]; _0x599a5e += 0x10) {
        const _0x1d7037 = new Array(0x40)[_0x1128f5(0x428)](0x0);
        for (let _0x159cb3 = 0x0; _0x159cb3 < 0x10; _0x159cb3++)
            _0x1d7037[_0x159cb3] = _0xe49a8d[_0x599a5e + _0x159cb3];
        for (let _0x343daa = 0x10; _0x343daa < 0x40; _0x343daa++) {
            const _0x13668a = _0x1a0ee3(_0x1d7037[_0x343daa - 0xf], 0x7) ^ _0x1a0ee3(_0x1d7037[_0x343daa - 0xf], 0x12) ^ _0x1d7037[_0x343daa - 0xf] >>> 0x3, _0x4732a7 = _0x1a0ee3(_0x1d7037[_0x343daa - 0x2], 0x11) ^ _0x1a0ee3(_0x1d7037[_0x343daa - 0x2], 0x13) ^ _0x1d7037[_0x343daa - 0x2] >>> 0xa;
            _0x1d7037[_0x343daa] = _0x1d7037[_0x343daa - 0x10] + _0x13668a + _0x1d7037[_0x343daa - 0x7] + _0x4732a7 >>> 0x0;
        }
        let [_0x3b49dd, _0x5b1e37, _0x589559, _0x329dc7, _0x26cb1c, _0x19486a, _0x11bf2f, _0x249d34] = _0x2e19ad;
        for (let _0x8a5641 = 0x0; _0x8a5641 < 0x40; _0x8a5641++) {
            const _0x688cd = _0x1a0ee3(_0x26cb1c, 0x6) ^ _0x1a0ee3(_0x26cb1c, 0xb) ^ _0x1a0ee3(_0x26cb1c, 0x19), _0x477f84 = _0x26cb1c & _0x19486a ^ ~_0x26cb1c & _0x11bf2f, _0x502aa2 = _0x249d34 + _0x688cd + _0x477f84 + _0x14cae1[_0x8a5641] + _0x1d7037[_0x8a5641] >>> 0x0, _0x48acdc = _0x1a0ee3(_0x3b49dd, 0x2) ^ _0x1a0ee3(_0x3b49dd, 0xd) ^ _0x1a0ee3(_0x3b49dd, 0x16), _0x1ab507 = _0x3b49dd & _0x5b1e37 ^ _0x3b49dd & _0x589559 ^ _0x5b1e37 & _0x589559, _0x57389a = _0x48acdc + _0x1ab507 >>> 0x0;
            _0x249d34 = _0x11bf2f, _0x11bf2f = _0x19486a, _0x19486a = _0x26cb1c, _0x26cb1c = _0x329dc7 + _0x502aa2 >>> 0x0, _0x329dc7 = _0x589559, _0x589559 = _0x5b1e37, _0x5b1e37 = _0x3b49dd, _0x3b49dd = _0x502aa2 + _0x57389a >>> 0x0;
        }
        for (let _0x40fcef = 0x0; _0x40fcef < 0x8; _0x40fcef++)
            _0x2e19ad[_0x40fcef] = _0x2e19ad[_0x40fcef] + (_0x40fcef === 0x0 ? _0x3b49dd : _0x40fcef === 0x1 ? _0x5b1e37 : _0x40fcef === 0x2 ? _0x589559 : _0x40fcef === 0x3 ? _0x329dc7 : _0x40fcef === 0x4 ? _0x26cb1c : _0x40fcef === 0x5 ? _0x19486a : _0x40fcef === 0x6 ? _0x11bf2f : _0x249d34) >>> 0x0;
    }
    let _0x32b411 = '';
    for (let _0x458c1a = 0x0; _0x458c1a < 0x7; _0x458c1a++) {
        for (let _0x4ecaec = 0x18; _0x4ecaec >= 0x0; _0x4ecaec -= 0x8)
            _0x32b411 += (_0x2e19ad[_0x458c1a] >>> _0x4ecaec & 0xff)[_0x1128f5(0x592)](0x10)['padStart'](0x2, '0');
    }
    return _0x32b411;
}
async function 解析地址端口(_0x35732d, _0x32d4e4 = a0_0x43d2af(0x5b4), _0x18401e = a0_0x43d2af(0x3b3)) {
    const _0x14f34b = a0_0x43d2af;
    _0x35732d = _0x35732d['toLowerCase']();
    function _0x53a1f4(_0x204a08) {
        const _0x455ad2 = a0_0x5eca;
        let _0x3ca3dd = _0x204a08, _0x45afe9 = 0x1bb;
        if (_0x204a08[_0x455ad2(0x68e)](']:')) {
            const _0xe4d4a0 = _0x204a08[_0x455ad2(0x492)](']:');
            _0x3ca3dd = _0xe4d4a0[0x0] + ']', _0x45afe9 = parseInt(_0xe4d4a0[0x1], 0xa) || _0x45afe9;
        } else {
            if ((_0x204a08[_0x455ad2(0x5f7)](/:/g) || [])['length'] === 0x1 && !_0x204a08[_0x455ad2(0x661)]('[')) {
                const _0x5cb7c4 = _0x204a08[_0x455ad2(0x326)](':');
                _0x3ca3dd = _0x204a08[_0x455ad2(0x548)](0x0, _0x5cb7c4), _0x45afe9 = parseInt(_0x204a08[_0x455ad2(0x548)](_0x5cb7c4 + 0x1), 0xa) || _0x45afe9;
            }
        }
        return [
            _0x3ca3dd,
            _0x45afe9
        ];
    }
    function _0x4e49df(_0x210e2f) {
        const _0x232fe7 = a0_0x5eca;
        return _0x210e2f[_0x232fe7(0x1fd)](_0x3935f4 => {
            const _0x2fef07 = _0x232fe7;
            if (_0x3935f4[_0x2fef07(0x661)]('\x22') && _0x3935f4[_0x2fef07(0x45b)]('\x22'))
                _0x3935f4 = _0x3935f4[_0x2fef07(0x548)](0x1, -0x1);
            return _0x3935f4[_0x2fef07(0x680)](/\\010/g, ',')[_0x2fef07(0x680)](/\n/g, ',')[_0x2fef07(0x492)](',')['map'](_0x4c36ea => _0x4c36ea['trim']())[_0x2fef07(0x216)](Boolean);
        })[_0x232fe7(0x2a7)](_0x4dfca5 => _0x53a1f4(_0x4dfca5));
    }
    const _0x1fe3d4 = await 整理成数组(_0x35732d);
    let _0x266e94 = [];
    const _0x5a7b2a = /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/, _0x27073e = /^\[?(?:[a-fA-F0-9]{0,4}:){1,7}[a-fA-F0-9]{0,4}\]?$/;
    for (const _0x2bfc03 of _0x1fe3d4) {
        let [_0x18b84c, _0x5492cd] = _0x53a1f4(_0x2bfc03);
        if (_0x2bfc03[_0x14f34b(0x68e)]('.tp')) {
            const _0x1e9397 = _0x2bfc03[_0x14f34b(0x5f7)](/\.tp(\d+)/);
            if (_0x1e9397)
                _0x5492cd = parseInt(_0x1e9397[0x1], 0xa);
        }
        if (_0x5a7b2a[_0x14f34b(0x247)](_0x18b84c) || _0x27073e[_0x14f34b(0x247)](_0x18b84c)) {
            log('[反代解析]\x20' + _0x18b84c + _0x14f34b(0x508)), _0x266e94[_0x14f34b(0x4a8)]([
                _0x18b84c,
                _0x5492cd
            ]);
            continue;
        }
        const [_0x5eb017, _0xbe981a] = await Promise[_0x14f34b(0x369)]([
                DoH查询(_0x18b84c, _0x14f34b(0x3bf)),
                DoH查询(_0x18b84c, 'A')
            ]), _0x1b64dd = _0x5eb017[_0x14f34b(0x216)](_0x49a3dd => _0x49a3dd[_0x14f34b(0x3c6)] === 0x10)[_0x14f34b(0x2a7)](_0x342e65 => _0x342e65[_0x14f34b(0x25c)]), _0x66b53e = _0x4e49df(_0x1b64dd);
        if (_0x66b53e[_0x14f34b(0x292)] > 0x0) {
            log(_0x14f34b(0x44b) + _0x18b84c + _0x14f34b(0x357) + _0x66b53e['length'] + _0x14f34b(0x1fa)), _0x266e94[_0x14f34b(0x4a8)](..._0x66b53e);
            continue;
        }
        const _0x94c808 = _0xbe981a[_0x14f34b(0x216)](_0x5d8bfc => _0x5d8bfc[_0x14f34b(0x3c6)] === 0x1)[_0x14f34b(0x2a7)](_0x3d270d => _0x3d270d[_0x14f34b(0x25c)]);
        if (_0x94c808[_0x14f34b(0x292)] > 0x0) {
            log('[反代解析]\x20' + _0x18b84c + '\x20未获取到TXT记录，使用A记录，共' + _0x94c808[_0x14f34b(0x292)] + _0x14f34b(0x1fa)), _0x266e94[_0x14f34b(0x4a8)](..._0x94c808[_0x14f34b(0x2a7)](_0x2148fe => [
                _0x2148fe,
                _0x5492cd
            ]));
            continue;
        }
        const _0x33e46f = await DoH查询(_0x18b84c, _0x14f34b(0x243)), _0x30ad3b = _0x33e46f['filter'](_0x28ee7c => _0x28ee7c[_0x14f34b(0x3c6)] === 0x1c)[_0x14f34b(0x2a7)](_0x562eea => '[' + _0x562eea[_0x14f34b(0x25c)] + ']');
        _0x30ad3b[_0x14f34b(0x292)] > 0x0 ? (log('[反代解析]\x20' + _0x18b84c + _0x14f34b(0x3c4) + _0x30ad3b['length'] + _0x14f34b(0x1fa)), _0x266e94[_0x14f34b(0x4a8)](..._0x30ad3b[_0x14f34b(0x2a7)](_0x27c40c => [
            _0x27c40c,
            _0x5492cd
        ]))) : (log(_0x14f34b(0x44b) + _0x18b84c + _0x14f34b(0x23b)), _0x266e94[_0x14f34b(0x4a8)]([
            _0x18b84c,
            _0x5492cd
        ]));
    }
    const _0x29f26d = _0x266e94[_0x14f34b(0x3a3)]((_0x6b60aa, _0x556def) => _0x6b60aa[0x0][_0x14f34b(0x616)](_0x556def[0x0])), _0x516565 = _0x32d4e4[_0x14f34b(0x68e)]('.') ? _0x32d4e4[_0x14f34b(0x492)]('.')[_0x14f34b(0x548)](-0x2)[_0x14f34b(0x4f1)]('.') : _0x32d4e4;
    let _0x444a90 = [..._0x516565 + _0x18401e]['reduce']((_0x5e289a, _0x42c311) => _0x5e289a + _0x42c311['charCodeAt'](0x0), 0x0);
    log('[反代解析]\x20随机种子:\x20' + _0x444a90 + _0x14f34b(0x63b) + _0x516565);
    const _0x80cf0f = [..._0x29f26d][_0x14f34b(0x3a3)](() => (_0x444a90 = _0x444a90 * 0x41c64e6d + 0x3039 & 0x7fffffff) / 0x7fffffff - 0.5), _0x163f1b = _0x80cf0f[_0x14f34b(0x548)](0x0, 0x8);
    return log(_0x14f34b(0x4ad) + _0x163f1b[_0x14f34b(0x292)] + '个\x0a' + _0x163f1b[_0x14f34b(0x2a7)](([_0x4903a9, _0x4aa0bc], _0x567386) => _0x567386 + 0x1 + '.\x20' + _0x4903a9 + ':' + _0x4aa0bc)[_0x14f34b(0x4f1)]('\x0a')), _0x163f1b;
}
async function nginx() {
    const _0x380131 = a0_0x43d2af;
    return _0x380131(0x434);
}
async function html1101(_0x34a6af, _0x1aba6d) {
    const _0x2a4f66 = a0_0x43d2af, _0x156d9d = new Date(), _0x2a139c = _0x156d9d[_0x2a4f66(0x509)]() + '-' + String(_0x156d9d['getMonth']() + 0x1)[_0x2a4f66(0x218)](0x2, '0') + '-' + String(_0x156d9d[_0x2a4f66(0x2a4)]())[_0x2a4f66(0x218)](0x2, '0') + '\x20' + String(_0x156d9d[_0x2a4f66(0x1dd)]())[_0x2a4f66(0x218)](0x2, '0') + ':' + String(_0x156d9d[_0x2a4f66(0x693)]())[_0x2a4f66(0x218)](0x2, '0') + ':' + String(_0x156d9d[_0x2a4f66(0x21c)]())[_0x2a4f66(0x218)](0x2, '0'), _0x3fe169 = Array[_0x2a4f66(0x351)](crypto[_0x2a4f66(0x60a)](new Uint8Array(0x8)))[_0x2a4f66(0x2a7)](_0x4554de => _0x4554de[_0x2a4f66(0x592)](0x10)[_0x2a4f66(0x218)](0x2, '0'))['join']('');
    return _0x2a4f66(0x4a3) + _0x34a6af + _0x2a4f66(0x304) + _0x3fe169 + _0x2a4f66(0x5b7) + _0x2a139c + '\x20UTC</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22cf-subheadline\x22\x20data-translate=\x22error_desc\x22>Worker\x20threw\x20exception</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div><!--\x20/.header\x20-->\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<section></section><!--\x20spacer\x20-->\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cf-section\x20cf-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cf-columns\x20two\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cf-column\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-translate=\x22what_happened\x22>What\x20happened?</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>You\x27ve\x20requested\x20a\x20page\x20on\x20a\x20website\x20(' + _0x34a6af + _0x2a4f66(0x555) + _0x34a6af + _0x2a4f66(0x410) + _0x3fe169 + _0x2a4f66(0x4cd) + _0x1aba6d + _0x2a4f66(0x5ba);
}