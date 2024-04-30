---
title: "Docker da ENV ezmek"
subtitle: "Docker içerisinde bir environment nasıl ezilir?"
date: "2024-01-12"
category: "devops"
author: "gork"
---

Docker da build anında herhangi bir env değerine ihtiyaç duyabiliriz. Bu yüzden env değerlerine öncesinde erişmek isteyebiliriz.

```bash
ENV ConnectionStrings__DbConnection "value"
```

Bu örnekler daha da çoğaltılabilir veya bir secret içerisinden veri taşıması da yapmak gerekebilir. Bunlar için de başka bir yazıda görüşmek üzere.