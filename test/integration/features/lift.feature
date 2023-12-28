Feature: Lift

  Scenario: Using a JetBrains IDE, but not configured
    Given a JetBrains IDE is being used
    When the project is lifted
    Then the `runConfigurations` directory is prevented from being ignored

  Scenario: Not using a JetBrains IDE
    Given a JetBrains IDE is not being used
    When the project is lifted
    Then no additional ignores are defined
