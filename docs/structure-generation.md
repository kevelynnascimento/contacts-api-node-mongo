## **Geração de estruturas**

**Migration**

```bash
$ npx typeorm migration:create -n table-name-create -d src/database/migrations/table-name
```

**Seed**

```bash
$ npx typeorm migration:create -n table-name-insert -d src/database/seeders/table-name
```

**Generate module**

```bash
$ nest g module core/table-name
```

**Generate entity**

```bash
$ nest g class core/table-name/table-name.entity
```

**Generate repository**

```bash
$ nest g class core/table-name/table-name.repository
```

**Generate service**

```bash
$ nest g service core/table-name
```

**Generate controller**

```bash
$ nest g controller core/table-name
```