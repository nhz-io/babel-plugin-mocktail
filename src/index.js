module.exports = function(babel) {
  var t = babel.types;
  const ProgramVisitor = {
    Program: function(path) {
      var declaration, specifiers, mockedExportIdentifier;
      var body = path.get('body');
      if(body[0]) {

        var mocktail = t.stringLiteral("mocktail");
        var mockLocalIdentifier = path.scope.generateUidIdentifier("mock");
        var mockImportSpecifier = t.importSpecifier(mockLocalIdentifier, t.identifier("mock"));
        body[0].insertBefore(t.importDeclaration([mockImportSpecifier], mocktail));

        body.forEach(function(childPath) {
          switch(true) {
            case childPath.isExportDefaultDeclaration():
              declaration = childPath.node.declaration
              childPath.node.declaration = t.callExpression(
                mockLocalIdentifier,
                [ declaration ]
              );
              break;

            case childPath.isExportNamedDeclaration():
              specifiers = childPath.node.specifiers;
              if(specifiers) {
                specifiers.forEach(function(specifier) {
                  mockedExportIdentifier = path.scope.generateUidIdentifier(specifier.local.name);
                  childPath.insertBefore(t.variableDeclaration(
                    "const",
                    [ t.variableDeclarator(
                      mockedExportIdentifier,
                      t.callExpression(
                        mockLocalIdentifier,
                        [ specifier.local ]
                      )
                    )]
                  ));
                  specifier.local = mockedExportIdentifier;
                });
              }

              declaration = childPath.node.declaration;
              if(declaration) {
                mockedExportIdentifier = path.scope.generateUidIdentifier(declaration.id.name);
                childPath.insertBefore(declaration);
                childPath.insertBefore(t.variableDeclaration(
                  "const",
                  [ t.variableDeclarator(
                    mockedExportIdentifier,
                    t.callExpression(
                      mockLocalIdentifier,
                      [ declaration.id ]
                    )
                  )]
                ));
                childPath.node.declaration = null;
                childPath.node.specifiers.push(t.exportSpecifier(mockedExportIdentifier, declaration.id));
              }

              break;
          }
        });

      }
    }
  }

  return { visitor: ProgramVisitor }
}
