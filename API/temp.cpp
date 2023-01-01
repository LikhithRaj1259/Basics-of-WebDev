#include <bits/stdc++.h>
using namespace std;

#define all(v) v.begin(), v.end()
#define rep(a, b, c) for (int(a) = (b); (a) < (c); (a) ++)
#define repn(a, b, c, d) for (int(a) = (b); (a) < (c); (a) += (d))
#define fi first
#define se second
#define int long long
typedef pair<int, int> pii;
#define vc vector
#define pb push_back

int func(int a,int b)
{
    if(a<3 && b<4)return func(a+1,b+1);
    else return a+b;
}

void solve()
{
    cout<<func(1,2);
}  

signed main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t = 1;
    // cin >> t;

    while (t--)
        solve();

    return 0;
}