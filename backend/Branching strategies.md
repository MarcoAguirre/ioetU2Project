# Branching strategies

Branching strategies reffers to rules to define how a branch will be managed, those rules are there with the purpose of enhance the colaboration in a project.

In general, those rules helps you to set a standard to code and reduce the risk of conflicts.

There are some branching strategies that we can use but we are going to focus in only one of them.

**GITFLOW**

This is the most known strategy since it is easy to understand and the other strategies follow a similar way to manage branches as this one.

**Summary of Git Flow strategy**

1. A `develop` branch is created from `main`

2. A `release` branch is created from `develop`

3. `Feature` branches are created from `develop`

4. When a `feature` is complete it is merged into the `develop` branch

5. When the `release` branch is done it is merged into `develop` and `main`

6. If an issue in `main` is detected a `hotfix` branch is created from `main`

7. Once the `hotfix` is complete it is merged to both `develop` and `main`

Below there are some common examples you can use for your commit messages:

- **feat**: A new feature.
- **fix**: A bug fix.
- **perf**: A code change that improves performance.
- **build**: Changes that affect the build system or external dependencies (example scopes: npm, ts configuration).
- **ci**: Changes to our CI or CD configuration files and scripts (example scopes: Azure devops, github actions).
- **docs**: Documentation only changes.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **style**: Changes that do not affect the meaning of the code (typos, white-space, formatting, missing semi-colons, etc). It is important to mention that this key is not related to css styles.
- **test**: Adding missing tests or correcting existing tests.

### Branches examples:

```python
bug/avoid-creating-lead-twice
feature/add-new-user-form
hotfix/fix-typo-in-name
experiment/try-new-ui-design
```

`bug/avoid-creating-lead-twice
feature/add-new-user-form
hotfix/fix-typo-in-name
experiment/try-new-ui-design`

### Commit examples:

```python
git commit -m "feat: What have you done"
git commit -m "fix: What have you done"
git commit -m "style: What have you done"
git commit -m "test: What have you done"
```