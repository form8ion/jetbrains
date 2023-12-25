Feature: Lift

  @wip
  Scenario: Using a JetBrains IDE, but not configured
    When the project is lifted
    Then the `runConfigurations` directory is prevented from being ignored

  @wip
  Scenario: Using a JetBrains IDE, and already configured
    When the project is lifted
    Then the .gitignore is unchanged

  @wip
  Scenario: Not using a JetBrains IDE
    When the project is lifted
    Then the .gitignore is unchanged
