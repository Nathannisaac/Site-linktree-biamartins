import { type NextRequest, NextResponse } from "next/server"

interface Lead {
  id: string
  nome: string
  telefone: string
  site: string
  categoria: string
  createdAt: string
}

// Simulação de banco de dados em memória
const leads: Lead[] = []

export async function GET() {
  return NextResponse.json({ leads })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, telefone, site, categoria } = body

    // Validação básica
    if (!nome || !telefone || !categoria) {
      return NextResponse.json({ error: "Nome, telefone e categoria são obrigatórios" }, { status: 400 })
    }

    // Validar categoria
    const validCategories = ["contabilidade", "estetica", "advocacia", "clinicas"]
    if (!validCategories.includes(categoria)) {
      return NextResponse.json({ error: "Categoria inválida" }, { status: 400 })
    }

    // Criar novo lead
    const newLead: Lead = {
      id: Date.now().toString(),
      nome,
      telefone,
      site: site || "",
      categoria,
      createdAt: new Date().toISOString(),
    }

    leads.push(newLead)

    return NextResponse.json(
      {
        message: "Lead criado com sucesso",
        lead: newLead,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, nome, telefone, site, categoria } = body

    if (!id) {
      return NextResponse.json({ error: "ID é obrigatório para atualização" }, { status: 400 })
    }

    const leadIndex = leads.findIndex((lead) => lead.id === id)
    if (leadIndex === -1) {
      return NextResponse.json({ error: "Lead não encontrado" }, { status: 404 })
    }

    // Atualizar lead
    leads[leadIndex] = {
      ...leads[leadIndex],
      nome: nome || leads[leadIndex].nome,
      telefone: telefone || leads[leadIndex].telefone,
      site: site !== undefined ? site : leads[leadIndex].site,
      categoria: categoria || leads[leadIndex].categoria,
    }

    return NextResponse.json({
      message: "Lead atualizado com sucesso",
      lead: leads[leadIndex],
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "ID é obrigatório para exclusão" }, { status: 400 })
    }

    const leadIndex = leads.findIndex((lead) => lead.id === id)
    if (leadIndex === -1) {
      return NextResponse.json({ error: "Lead não encontrado" }, { status: 404 })
    }

    leads.splice(leadIndex, 1)

    return NextResponse.json({
      message: "Lead excluído com sucesso",
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
