#Existence de cycle dans une fonction discrète

## Nicolas Blackburn

## 2017/03/03


## Introduction

## Matrice d'adjacence

Soit une fonction $f:\mathbb{N} \to \mathbb{N}$. La matrice d'adjacence partielle de $f$ est une matrice carrée d'ordre $n$, définie comme étant

$$[\operatorname{Adj}_n f]_{i,j} = \left\{ \begin{aligned}
    1 & \text{ si } f(j) = i \ \text{ et } i \leq n \\
    0 & \text{ sinon.}
\end{aligned} \right. $$
    
## Propriétés de la matrice d'adjacence

Les coefficients d'une matrice d'adjacence sont tous $0$ ou $1$.

Chaque colonne d'une matrice d'adjacence ne contient au plus qu'un seul coefficient égal à $1$.

Posons $M_f = \operatorname{Adj}_n f$, $M_g = \operatorname{Adj}_n g$ et considérons $\vec e_i$ un vecteur dans $\mathbb{C}^n$, valant $1$ à la $i$-ième composante et $0$ pour toute autre composante. Alors

$$M_f \vec e_i = \vec e_{f(i)}$$

et 

$$M_f M_g = M_{f \circ g}.$$

## Cycle

Soit une fonction $f:X \to X$. On dit que $f$ a un cycle d'ordre $k$ s'il existe un élément $x \in X$ tel que $f^k(x) = x$, pour $k > 0$ et $k$ entier. L'ordre du cycle contenant $x$ est $k$ si et seulement si $k$ est le plus petit entier tel que $f^k(x) = x$. On définit $\mathcal{C} = (x_1 \  x_2 \ \ldots \  x_k)$ étant un cycle de $f$, $x_i \in X$ et $i \neq j$ implique $x_i \neq x_j$. Alors 

$$f(x_i) = \left\{ \begin{aligned}
    x_{i+1} & \text{ si } i < k \\
    x_1 & \text{ si } i = k \text{.}
\end{aligned} \right. $$

On a le cas particulier d'un cycle d'ordre $1$ qui est appelé un point fixe.

## Polynôme caractéristique

### Lemme 1

Soit une fonction $f:X \to X$ sur un ensemble $X$ fini. Supposons qu'il existe un élément $x_1 \in X$ tel que $f(x_i) \not = x_1$, pour tout $x_i \in X$. Alors 

$$\mathcal{P}_f[\lambda] = \lambda \mathcal{P}_g[\lambda]$$

où $g:B \to B$ est la restriction de $f$ au sous-ensemble $B$.

Preuve:

1. Soit $N = \{n \in \mathbb{N} | n \leq |X|\}$, il existe une bijection $h:X \to N$ telle que $h(x_i) = i$, pour tout élément $x_i \in X$. En particulier $h(x_1) = 1$.

2. On a que $\mathcal{P}_{h \circ f \circ h^{-1}}[\lambda] = \mathcal{P}_f[\lambda]$. Soit $M_f = \operatorname{Adj} f$ et $M_h = \operatorname{Adj} h$ alors $\operatorname{Det} (\lambda I - M_h M_f M_h^{-1}) = \operatorname{Det} (\lambda I - M_f)$.

3. Puisque pour tout élément $f(x_i) \not = x_1$ alors $h \circ f \circ h^{-1} (n) \not = 1$ pour tout $n \in N$. 

4. La $M$, matrice d'adjacence de $h \circ f \circ h^{-1}$ est une matrice dont la première ligne ne contient que des $0$ alors $\lambda I - M$ est une matrice bloc triangulaire inférieure

$$
\begin{bmatrix}
    [\lambda] & 0 \\
    A & B 
\end{bmatrix}
.$$

5. Alors $\mathcal{P}_{h \circ f \circ h^{-1}}[\lambda] = \lambda \operatorname{Det} B = \lambda \mathcal{P}_g[\lambda]$.

### Lemme 2

Soit $\mathcal C:X \to X$, un $n$-cycle de $X$, $n = |X|$, alors $\mathcal{P}_{\mathcal C}[\lambda] = (\lambda^n - 1)$.

Preuve:

... Todo ...

### Théorème 1

Soit une fonction $f:X \to X$ sur un ensemble $X$ fini et $\mathcal{P}_f[\lambda]$, son polynôme caractéristique, alors 

$$\mathcal{P}_f[\lambda] = \lambda^{|Z|} \prod_{\mathcal{C}_i \in C} (\lambda^{|\mathcal{C}_i|} - 1)$$

où $Z$ est l'ensemble des éléments de $X$ qui ne sont pas élément d'un cycle de $f$ et $C$ est l'ensemble des cycles de $f$.

Preuve:

Par induction sur l'ensemble $Z$ en utilisant le lemme 1 et ensuite sur $C$ en utilisant le lemme 2.

## Formule de comptage

Une petite formule qui ressemble au lemme de Burnside en théorie des groupes:

$$|X| = |Z| + \sum_{\mathcal{C}_i \in C} |\mathcal{C}_i|$$

Preuve:

...todo...

## Existence de cycle

### Théorème 2

Si la fonction $f:\mathbb{N} \to \mathbb{N}$ a un cycle d'ordre $k$, alors il existe $M_n$, une matrice d'adjacence partielle de $f$ d'ordre $n$, telle que $(\lambda^k - 1)$ divise $\mathcal{P}_{M_n}[\lambda]$. 

Si $f$ n'a pas de cycle alors $\mathcal{P}_{M_n}[\lambda] = \lambda^n$ pour toute matrice $M_n$ d'adjacence partielle de $f$ d'ordre $n$.

Preuve:

Corrolaire du théorème 1

## Conclusion
