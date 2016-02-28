import { parse } from "path"
import lowerCamelCase from "camelcase"
import upperCamelCase from "uppercamelcase"
import { types as t } from "babel-core"

export function getModuleName(filename) {
  const name = parse(filename).name
  return name[0] === name[0].toUpperCase() ? upperCamelCase(name) : lowerCamelCase(name)
}

export function ensureIdentifier(value) {
  return typeof value === "string" ? t.identifier(value) : value
}

export function ensureStringLiteral(value) {
  return typeof value === "string" ? t.stringLiteral(value) : value
}

export function buildMockExportDefaultDeclaration(mock, name, expression) {
  return t.exportDefaultDeclaration(t.callExpression(
    ensureIdentifier(mock), [ ensureIdentifier(expression), ensureStringLiteral(name) ]
  ))
}

export function buildConst(name, declaration) {
  return t.variableDeclaration("const", [
    t.variableDeclarator(ensureIdentifier(name), ensureIdentifier(declaration)),
  ])
}

export function buildMockExportVar(mock, name, _name, declaration) {
  return t.variableDeclaration("const",
    [
      t.variableDeclarator(
        ensureIdentifier(_name),
        t.callExpression(
          ensureIdentifier(mock),
          [ ensureIdentifier(declaration || name), ensureStringLiteral(name) ]
        )
      ),
    ]
  )
}

export function buildExportNamedDeclaration(local, exported) {
  return t.exportNamedDeclaration(
    null,
    [
      t.exportSpecifier(ensureIdentifier(local), ensureIdentifier(exported)),
    ],
    null
  )
}

export function buildMocktailImport(mock) {
  return t.importDeclaration(
    [ t.importSpecifier(mock, ensureIdentifier("mock")) ],
    ensureStringLiteral("mocktail")
  )
}
