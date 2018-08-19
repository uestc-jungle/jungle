# Math

## 数论

### 素数筛
从欧拉筛的角度来看，
考虑 $[1,n]$ 内的数，
所有大于 $\sqrt{n}$ 的合数一定会被某个小于等于 $\sqrt{n}$ 的质数（最小的质因子一定小于等于 $\sqrt{n}$，如果最小的质因子大于 $\sqrt{n}$，要么他本身是一个质数，否则 $p_1p_2 > \sqrt{n}\cdot{\sqrt{n}} = n$ 矛盾）筛掉.
所以当 $n$ 很大时，可以只筛出 $\sqrt{n}$ 内的质数，用这些质数去（分段）筛大于 $\sqrt{n}$ 的那些数.

### 关于 `gcd` 容斥
如果遇到这样一类求和
$$T = \sum_{A \subseteq S}{(a_1, a_2, \dots, a_n, k_1, k_2, \dots, k_m) \cdot f(A)}$$
其中 $a_i$ 是集合 $A$ 里的元素，$k_j$ 是额外需要求`gcd`的元素. 记 $K = k_1k_2\cdots{}k_m$.

可以枚举 `gcd`，转换为
$$T = \sum_{d|K}{\left(d \cdot \sum_{A \subseteq S}{[d = (a_1,a_2,\dots,a_n, k_1, k_2, \dots, k_m)]\cdot{}f(A)}\right)}$$
一般 $f(A)$ 仅与集合 $A$ 的大小有关，即
$$f(A) = h(|A|)$$
则有
$$T = \sum_{d | K}{\left(d \cdot \sum_{l = 1}^{|S|}{h(l)\sum_{A\subseteq{S}\:\text{且}\:|A|=l}{[d = (a_1,a_2,\dots,a_n,k_1,k_2,\dots,k_m)]}}\right)}$$

遍历集合 $S$ 的每个数的因子，统计出因子 $d$ 的出现次数为 $c_d$，
那么大小为 $l$、`gcd` 至少为 $d$ 的集合的个数为
$$g(d,l) = \binom{c_d}{l}$$

记
$$\phi(d) = \sum_{l = 1}^{\min\{c_d,|S|\}}{h(l)g(d,l)}$$
则`gcd`为 $d$ 的集合的贡献为
$$\Phi(d) = \phi(d) - \sum_{t | (K / d)}\Phi(t)$$

容斥一波就可以搞出来了
$$T = \sum_{d | K}{d \cdot \Phi(d)}$$

一些常见的 $h(l)$，一般 $c_d \le |S|$:
* $h(l) = l$, $\phi(d) = \sum_{l=1}^{c_d}{l\binom{c_d}{l}} = c_d \cdot 2^{c_d-1} - 1$
* $h(l) = \lambda^{l}$, $\phi(d) = \sum_{l=1}^{c_d}{\lambda^l\binom{c_d}{l}} = (1 + \lambda)^{c_d} - 1$
