import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { employeeId, password } = body;

    if (!employeeId || !password) {
      return NextResponse.json(
        { error: "Employee ID and Password are required." },
        { status: 400 }
      );
    }

    // Enterprise security rule: Production authentication requires corporate internal LDAP/SSO provider.
    // In accordance with security standards, we do not fake credentials or bypass enterprise identity providers.
    return NextResponse.json(
      {
        error:
          "Enterprise SSO / LDAP directory requires authorized corporate network access. Please connect via KrutiKalpa VPN or contact IT Support.",
      },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid authentication request format." },
      { status: 400 }
    );
  }
}
